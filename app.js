/* ==========================================================
   Tournament App
   app.js
========================================================== */


/* ==========================================================
   Supabase
========================================================== */

const SUPABASE_URL =
    "https://qpqtrqqkeewbspaxgfig.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_oWCW9S3wryvTdrXM9xdaYA_Gp8A23Md";


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


/* ==========================================================
   状態
========================================================== */
let currentUser = null;
let authorizedHost = false;

let currentTournament = null;

let currentParticipants = [];

let currentMatches = [];

let currentBracketSlots = [];

let matchupDraggedParticipantId = null;

let matchupDragGhost = null;

let matchupCurrentDropTarget = null;

let matchupReturnTargetActive = false;

let matchupDraggedSourceSlotId = null;

let matchupDraggedSourceSide = null;

let matchupDraggedSlotId = null;

let matchupCardDragGhost = null;

let matchupCardCurrentDropTarget = null;

let currentParticipant = null;

let isHost = false;

let realtimeChannel = null;

let tournamentListRealtimeChannel = null;

let tournamentListRealtimeTimer = null;

let realtimeRefreshTimer = null;

let dialogResolve = null;

let isLoadingTournament = false;

let draggedParticipantId = null;

let draggedParticipantElement = null;

let participantOrderSaving = false;

let participantOrderSaveTimer = null;

/* ==========================================================
   DOM
========================================================== */

const messageElement =
    document.getElementById(
        "message"
    );


const homeScreen =
    document.getElementById(
        "homeScreen"
    );


const tournamentScreen =
    document.getElementById(
        "tournamentScreen"
    );


const tournamentModeSelection =
    document.getElementById(
        "tournamentModeSelection"
    );

const normalTournamentMode =
    document.getElementById(
        "normalTournamentMode"
    );

const youtubeTournamentMode =
    document.getElementById(
        "youtubeTournamentMode"
    );

const normalTournamentModeButton =
    document.getElementById(
        "normalTournamentModeButton"
    );

const youtubeTournamentModeButton =
    document.getElementById(
        "youtubeTournamentModeButton"
    );

const normalTournamentModeBackButton =
    document.getElementById(
        "normalTournamentModeBackButton"
    );

const youtubeTournamentModeBackButton =
    document.getElementById(
        "youtubeTournamentModeBackButton"
    );

const createYoutubeTournamentForm =
    document.getElementById("createYoutubeTournamentForm");
const youtubeTournamentName =
    document.getElementById("youtubeTournamentName");
const youtubeHostHandle =
    document.getElementById("youtubeHostHandle");
const youtubeStreamUrl =
    document.getElementById("youtubeStreamUrl");
const youtubeCreateError =
    document.getElementById("youtubeCreateError");
const createYoutubeTournamentButton =
    document.getElementById("createYoutubeTournamentButton");


/* ----------------------------------------------------------
   大会作成
---------------------------------------------------------- */

const createTournamentForm =
    document.getElementById(
        "createTournamentForm"
    );


const tournamentNameInput =
    document.getElementById(
        "tournamentName"
    );


const createTournamentButton =
    document.getElementById(
        "createTournamentButton"
    );


/* ----------------------------------------------------------
   大会参加
---------------------------------------------------------- */

const joinTournamentForm =
    document.getElementById(
        "joinTournamentForm"
    );


const tournamentCodeInput =
    document.getElementById(
        "tournamentCode"
    );


const displayNameInput =
    document.getElementById(
        "displayName"
    );


const joinTournamentButton =
    document.getElementById(
        "joinTournamentButton"
    );


/* ----------------------------------------------------------
   あなたの大会
---------------------------------------------------------- */

const myTournamentList =
    document.getElementById(
        "myTournamentList"
    );


const showArchivedTournamentsButton =
    document.getElementById(
        "showArchivedTournamentsButton"
    );


const archivedTournamentList =
    document.getElementById(
        "archivedTournamentList"
    );


const archiveAllHostTournamentsButton =
    document.getElementById(
        "archiveAllHostTournamentsButton"
    );


const deleteAllHostTournamentsButton =
    document.getElementById(
        "deleteAllHostTournamentsButton"
    );


/* ----------------------------------------------------------
   大会情報
---------------------------------------------------------- */

const currentTournamentName =
    document.getElementById(
        "currentTournamentName"
    );


const currentTournamentCode =
    document.getElementById(
        "currentTournamentCode"
    );


const copyTournamentCodeButton =
    document.getElementById(
        "copyTournamentCodeButton"
    );

const toggleTournamentCodeButton =
    document.getElementById(
        "toggleTournamentCodeButton"
    );

let isTournamentCodeVisible = false;


/* ----------------------------------------------------------
   参加者
---------------------------------------------------------- */

const matchupParticipantCount =
    document.getElementById(
        "matchupParticipantCount"
    );


const hostParticipantCount =
    document.getElementById(
        "hostParticipantCount"
    );


/* ----------------------------------------------------------
   トーナメント表
---------------------------------------------------------- */

const tournamentStatus =
    document.getElementById(
        "tournamentStatus"
    );

const fullscreenBracketButton = document.getElementById("fullscreenBracketButton");
const pauseTournamentButton = document.getElementById("pauseTournamentButton");


const bracket =
    document.getElementById(
        "bracket"
    );


/* ----------------------------------------------------------
   自分の試合
---------------------------------------------------------- */

const myMatchArea =
    document.getElementById(
        "myMatchArea"
    );


const myMatchInfo =
    document.getElementById(
        "myMatchInfo"
    );


const victoryButton =
    document.getElementById(
        "victoryButton"
    );


/* ----------------------------------------------------------
   主催者メニュー
---------------------------------------------------------- */

const hostControls =
    document.getElementById(
        "hostControls"
    );


const startTournamentButton =
    document.getElementById(
        "startTournamentButton"
    );


const undoButton =
    document.getElementById(
        "undoButton"
    );


const resetTournamentButton =
    document.getElementById(
        "resetTournamentButton"
    );


const reopenTournamentButton =
    document.getElementById(
        "reopenTournamentButton"
    );


const archiveTournamentButton =
    document.getElementById(
        "archiveTournamentButton"
    );


const hostParticipantList =
    document.getElementById(
        "hostParticipantList"
    );


/* ----------------------------------------------------------
   対戦カード作成
---------------------------------------------------------- */

const matchupBuilder =
    document.getElementById(
        "matchupBuilder"
    );


const matchupParticipantList =
    document.getElementById(
        "matchupParticipantList"
    );


const addMatchupButton =
    document.getElementById(
        "addMatchupButton"
    );


const matchupCardList =
    document.getElementById(
        "matchupCardList"
    );

/* ----------------------------------------------------------
   戻る
---------------------------------------------------------- */

const leaveTournamentButton =
    document.getElementById(
        "leaveTournamentButton"
    );


/* ----------------------------------------------------------
   ダイアログ
---------------------------------------------------------- */

const dialogOverlay =
    document.getElementById(
        "dialogOverlay"
    );


const dialogTitle =
    document.getElementById(
        "dialogTitle"
    );


const dialogMessage =
    document.getElementById(
        "dialogMessage"
    );


const dialogConfirm =
    document.getElementById(
        "dialogConfirm"
    );


const dialogCancel =
    document.getElementById(
        "dialogCancel"
    );


/* ==========================================================
   初期化
========================================================== */

/* YouTube参加者と匿名ブラウザアカウントの連携 */
let youtubeLinkCheckTimer = null;
let youtubeLinkCountdownTimer = null;
let youtubeLinkExpiresAt = 0;
let youtubeLinkBusy = false;
let youtubeLinkDetailsHidden = false;
let youtubeLinkHasCode = false;

function updateYoutubeLinkView() {
    const challenge = document.getElementById("youtubeLinkChallenge");
    const button = document.getElementById("youtubeLinkStartButton");
    const reissue = document.getElementById("youtubeLinkReissueButton");
    const visible = youtubeLinkHasCode && !youtubeLinkDetailsHidden;
    challenge?.classList.toggle("hidden", !visible);
    if (button) {
        button.innerHTML = youtubeLinkHasCode
            ? `YouTube 連携型の<br>大会閲覧コード${visible ? "非表示" : "表示"}`
            : "YouTube 連携型の<br>大会閲覧コード発行";
        button.setAttribute("aria-expanded", String(visible));
    }
    reissue?.classList.toggle("hidden", !visible);
}

function updateYoutubeLinkCountdown() {
    const element = document.getElementById("youtubeLinkCountdown");
    if (!element || !youtubeLinkExpiresAt) return;
    const seconds = Math.max(0, Math.ceil((youtubeLinkExpiresAt - Date.now()) / 1000));
    element.textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    if (seconds === 0) {
        clearInterval(youtubeLinkCountdownTimer);
        youtubeLinkCountdownTimer = null;
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        const status = document.getElementById("youtubeLinkStatus");
        if (status && status.textContent === "チャットへの投稿を待っています…") {
            status.textContent = "コードの有効期限が切れました。再発行してください。";
        }
    }
}

async function checkYoutubeLinkStatus() {
    const status = document.getElementById("youtubeLinkStatus");
    const { data, error } = await supabaseClient.rpc("youtube_link_status");
    if (error) {
        if (status) status.textContent = "確認に失敗しました。もう一度お試しください。";
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        return;
    }
    if (data?.linked) {
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        if (status) status.textContent = "連携が完了しました！大会一覧を更新します。";
        await loadMyTournaments();
    } else if (!data?.pending) {
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        if (status) status.textContent = "コードの有効期限が切れました。再発行してください。";
    }
}

async function startYoutubeLink() {
    if (youtubeLinkBusy || !currentUser) return;
    if (youtubeLinkHasCode) {
        youtubeLinkDetailsHidden = !youtubeLinkDetailsHidden;
        updateYoutubeLinkView();
        return;
    }
    await issueYoutubeLinkCode();
}

async function issueYoutubeLinkCode() {
    if (youtubeLinkBusy || !currentUser) return;
    youtubeLinkBusy = true;
    const button = document.getElementById("youtubeLinkStartButton");
    const reissue = document.getElementById("youtubeLinkReissueButton");
    const status = document.getElementById("youtubeLinkStatus");
    if (button) button.disabled = true;
    if (reissue) reissue.disabled = true;
    try {
        const { data, error } = await supabaseClient.rpc("youtube_link_create_code");
        if (error) throw error;
        document.getElementById("youtubeLinkCode").textContent = data;
        youtubeLinkHasCode = true;
        youtubeLinkDetailsHidden = false;
        youtubeLinkExpiresAt = Date.now() + 10 * 60 * 1000;
        clearInterval(youtubeLinkCountdownTimer);
        updateYoutubeLinkCountdown();
        youtubeLinkCountdownTimer = setInterval(updateYoutubeLinkCountdown, 1000);
        if (status) status.textContent = "チャットへの投稿を待っています…";
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = setInterval(checkYoutubeLinkStatus, 4000);
        updateYoutubeLinkView();
    } catch (error) {
        const raw = error?.message || "不明なエラー";
        const message = /Please wait before requesting another code/i.test(raw)
            ? "短時間での再発行は制限されています。少し待ってから再発行してください。"
            : "コード発行に失敗しました：" + raw;
        if (youtubeLinkHasCode) {
            if (status) status.textContent = message;
            youtubeLinkDetailsHidden = false;
            updateYoutubeLinkView();
        } else {
            showMessage(message, "error");
        }
    } finally {
        youtubeLinkBusy = false;
        if (button) button.disabled = false;
        if (reissue) reissue.disabled = false;
    }
}

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);


async function initializeApp() {

    try {

        setGlobalLoading(
            true
        );


        // Hidden maintenance URL: ?logout=1
        // Run before anonymous session restoration to avoid immediately reusing Google login.
        if (new URLSearchParams(window.location.search).get("logout") === "1") {
            const { error } = await supabaseClient.auth.signOut({ scope: "local" });
            if (error) throw error;
            // Keep localStorage preferences, including the last YouTube handle.
            const cleanUrl = new URL(window.location.href);
            cleanUrl.searchParams.delete("logout");
            cleanUrl.searchParams.delete("watch");
            cleanUrl.searchParams.delete("t");
            cleanUrl.searchParams.delete("page");
            window.location.replace(cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
            return;
        }

        await ensureAnonymousSession();
        await refreshHostAuthorization();


        document.getElementById("hostGoogleLoginButton")?.addEventListener("click", loginAsHostWithGoogle);
        document.getElementById("hostGoogleLogoutButton")?.addEventListener("click", logoutGoogleAccount);
        initializeHostLoginHelp();
        await restoreYoutubeHostHandle();
        registerEvents();
        document.getElementById("youtubeLinkStartButton")?.addEventListener("click", startYoutubeLink);
        document.getElementById("youtubeLinkReissueButton")?.addEventListener("click", issueYoutubeLinkCode);

        /* TOPの大会一覧も他ブラウザからの終了・削除を即時反映 */
        subscribeTournamentListRealtime();
        // YouTube chat registration / account linking can happen after login.
        // Recheck the participant role without requiring a logout/login cycle.
        startYoutubeParticipationRefresh();
        await linkYoutubeParticipantsFromGoogle();

        /* ブラウザの戻る・進むでもTOP/大会画面を復元する */
        window.addEventListener("popstate", handleBrowserHistoryNavigation);

        initializePublicWatch();
        const watchToken = new URLSearchParams(window.location.search).get("watch");
        if (watchToken) {
            await openPublicWatch(watchToken);
            return;
        }
        const tournamentAccessToken =
            getTournamentAccessTokenFromURL();


        if (tournamentAccessToken) {

            await openTournamentByAccessToken(
                tournamentAccessToken,
                { updateHistory: false }
            );

        } else {

            showHome();
            restoreHomeModeAfterReload();

            await loadMyTournaments();
            await loadPublicWatches();
            renderYoutubeCreatePage();

        }

    } catch (error) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setGlobalLoading(
            false
        );

    }

}


/* ==========================================================
   あなたの大会
========================================================== */

async function loadMyTournaments() {

    if (!currentUser) {
        return;
    }


    const {
        data: hostedTournaments,
        error: hostedError
    } = await supabaseClient
        .from("tournaments")
        .select(
            "id, watch_token, tournament_code, name, tournament_mode, status, archived_at, created_at"
        )
        .eq(
            "host_user_id",
            currentUser.id
        );


    if (hostedError) {
        throw hostedError;
    }


    const {
        data: participationRows,
        error: participationError
    } = await supabaseClient
        .from("participants")
        .select(
            `
            tournament_id,
            tournaments (
                id,
                watch_token,
                tournament_code,
                name,
                tournament_mode,
                status,
                archived_at,
                created_at
            )
            `
        )
        .eq(
            "user_id",
            currentUser.id
        );


    if (participationError) {
        throw participationError;
    }


    const tournamentMap =
        new Map();


    for (const tournament of hostedTournaments || []) {

        tournamentMap.set(
            tournament.id,
            {
                ...tournament,
                role: "host"
            }
        );

    }


    for (const row of participationRows || []) {

        const tournament =
            row.tournaments;


        if (!tournament) {
            continue;
        }


        if (tournamentMap.has(
            tournament.id
        )) {
            continue;
        }


        tournamentMap.set(
            tournament.id,
            {
                ...tournament,
                role: "participant"
            }
        );

    }


    const tournaments =
        Array.from(tournamentMap.values())
            .filter(t => t.tournament_mode === "youtube");


    /*
       優勝者が決まっている大会だけ、
       最終ラウンドの winner_id から表示名を取得する。
    */
    const tournamentIds =
        tournaments.map(
            tournament => tournament.id
        );


    if (
        tournamentIds.length > 0
    ) {

        const {
            data: winnerMatches,
            error: winnerMatchesError
        } =
            await supabaseClient
                .from("matches")
                .select("tournament_id, round_number, winner_id")
                .in("tournament_id", tournamentIds)
                .not("winner_id", "is", null);


        if (
            winnerMatchesError
        ) {

            throw winnerMatchesError;

        }


        const championIdByTournament =
            new Map();


        for (
            const match of winnerMatches || []
        ) {

            const current =
                championIdByTournament.get(
                    match.tournament_id
                );


            if (
                !current
                ||
                Number(match.round_number) >
                    Number(current.round_number)
            ) {

                championIdByTournament.set(
                    match.tournament_id,
                    match
                );

            }

        }


        const championIds =
            [
                ...new Set(
                    [...championIdByTournament.values()]
                        .map(match => match.winner_id)
                        .filter(Boolean)
                )
            ];


        const championNameById =
            new Map();


        if (
            championIds.length > 0
        ) {

            const {
                data: championParticipants,
                error: championParticipantsError
            } =
                await supabaseClient
                    .from("participants")
                    .select("id, display_name")
                    .in("id", championIds);


            if (
                championParticipantsError
            ) {

                throw championParticipantsError;

            }


            for (
                const participant of championParticipants || []
            ) {

                championNameById.set(
                    participant.id,
                    participant.display_name
                );

            }

        }


        for (
            const tournament of tournaments
        ) {

            if (
                tournament.status !== "finished"
            ) {

                continue;

            }


            const finalWinner =
                championIdByTournament.get(
                    tournament.id
                );


            if (
                finalWinner?.winner_id
            ) {

                tournament.champion_name =
                    championNameById.get(
                        finalWinner.winner_id
                    ) || "";

            }

        }

    }


    tournaments.sort(
        (a, b) =>
            new Date(
                b.created_at
            ) -
            new Date(
                a.created_at
            )
    );


    myTournamentAccessByWatchToken = new Map(
        tournaments.filter(t => t.watch_token && t.tournament_code)
            .map(t => [t.watch_token, {code:t.tournament_code, role:t.role}])
    );
    // Refresh catalog labels when the account's tournament access changes.
    if (document.getElementById("publicWatchPanel")) await loadPublicWatches();

    renderMyTournaments(
        tournaments
    );

}

function renderMyTournaments(
    tournaments
) {

    const activeTournaments =
        tournaments.filter(
            tournament =>
                !tournament.archived_at
        );


    const archivedTournaments =
        tournaments.filter(
            tournament =>
                tournament.archived_at
        );


    if (
        activeTournaments.length === 0
    ) {

        myTournamentList.innerHTML = `
            <div class="empty-state">
                参加中の大会はありません。
            </div>
        `;

    } else {

        myTournamentList.innerHTML =
            activeTournaments
                .map(
                    tournament =>
                        createMyTournamentHTML(
                            tournament
                        )
                )
                .join("");

    }


    if (
        archivedTournaments.length === 0
    ) {

        showArchivedTournamentsButton
            .classList
            .add(
                "hidden"
            );

        archivedTournamentList
            .classList
            .add(
                "hidden"
            );

        archivedTournamentList
            .innerHTML = "";

    } else {

        showArchivedTournamentsButton
            .classList
            .remove(
                "hidden"
            );


        archivedTournamentList.innerHTML =
            archivedTournaments
                .map(
                    tournament =>
                        createMyTournamentHTML(
                            tournament
                        )
                )
                .join("");

    }

}

function escapeHtml(
    value
) {

    return String(
        value ?? ""
    )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


function createMyTournamentHTML(
    tournament
) {

    const roleText =
        tournament.role === "host"
            ? "主催者"
            : "参加者";


    let statusText =
        "開催前";


    if (
        tournament.status === "active"
    ) {

        statusText =
            "開催中";

    } else if (
        tournament.status === "finished"
    ) {

        statusText =
            "大会終了";

    }


    if (
        tournament.archived_at
    ) {

        statusText =
            "終了済み";

    }


    return `
        <div class="my-tournament-item">

            <div class="my-tournament-info">

                <div class="my-tournament-type">
                    トーナメント種類：「${tournament.tournament_mode === "youtube" ? "YouTube 連携トーナメント" : "通常トーナメント"}」
                </div>

                <strong class="my-tournament-name">
                    ${escapeHtml(
                        tournament.name
                    )}
                </strong>

                <div class="my-tournament-meta">
                    ${roleText}
                    ・
                    ${statusText}
                </div>

                ${
                    tournament.champion_name
                        ? `
                        <div class="my-tournament-champion">
                            優勝者：${escapeHtml(
                                tournament.champion_name
                            )}
                        </div>
                        `
                        : ""
                }

            </div>

            <button
                class="button button-secondary my-tournament-open-button"
                type="button"
                data-tournament-code="${escapeHtml(
                    tournament.tournament_code
                )}"
            >
                大会ページへ
            </button>

        </div>
    `;

}

/* ==========================================================
   Anonymous Auth
========================================================== */

async function ensureAnonymousSession() {

    const {
        data: sessionData,
        error: sessionError
    } =
        await supabaseClient
            .auth
            .getSession();


    if (sessionError) {

        throw sessionError;

    }


    if (
        sessionData.session
    ) {

        currentUser =
            sessionData
                .session
                .user;


        return;

    }


    const {
        data,
        error
    } =
        await supabaseClient
            .auth
            .signInAnonymously();


    if (error) {

        throw error;

    }


    currentUser =
        data.user;

}


/* ==========================================================
   主催者 Google OAuth / 許可リスト
   匿名参加者は従来どおりログイン不要。
========================================================== */

function initializeHostLoginHelp() {
    const button = document.getElementById("hostLoginHelpToggle");
    const content = document.getElementById("hostLoginHelp");
    if (!button || !content) return;
    const key = "tournament_google_login_help_expanded_v1";
    let expanded = true;
    try { expanded = localStorage.getItem(key) !== "false"; } catch (_) {}
    function render() {
        content.hidden = !expanded;
        button.setAttribute("aria-expanded", String(expanded));
        button.textContent = expanded ? "説明を非表示" : "説明を表示";
    }
    render();
    button.addEventListener("click", () => {
        expanded = !expanded;
        try { localStorage.setItem(key, String(expanded)); } catch (_) {}
        render();
    });
}

async function refreshHostAuthorization() {
    authorizedHost = false;
    const button = document.getElementById("hostGoogleLoginButton");
    const logoutButton = document.getElementById("hostGoogleLogoutButton");
    const status = document.getElementById("hostLoginStatus");
    const isGoogle = Boolean(currentUser?.identities?.some(i => i.provider === "google"))
        || currentUser?.app_metadata?.providers?.includes("google") === true;

    if (isGoogle) {
        const { data, error } = await supabaseClient.rpc("is_authorized_host");
        if (error) {
            console.error("主催者権限の確認に失敗しました", error);
            if (status) status.textContent = "主催者権限を確認できませんでした。再読み込みしてください。";
        } else {
            authorizedHost = data === true;
            if (status) status.textContent = authorizedHost
                ? "主催者として認証されています。"
                : "Google連携済みです。大会の観戦・参加ができます（主催者権限なし）。";
        }
        if (button) button.classList.add("hidden");
        if (logoutButton) logoutButton.classList.remove("hidden");
    } else {
        if (status) status.textContent = "主催者・YouTube連携大会の参加者はGoogle連携できます。観戦・チャット参加はログイン不要です。";
        if (button) button.classList.remove("hidden");
        if (logoutButton) logoutButton.classList.add("hidden");
    }

    document.getElementById("hostNormalCreatePanel")?.classList.add("hidden");
    document.getElementById("hostYoutubeCreateRow")?.classList.toggle("hidden", !authorizedHost);
    if (!authorizedHost && isYoutubeCreatePage()) {
        const url = new URL(window.location.href);
        url.searchParams.delete("page");
        window.history.replaceState({ screen: "home" }, "", url.pathname + url.search + url.hash);
    }
}

function logoutGoogleAccount() {
    // Reuse the existing logout route so the session and URL cleanup stay consistent.
    const url = new URL(window.location.href);
    url.searchParams.set("logout", "1");
    window.location.assign(url.pathname + url.search + url.hash);
}

async function loginAsHostWithGoogle() {
    const button = document.getElementById("hostGoogleLoginButton");
    if (button) button.disabled = true;
    try {
        const redirectTo = window.location.origin + window.location.pathname;
        const options = { redirectTo, scopes: "https://www.googleapis.com/auth/youtube.readonly" };
        const { error } = await supabaseClient.auth.signInWithOAuth({ provider: "google", options });
        if (error) throw error;
    } catch (error) {
        showMessage("Google連携を開始できませんでした。" + (error?.message || error), "error");
        if (button) button.disabled = false;
    }
}

/* ==========================================================
   イベント登録
========================================================== */

function registerEvents() {

    normalTournamentModeButton?.addEventListener(
        "click",
        () => openTournamentMode("normal")
    );

    youtubeTournamentModeButton?.addEventListener(
        "click",
        () => openTournamentMode("youtube")
    );

    normalTournamentModeBackButton?.addEventListener(
        "click",
        () => window.history.back()
    );

    youtubeTournamentModeBackButton?.addEventListener(
        "click",
        () => window.history.back()
    );

    createYoutubeTournamentForm?.addEventListener(
        "submit",
        handleCreateYoutubeTournament
    );
    document.getElementById("youtubeApiTestButton")?.addEventListener(
        "click",
        handleYoutubeApiConnectionTest
    );
    document.getElementById("youtubeLiveTestButton")?.addEventListener(
        "click", handleYoutubeLiveTest
    );
    document.getElementById("youtubeLiveSaveButton")?.addEventListener(
        "click", handleYoutubeLiveSave
    );
    document.getElementById("youtubeChatMonitorStartButton")?.addEventListener(
        "click", startYoutubeChatMonitor
    );
    document.getElementById("youtubeChatMonitorStopButton")?.addEventListener(
        "click", () => stopYoutubeChatMonitor()
    );

    // 通常版の作成イベントは第二次開発まで無効。

    // 通常版の参加イベントは第二次開発まで無効。

    myTournamentList
        .addEventListener(
            "click",
            handleMyTournamentClick
        );

    archivedTournamentList
        .addEventListener(
            "click",
            handleMyTournamentClick
        );


    showArchivedTournamentsButton
        .addEventListener(
            "click",
            handleShowArchivedTournaments
        );


    archiveAllHostTournamentsButton?.addEventListener(
        "click",
        handleArchiveAllHostTournaments
    );


    deleteAllHostTournamentsButton?.addEventListener(
        "click",
        handleDeleteAllHostTournaments
    );

    copyTournamentCodeButton
        .addEventListener(
            "click",
            copyTournamentCode
        );

    toggleTournamentCodeButton
        .addEventListener(
            "click",
            toggleTournamentCodeVisibility
        );

    addMatchupButton
        .addEventListener(
            "click",
            handleAddMatchup
        );

    startTournamentButton
        .addEventListener(
            "click",
            handleStartTournament
        );

    pauseTournamentButton?.addEventListener("click", handlePauseTournament);
    fullscreenBracketButton?.addEventListener("click", openFullscreenBracket);
    document.getElementById("previewFullscreenButton")?.addEventListener("click", openFullscreenBracket);
    document.getElementById("bracketLiveParticipantSearchForm")?.addEventListener("submit", handleBracketLiveParticipantSearch);
    document.getElementById("participantSearchForm")?.addEventListener("submit", handleParticipantSearch);
    document.getElementById("bracketSetupCanvas")?.addEventListener("click", handleGeneratedBracketAction);

    victoryButton
        .addEventListener(
            "click",
            handleVictory
        );

    undoButton
        .addEventListener(
            "click",
            handleUndo
        );

    resetTournamentButton
        .addEventListener(
            "click",
            handleResetTournament
        );


    reopenTournamentButton
        .addEventListener(
            "click",
            handleReopenTournament
        );


    archiveTournamentButton
        .addEventListener(
            "click",
            handleArchiveTournament
        );


    leaveTournamentButton
        .addEventListener(
            "click",
            handleLeaveTournament
        );


    dialogConfirm
        .addEventListener(
            "click",
            () => {

                closeDialog(
                    true
                );

            }
        );


    dialogCancel
        .addEventListener(
            "click",
            () => {

                closeDialog(
                    false
                );

            }
        );

    dialogOverlay
        .addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    dialogOverlay
                ) {

                    closeDialog(
                        false
                    );

                }

            }
        );

    document
        .addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                        "Escape"
                    &&
                    !dialogOverlay
                        .classList
                        .contains(
                            "hidden"
                        )
                ) {

                    closeDialog(
                        false
                    );

                }

            }
        );

}

async function handleMyTournamentClick(
    event
) {

    const button =
        event.target.closest(
            ".my-tournament-open-button"
        );


    if (!button) {
        return;
    }


    const tournamentCode =
        button.dataset.tournamentCode;


    if (!tournamentCode) {
        return;
    }


    try {

        setButtonLoading(
            button,
            true
        );


        await openTournament(
            tournamentCode
        );

    } catch (error) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setButtonLoading(
            button,
            false
        );

    }

}


function handleShowArchivedTournaments() {

    const isHidden =
        archivedTournamentList
            .classList
            .contains(
                "hidden"
            );


    if (isHidden) {

        archivedTournamentList
            .classList
            .remove(
                "hidden"
            );


        showArchivedTournamentsButton
            .textContent =
                "終了した大会を隠す";

    } else {

        archivedTournamentList
            .classList
            .add(
                "hidden"
            );


        showArchivedTournamentsButton
            .textContent =
                "終了した大会を表示";

    }

}

/* ==========================================================
   大会作成
========================================================== */

async function handleYoutubeApiConnectionTest() {
    const button = document.getElementById("youtubeApiTestButton");
    const result = document.getElementById("youtubeApiTestResult");
    const handle = youtubeHostHandle?.value.trim() || "";

    result.classList.remove("hidden");
    result.textContent = "";

    if (!isYoutubeHandleFormat(handle)) {
        result.textContent = "先にYouTubeハンドル（@から始まる形式）を入力してください。";
        return;
    }

    button.disabled = true;
    button.textContent = "接続確認中...";
    try {
        const { data: sessionData, error: sessionError } =
            await supabaseClient.auth.getSession();
        if (sessionError) throw sessionError;
        if (!sessionData?.session?.access_token) {
            throw new Error("ログイン情報がありません。ページを再読み込みしてください。");
        }

        const { data, error } = await supabaseClient.functions.invoke(
            "youtube-resolve-channel",
            { body: { handle } }
        );

        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            } catch (_) {}
            throw new Error(detail || error.message || "接続に失敗しました。");
        }

        if (!data?.channelId) {
            throw new Error(data?.error || "チャンネルIDが取得できませんでした。");
        }

        result.textContent =
            `接続成功：${data.title || "チャンネル"} / Channel ID：${data.channelId}`;
    } catch (error) {
        console.error("YouTube connection test:", error);
        result.textContent = `接続失敗：${error.message || "不明なエラー"}`;
    } finally {
        button.disabled = false;
        button.textContent = "YouTubeチャンネル接続テスト";
    }
}


async function handleYoutubeLiveTest() {
    const button = document.getElementById("youtubeLiveTestButton");
    const result = document.getElementById("youtubeLiveTestResult");
    const handle = youtubeHostHandle?.value.trim() || "";
    const streamUrl = youtubeStreamUrl?.value.trim() || "";
    result.classList.remove("hidden");
    if (!isYoutubeHandleFormat(handle)) {
        result.textContent = "YouTubeハンドルを正しく入力してください。";
        return;
    }
    button.disabled = true;
    button.textContent = "LIVEを確認中...";
    result.textContent = "LIVE情報を取得しています...";
    try {
        const { data: sessionData, error: sessionError } =
            await supabaseClient.auth.getSession();
        if (sessionError) throw sessionError;
        if (!sessionData?.session?.access_token) {
            throw new Error("認証情報がありません。ページを更新してください。");
        }
        const { data, error } = await supabaseClient.functions.invoke(
            "youtube-detect-live", { body: { handle, streamUrl } }
        );
        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            } catch (_) {}
            throw new Error(detail || error.message || "LIVE検出に失敗しました。");
        }
        if (data?.error) throw new Error(data.error);
        if (data?.live) {
            result.textContent = `LIVE検出成功：${data.title || "配信中"} / Video ID：${data.videoId} / Live Chat ID：${data.liveChatId}`;
        } else {
            result.textContent = data?.message || "現在LIVE配信はありません。";
        }
    } catch (error) {
        console.error("YouTube LIVE detection test:", error);
        result.textContent = `LIVE検出失敗：${error.message || "不明なエラー"}`;
    } finally {
        button.disabled = false;
        button.textContent = "LIVE接続テスト";
    }
}


async function handleCreateYoutubeTournament(event) {

    event.preventDefault();
    if (!authorizedHost) { showYoutubeCreateError("大会作成には許可された主催者のGoogleログインが必要です。"); return; }
    youtubeCreateError?.classList.add("hidden");

    const name = youtubeTournamentName?.value.trim() || "";
    const handle = youtubeHostHandle?.value.trim() || "";
    const streamUrl = youtubeStreamUrl?.value.trim() || "";

    if (!youtubeHandleVerified || handle !== youtubeHostHandle.value.trim()) {
        showYoutubeCreateError("YouTube本人確認が必要です。GoogleでYouTubeを再認証してください。");
        return;
    }

    if (!name) {
        showYoutubeCreateError("大会名を入力してください。");
        return;
    }

    if (!handle || !handle.startsWith("@") || handle.length < 2) {
        showYoutubeCreateError("YouTubeハンドルは @ から入力してください。");
        return;
    }

    if (streamUrl) {
        try {
            const url = new URL(streamUrl);
            const host = url.hostname.toLowerCase();
            if (!["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(host)) {
                throw new Error("not-youtube");
            }
        } catch {
            showYoutubeCreateError("配信URLにはYouTubeのURLを入力してください。");
            return;
        }
    }

    createYoutubeTournamentButton.disabled = true;
    createYoutubeTournamentButton.textContent = "作成中...";

    try {
        const { data, error } = await supabaseClient.rpc(
            "create_youtube_tournament",
            {
                p_name: name,
                p_youtube_host_handle: handle,
                p_youtube_stream_url: streamUrl || null
            }
        );

        if (error) throw error;

        const tournament = Array.isArray(data) ? data[0] : data;
        if (!tournament?.id) {
            throw new Error("YouTube連携大会の作成結果を取得できませんでした。");
        }
        saveYoutubeHandleLocally();
        // Verified identity is synchronized during login, not from free-form input.

        // YouTube API監視はここでは開始しない。
        // 次段階で「主催者が大会ページを開いている間だけ」接続する。
        await openTournament(tournament.tournament_code);

    } catch (error) {
        console.error(error);
        const message =
            error?.message?.includes("YouTube handle must start with @")
                ? "YouTubeハンドルは @ から入力してください。"
                : error?.message?.includes("Tournament name")
                    ? "大会名は1～100文字で入力してください。"
                    : "YouTube連携大会を作成できませんでした。もう一度お試しください。";
        showYoutubeCreateError(message);
    } finally {
        createYoutubeTournamentButton.disabled = false;
        createYoutubeTournamentButton.textContent = "YouTube連携大会を作成する";
    }
}

function showYoutubeCreateError(message) {
    if (!youtubeCreateError) return;
    youtubeCreateError.textContent = message;
    youtubeCreateError.classList.remove("hidden");
}


async function handleCreateTournament(
    event
) {

    event.preventDefault();
    if (!authorizedHost) { showMessage("大会作成には許可された主催者のGoogleログインが必要です。", "error"); return; }


    const name =
        tournamentNameInput
            .value
            .trim();


    if (!name) {

        showMessage(
            "大会名を入力してください。",
            "error"
        );


        return;

    }


    try {

        setButtonLoading(
            createTournamentButton,
            true,
            "作成中..."
        );


        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "create_tournament",
                {
                    p_name:
                        name
                }
            );


        if (error) {

            throw error;

        }


        if (
            !data ||
            data.length === 0
        ) {

            throw new Error(
                "大会の作成結果を取得できませんでした。"
            );

        }


        const tournament =
            data[0];


        tournamentNameInput.value =
            "";


        await openTournament(
            tournament
                .tournament_code
        );


        showMessage(
            "トーナメントを作成しました。",
            "success"
        );

    } catch (error) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setButtonLoading(
            createTournamentButton,
            false
        );

    }

}


/* ==========================================================
   参加者名 Unicode 入力チェック
========================================================== */

function trimParticipantName(name) {
    return String(name ?? "").replace(/^[\p{White_Space}\u3000]+|[\p{White_Space}\u3000]+$/gu, "");
}

function countParticipantNameCharacters(name) {
    if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
        const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
        return Array.from(segmenter.segment(name)).length;
    }
    return Array.from(name).length;
}

function validateParticipantName(name) {
    const normalizedName = trimParticipantName(name);

    if (!normalizedName || /^[\p{White_Space}\u3000]+$/u.test(normalizedName)) {
        return { valid: false, name: "", message: "参加者名を入力してください。" };
    }

    const hasHan = /\p{Script=Han}/u.test(normalizedName);
    const hasHangul = /\p{Script=Hangul}/u.test(normalizedName);
    const hasHiragana = /\p{Script=Hiragana}/u.test(normalizedName);
    const hasKatakana = /\p{Script=Katakana}/u.test(normalizedName);

    let limit = 35;
    let message = "参加者名は35文字以内で入力してください。";

    if (hasHan || hasHangul) {
        limit = 15;
        message = "漢字・ハングルを含む参加者名は15文字以内で入力してください。";
    } else if (hasHiragana || hasKatakana) {
        limit = 30;
        message = "ひらがな・カタカナを含む参加者名は30文字以内で入力してください。";
    }

    const length = countParticipantNameCharacters(normalizedName);
    if (length > limit) {
        return { valid: false, name: normalizedName, message, length, limit };
    }

    return { valid: true, name: normalizedName, length, limit };
}

/* ==========================================================
   大会参加
========================================================== */

async function handleJoinTournament(
    event
) {

    event.preventDefault();


    const code =
        tournamentCodeInput
            .value
            .trim()
            .toUpperCase();


    const nameCheck =
        validateParticipantName(
            displayNameInput.value
        );


    const name =
        nameCheck.name;


    if (!code) {

        showMessage(
            "大会コードを入力してください。",
            "error"
        );


        return;

    }


    if (!nameCheck.valid) {

        showMessage(
            nameCheck.message,
            "error"
        );


        return;

    }


    try {

        setButtonLoading(
            joinTournamentButton,
            true,
            "参加中..."
        );


        // 大会種類を参照できる場合は送信前に案内する（DB側でも必ず検証する）。
        const { data: joinTarget, error: joinLookupError } = await supabaseClient
            .from("tournaments")
            .select("tournament_mode")
            .eq("tournament_code", code)
            .maybeSingle();
        if (!joinLookupError && joinTarget?.tournament_mode === "youtube") {
            throw new Error("この大会はYouTube連携トーナメントです。通常の大会参加フォームからは参加できません。YouTube LIVEのチャットから参加してください。");
        }

        const {
            error
        } =
            await supabaseClient.rpc(
                "join_tournament",
                {
                    p_tournament_code:
                        code,

                    p_display_name:
                        name
                }
            );


        if (error) {
            if (String(error.message || "").includes("YOUTUBE_CHAT_JOIN_ONLY")) {
                throw new Error("この大会はYouTube連携トーナメントです。通常の大会参加フォームからは参加できません。YouTube LIVEのチャットから参加してください。");
            }
            throw error;
        }


        tournamentCodeInput.value =
            "";


        displayNameInput.value =
            "";


        setTournamentURL(
            code
        );


        await openTournament(
            code
        );


        showMessage(
            "大会に参加しました。",
            "success"
        );

    } catch (error) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setButtonLoading(
            joinTournamentButton,
            false
        );

    }

}


/* ==========================================================
   大会を開く
========================================================== */

async function openTournamentByAccessToken(accessToken, options = {}) {
    const { updateHistory = true } = options;
    if (isLoadingTournament) return;
    isLoadingTournament = true;

    try {
        const { data, error } = await supabaseClient.rpc(
            "get_tournament_by_access_token",
            { p_access_token: accessToken }
        );

        if (error) throw error;

        const tournament = Array.isArray(data) ? data[0] : data;

        /* URLを知っていても主催者・参加者でなければTOPへ戻す。 */
        if (!tournament) {
            currentTournament = null;
            clearTournamentURL();
            showHome();
            await loadMyTournaments();
            showMessage("この大会を表示する権限がありません。", "error");
            return;
        }

        currentTournament = tournament;
        if (updateHistory) {
            setTournamentURL(tournament.access_token);
        }
        await loadTournamentData();
        archivedTournamentList.classList.add("hidden");
        showArchivedTournamentsButton.textContent = "終了した大会を表示";
        showTournament();
        await subscribeRealtime();
    } finally {
        isLoadingTournament = false;
    }
}


async function openTournament(
    code
) {

    if (
        isLoadingTournament
    ) {

        return;

    }


    isLoadingTournament =
        true;


    try {

        const normalizedCode =
            String(
                code
            )
                .trim()
                .toUpperCase();


        const {
            data: tournament,
            error: tournamentError
        } =
            await supabaseClient
                .from(
                    "tournaments"
                )
                .select(
                    "*"
                )
                .eq(
                    "tournament_code",
                    normalizedCode
                )
                .maybeSingle();


        if (
            tournamentError
        ) {

            throw tournamentError;

        }


        if (!tournament) {

            clearTournamentURL();


            showHome();


            showMessage(
                "大会が見つかりませんでした。",
                "error"
            );


            return;

        }


        currentTournament =
            tournament;


        /* URLには大会コードではなく、専用のランダムトークンだけを残す。 */
        if (tournament.access_token) {
            setTournamentURL(tournament.access_token);
        }


        await loadTournamentData();


        /*
           大会ページへ移動するときに
           終了済み大会一覧の表示状態をリセット
        */

        archivedTournamentList
            .classList
            .add(
                "hidden"
            );


        showArchivedTournamentsButton
            .textContent =
                "終了した大会を表示";


        showTournament();


        await subscribeRealtime();

    } finally {

        isLoadingTournament =
            false;

    }

}


/* ==========================================================
   大会データ取得
========================================================== */

async function loadTournamentData() {

    if (
        !currentTournament
    ) {

        return;

    }


    const tournamentId =
        currentTournament.id;


    const [
        tournamentResult,
        participantsResult,
        matchesResult,
        bracketSlotsResult
    ] =
        await Promise.all([

            supabaseClient
                .from(
                    "tournaments"
                )
                .select(
                    "*"
                )
                .eq(
                    "id",
                    tournamentId
                )
                .single(),


            /* ==================================================
               bracket_order 順で参加者を取得

               null の古いデータがあった場合でも、
               JS側で created_at / id を使って安定させます。
            ================================================== */

            supabaseClient
                .from(
                    "participants"
                )
                .select(
                    "*"
                )
                .eq(
                    "tournament_id",
                    tournamentId
                )
                .order(
                    "bracket_order",
                    {
                        ascending: true,
                        nullsFirst: false
                    }
                )
                .order(
                    "created_at",
                    {
                        ascending: true
                    }
                ),


            supabaseClient
                .from(
                    "matches"
                )
                .select(
                    "*"
                )
                .eq(
                    "tournament_id",
                    tournamentId
                )
                .order(
                    "round_number",
                    {
                        ascending: true
                    }
                )
                .order(
                    "match_number",
                    {
                        ascending: true
                    }
                ),


                supabaseClient
                    .from(
                        "bracket_slots"
                    )
                    .select(
                        "*"
                    )
                    .eq(
                        "tournament_id",
                        tournamentId
                    )
                    .order(
                        "card_order",
                        {
                            ascending: true
                        }
                    )
        ]);


    if (
        tournamentResult.error
    ) {

        throw tournamentResult.error;

    }


    if (
        participantsResult.error
    ) {

        throw participantsResult.error;

    }


    if (
        matchesResult.error
    ) {

        throw matchesResult.error;

    }

    if (
        bracketSlotsResult.error
    ) {

        throw bracketSlotsResult.error;

    }

    currentTournament =
        tournamentResult.data;


    currentParticipants =
        participantsResult.data || [];


    /* ----------------------------------------------------------
       念のためクライアント側でも順番を安定化
    ---------------------------------------------------------- */

    currentParticipants.sort(
        compareParticipantsByBracketOrder
    );


    currentMatches =
        matchesResult.data || [];


    currentBracketSlots =
        bracketSlotsResult.data || [];


    currentParticipant =
        currentParticipants.find(
            participant =>

                participant.user_id ===
                currentUser.id

        ) || null;


    isHost =
        currentTournament
            .host_user_id ===
        currentUser.id;


    renderTournament();

}


/* ==========================================================
   参加者並び順比較
========================================================== */

function compareParticipantsByBracketOrder(
    a,
    b
) {

    const aOrder =
        Number.isFinite(
            Number(
                a.bracket_order
            )
        )
            ? Number(
                a.bracket_order
            )
            : Number.MAX_SAFE_INTEGER;


    const bOrder =
        Number.isFinite(
            Number(
                b.bracket_order
            )
        )
            ? Number(
                b.bracket_order
            )
            : Number.MAX_SAFE_INTEGER;


    if (
        aOrder !==
        bOrder
    ) {

        return (
            aOrder -
            bOrder
        );

    }


    const aCreated =
        String(
            a.created_at || ""
        );


    const bCreated =
        String(
            b.created_at || ""
        );


    const createdComparison =
        aCreated.localeCompare(
            bCreated
        );


    if (
        createdComparison !== 0
    ) {

        return createdComparison;

    }


    return String(
        a.id
    ).localeCompare(
        String(
            b.id
        )
    );

}



/* YouTube連携大会専用：ブラウザ内のチャット監視 */
let youtubeMonitorActive = false;
let youtubeMonitorBusy = false;
let youtubeMonitorTimer = null;
let youtubeMonitorTournamentId = null;
let youtubeMonitorGeneration = 0;
let youtubeMonitorRegisteredTotal = 0;
let youtubeMonitorStatusText = "監視停止中";

async function stopYoutubeChatMonitor(message = "監視停止中") {
    const stoppedTournamentId = youtubeMonitorTournamentId || (currentTournament?.tournament_mode === "youtube" ? currentTournament.id : null);
    youtubeMonitorGeneration++;
    youtubeMonitorActive = false;
    youtubeMonitorTournamentId = null;
    if (youtubeMonitorTimer !== null) {
        clearTimeout(youtubeMonitorTimer);
        youtubeMonitorTimer = null;
    }
    youtubeMonitorStatusText = message;
    renderYoutubeChatMonitorPanel();
    if (stoppedTournamentId) {
        try {
            const { error } = await supabaseClient.rpc("youtube_chat_set_monitor_enabled", {p_tournament_id: stoppedTournamentId, p_enabled: false});
            if (error) throw error;
        } catch (error) {
            console.error("監視停止の保存に失敗:", error);
            youtubeMonitorStatusText = "監視停止の保存に失敗しました。再試行してください。";
            renderYoutubeChatMonitorPanel();
        }
    }
}

function renderYoutubeChatMonitorPanel() {
    const panel = document.getElementById("youtubeChatMonitorPanel");
    const start = document.getElementById("youtubeChatMonitorStartButton");
    const stop = document.getElementById("youtubeChatMonitorStopButton");
    const status = document.getElementById("youtubeChatMonitorStatus");
    if (!panel || !start || !stop || !status) return;

    // 大会開始後は参加受付ではなく勝利報告の監視であることを明示する。
    const isVictoryPhase = currentTournament?.status === "active";
    const monitorTitle = panel.querySelector(".panel-header h2");
    const monitorSubtitle = panel.querySelector(".panel-header .panel-subtitle");
    if (monitorTitle) monitorTitle.textContent = isVictoryPhase
        ? "YouTube 勝利チャット監視"
        : "YouTube チャット参加受付";
    if (monitorSubtitle) monitorSubtitle.textContent = isVictoryPhase
        ? "LIVE CHAT VICTORY MONITOR"
        : "LIVE CHAT REGISTRATION MONITOR";

    const allowed = Boolean(currentTournament && isHost &&
        currentTournament.tournament_mode === "youtube" &&
        ["waiting", "active"].includes(currentTournament.status) &&
        !currentTournament.archived_at);
    const hasChat = Boolean(currentTournament?.youtube_live_chat_id);
    panel.classList.toggle("hidden", !allowed);
    if (youtubeMonitorActive && (!allowed ||
        currentTournament?.id !== youtubeMonitorTournamentId || !hasChat)) {
        stopYoutubeChatMonitor("大会の状態が変わったため監視を停止しました。");
        return;
    }
    start.disabled = !allowed || !hasChat || youtubeMonitorActive || youtubeMonitorBusy;
    stop.disabled = !allowed || (!youtubeMonitorActive && !youtubeMonitorStatusText.startsWith("監視エラー") && !youtubeMonitorStatusText.startsWith("監視停止の保存に失敗"));
    status.textContent = youtubeMonitorStatusText +
        (currentTournament?.status === "waiting" && youtubeMonitorRegisteredTotal ? `（今回の新規登録：${youtubeMonitorRegisteredTotal}人）` : "");
}

async function pollYoutubeChatMonitor(generation, tournamentId) {
    if (!youtubeMonitorActive || generation !== youtubeMonitorGeneration ||
        currentTournament?.id !== tournamentId) return;
    if (youtubeMonitorBusy) return;

    youtubeMonitorBusy = true;
    youtubeMonitorStatusText = "チャットを確認中...";
    renderYoutubeChatMonitorPanel();
    let nextDelay = 5000;
    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "youtube-monitor-chat", { body: { tournamentId } }
        );
        if (generation !== youtubeMonitorGeneration || !youtubeMonitorActive) return;
        if (error) {
            let detail = "";
            try { detail = (await error.context?.json())?.error || ""; } catch (_) {}
            throw new Error(detail || error.message || "監視APIの呼び出しに失敗しました。");
        }
        if (data?.liveEnded === true) {
            await stopYoutubeChatMonitor("YouTube LIVEの配信が終了したため、チャット監視を停止しました。");
            return;
        }
        if (data?.error) throw new Error(data.error);
        if (!data || typeof data.registered !== "number") {
            throw new Error("監視APIの応答が正しくありません。");
        }
        youtubeMonitorRegisteredTotal += data.registered;
        const victories = Number(data.victories) || 0;
        nextDelay = Math.max(5000, Math.min(120000,
            Number(data.pollingIntervalMillis) || 5000));
        youtubeMonitorStatusText = data.initialized
            ? "監視準備完了。ここからの新しいコメントを受け付けます。"
            : data.waiting
                ? "次のチャット取得を待機中"
                : currentTournament?.status === "active"
                    ? `勝利報告を監視中（直近の勝利登録：${victories}件）`
                    : `参加希望を監視中（直近の新規登録：${data.registered}人）`;
        if ((data.registered > 0 || victories > 0) && currentTournament?.id === tournamentId) {
            await loadTournamentData();
        }
    } catch (error) {
        if (generation === youtubeMonitorGeneration && youtubeMonitorActive) {
            console.error("YouTube chat monitor:", error);
            await stopYoutubeChatMonitor(`監視エラー：${error.message || "不明なエラー"}`);
        }
        return;
    } finally {
        youtubeMonitorBusy = false;
        renderYoutubeChatMonitorPanel();
    }
    if (youtubeMonitorActive && generation === youtubeMonitorGeneration &&
        currentTournament?.id === tournamentId) {
        youtubeMonitorTimer = setTimeout(
            () => pollYoutubeChatMonitor(generation, tournamentId), nextDelay
        );
    }
}

async function startYoutubeChatMonitor() {
    if (youtubeMonitorActive || youtubeMonitorBusy || !currentTournament || !isHost ||
        currentTournament.tournament_mode !== "youtube" ||
        !["waiting", "active"].includes(currentTournament.status) || currentTournament.archived_at ||
        !currentTournament.youtube_live_chat_id) return;
    youtubeMonitorGeneration++;
    youtubeMonitorActive = true;
    youtubeMonitorTournamentId = currentTournament.id;
    youtubeMonitorRegisteredTotal = 0;
    youtubeMonitorStatusText = "監視を開始しています...";
    renderYoutubeChatMonitorPanel();
    const generation = youtubeMonitorGeneration;
    const tournamentId = youtubeMonitorTournamentId;
    try {
        const { error } = await supabaseClient.rpc("youtube_chat_set_monitor_enabled", {p_tournament_id: tournamentId, p_enabled: true});
        if (error) throw error;
        if (generation === youtubeMonitorGeneration && youtubeMonitorActive) {
            void pollYoutubeChatMonitor(generation, tournamentId);
        }
    } catch (error) {
        console.error(error);
        await stopYoutubeChatMonitor("監視開始エラー：" + (error.message || "不明なエラー"));
    }
}

/* YouTube大会専用：主催者によるLIVE検出と大会への保存 */
function renderYoutubeLiveSavePanel() {
    const panel = document.getElementById("youtubeLiveSavePanel");
    const button = document.getElementById("youtubeLiveSaveButton");
    const result = document.getElementById("youtubeLiveSaveResult");
    if (!panel || !button || !result) return;

    const allowed = Boolean(
        currentTournament && isHost &&
        currentTournament.tournament_mode === "youtube" &&
        !currentTournament.archived_at &&
        currentTournament.status !== "finished"
    );
    panel.classList.toggle("hidden", !allowed);
    if (!allowed) return;

    const saved = Boolean(currentTournament.youtube_live_chat_id);
    if (saved && !button.disabled) {
        result.textContent = "LIVE情報は大会に保存済みです。必要に応じて再接続できます。";
    } else if (!saved && !button.disabled) {
        result.textContent = "LIVE配信中に接続すると、チャットIDを大会に保存します。";
    }
}

async function handleYoutubeLiveSave() {
    const button = document.getElementById("youtubeLiveSaveButton");
    const result = document.getElementById("youtubeLiveSaveResult");
    if (!button || !result) return;
    if (!currentTournament || !isHost ||
        currentTournament.tournament_mode !== "youtube" ||
        currentTournament.archived_at ||
        currentTournament.status === "finished") return;

    const tournamentId = currentTournament.id;
    button.disabled = true;
    button.textContent = "LIVE接続中...";
    result.textContent = "YouTube LIVEを確認しています...";
    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "youtube-detect-live", { body: { tournamentId } }
        );
        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            } catch (_) {}
            throw new Error(detail || error.message || "LIVE接続に失敗しました。");
        }
        if (data?.error) throw new Error(data.error);
        if (!data?.live) {
            result.textContent = data?.message || "現在LIVE配信はありません。";
            return;
        }
        if (data.saved !== true) {
            throw new Error("LIVEは検出しましたが、大会への保存を確認できませんでした。");
        }
        // 同じ大会を開いている場合だけ、最新の保存内容を読み直す。
        if (currentTournament?.id === tournamentId) {
            const { data: updated, error: refreshError } = await supabaseClient
                .from("tournaments")
                .select("youtube_host_channel_id,youtube_video_id,youtube_live_chat_id")
                .eq("id", tournamentId)
                .single();
            if (refreshError) throw refreshError;
            if (updated?.youtube_live_chat_id !== data.liveChatId) {
                throw new Error("保存したLIVEチャットIDを確認できませんでした。");
            }
            Object.assign(currentTournament, updated);
            renderYoutubeChatMonitorPanel();
        }
        result.textContent = `LIVE接続・保存成功：${data.title || "配信中"} / Video ID：${data.videoId} / Live Chat ID：${data.liveChatId}`;
    } catch (error) {
        console.error("YouTube LIVE save:", error);
        result.textContent = `LIVE接続・保存失敗：${error.message || "不明なエラー"}`;
    } finally {
        button.disabled = false;
        button.textContent = "LIVE接続・大会へ保存";
    }
}

/* ==========================================================
   全体描画
========================================================== */

function renderTournament() {

    if (
        !currentTournament
    ) {

        return;

    }

    renderTournamentHeader();
    renderYoutubeLiveSavePanel();
    renderYoutubeChatMonitorPanel();

    if (matchupParticipantCount) {
        matchupParticipantCount.textContent =
            `${currentParticipants.length} PLAYERS`;
    }


    if (hostParticipantCount) {
        hostParticipantCount.textContent =
            `${currentParticipants.length} PLAYERS`;
    }

    renderMatchupBuilder();

    renderBracketSetupPrototype();

    renderBracket();

    renderMyMatch();

    renderHostControls();

}

/* ==========================================================
   対戦カード作成
========================================================== */

function renderMatchupBuilder() {

    if (
        !matchupBuilder ||
        !currentTournament
    ) {

        return;

    }


    const shouldShow =
        isHost &&
        !currentTournament.archived_at &&
        currentTournament.status ===
            "waiting";


    if (
        !shouldShow
    ) {

        matchupBuilder
            .classList
            .add(
                "hidden"
            );


        return;

    }


    matchupBuilder
        .classList
        .remove(
            "hidden"
        );


    /* ----------------------------------------------------------
       対戦カードに配置済みの参加者
    ---------------------------------------------------------- */

    const assignedParticipantIds =
        new Set();


    currentBracketSlots
        .forEach(
            slot => {

                if (
                    slot.player1_id
                ) {

                    assignedParticipantIds
                        .add(
                            slot.player1_id
                        );

                }


                if (
                    slot.player2_id
                ) {

                    assignedParticipantIds
                        .add(
                            slot.player2_id
                        );

                }

            }
        );

    /* ----------------------------------------------------------
       参加者表示
    ---------------------------------------------------------- */

    if (
        !matchupParticipantList
    ) {

        return;

    }


    const availableParticipants =
        currentParticipants.filter(
            participant =>

                participant.status !==
                    "banned"
        );


    if (
        availableParticipants.length === 0
    ) {

        matchupParticipantList.innerHTML =
            `
                <div class="empty-state">
                    配置できる参加者がいません。
                </div>
            `;

    }else{

        matchupParticipantList.innerHTML =
            availableParticipants
                .map(
                    participant => {

                        const status =
                            getParticipantStatus(
                                participant.status
                            );


                        return `
                            <div
                                class="matchup-participant ${
                                    assignedParticipantIds.has(
                                        participant.id
                                    )
                                        ? "matchup-participant-assigned"
                                        : ""
                                }"
                                data-participant-id="${escapeHTML(
                                    participant.id
                                )}"
                            >

                                <span class="matchup-participant-grip">
                                    ☰
                                </span>


                                <span class="matchup-participant-name">
                                    ${escapeHTML(
                                        participant.display_name
                                    )}
                                </span>


                                ${
                                    participant.status ===
                                        "suspended"

                                        ? `
                                            <span class="participant-status ${status.className}">
                                                ${status.text}
                                            </span>
                                        `

                                        : ""
                                }

                            </div>
                        `;

                    }
                )
                .join("");
    }

    /* ----------------------------------------------------------
       対戦カード表示
    ---------------------------------------------------------- */

    if (
        !matchupCardList
    ) {

        return;

    }


    if (
        currentBracketSlots.length === 0
    ) {

        matchupCardList.innerHTML =
            `
                <div class="empty-state">
                    対戦カードがありません。<br>
                    「＋ 対戦カードを追加」から作成してください。
                </div>
            `;


        return;

    }


    matchupCardList.innerHTML =
        currentBracketSlots
            .map(
                slot => {

                    const player1 =
                        getParticipant(
                            slot.player1_id
                        );


                    const player2 =
                        getParticipant(
                            slot.player2_id
                        );


                    const player1Name =
                        player1
                            ? escapeHTML(
                                player1.display_name
                            )
                            : "参加者をここにドラッグ＆ドロップ";


                    const player2Name =
                        player2
                            ? escapeHTML(
                                player2.display_name
                            )
                            : "参加者をここにドラッグ＆ドロップ";


                    const matchupState =
                        player1 && player2
                            ? "ready"
                            : player1 || player2
                                ? "bye"
                                : "empty";


                    return `
                        <div
                            class="matchup-card matchup-card-${matchupState}"
                            data-bracket-slot-id="${escapeHTML(
                                slot.id
                            )}"
                        >

                            <div class="matchup-card-header">

                                <div class="matchup-card-title">

                                    <button
                                        type="button"
                                        class="matchup-drag-handle"
                                        data-drag-bracket-slot="${escapeHTML(
                                            slot.id
                                        )}"
                                        aria-label="MATCH ${slot.card_order}を並び替え"
                                        title="ドラッグして並び替え"
                                    >
                                        ☰
                                    </button>

                                    <div class="matchup-card-number">
                                        MATCH ${slot.card_order}
                                    </div>

                                </div>

                                <button
                                    type="button"
                                    class="matchup-delete-button"
                                    data-delete-bracket-slot="${escapeHTML(
                                        slot.id
                                    )}"
                                    aria-label="MATCH ${slot.card_order}を削除"
                                    title="対戦カードを削除"
                                >
                                    ×
                                </button>

                            </div>


                            <div class="matchup-card-players">

                                <div
                                    class="matchup-slot ${
                                        player1
                                            ? "matchup-slot-assigned"
                                            : ""
                                    }"
                                    data-bracket-slot-id="${escapeHTML(
                                        slot.id
                                    )}"
                                    data-bracket-side="1"
                                    ${
                                        player1
                                            ? `data-participant-id="${escapeHTML(
                                                player1.id
                                            )}"`
                                            : ""
                                    }
                                >
                                    <span class="matchup-slot-name">
                                        ${player1Name}
                                    </span>
                                </div>

                                <div class="matchup-vs">
                                    VS
                                </div>

                                <div
                                    class="matchup-slot ${
                                        player2
                                            ? "matchup-slot-assigned"
                                            : ""
                                    }"
                                    data-bracket-slot-id="${escapeHTML(
                                        slot.id
                                    )}"
                                    data-bracket-side="2"
                                    ${
                                        player2
                                            ? `data-participant-id="${escapeHTML(
                                                player2.id
                                            )}"`
                                            : ""
                                    }
                                >
                                    <span class="matchup-slot-name">
                                        ${player2Name}
                                    </span>
                                </div>

                            </div>

                        </div>
                    `;

                }
            )
        .join("");


    matchupCardList
        .querySelectorAll(
            "[data-delete-bracket-slot]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    handleDeleteMatchup
                );

            }
        );

    /* ----------------------------------------------------------
       参加者カード ドラッグ開始
    ---------------------------------------------------------- */

    matchupParticipantList
        .querySelectorAll(
            "[data-participant-id]"
        )
        .forEach(
            participantElement => {

                participantElement
                    .addEventListener(
                        "pointerdown",
                        beginMatchupParticipantDrag
                    );

            }
        );

    /* ----------------------------------------------------------
       MATCH内に配置済みの参加者もドラッグ可能にする
    ---------------------------------------------------------- */

    matchupCardList
        .querySelectorAll(
            ".matchup-slot-assigned[data-participant-id]"
        )
        .forEach(
            slotElement => {

                slotElement
                    .addEventListener(
                        "pointerdown",
                        beginMatchupParticipantDrag
                    );

            }
        );
    /* ----------------------------------------------------------
       MATCHカード並び替え
    ---------------------------------------------------------- */

    matchupCardList
        .querySelectorAll(
            ".matchup-drag-handle[data-drag-bracket-slot]"
        )
        .forEach(
            handle => {

                handle
                    .addEventListener(
                        "pointerdown",
                        beginMatchupCardDrag
                    );

            }
        );
}


function beginMatchupCardDrag(
    event
) {

    if (
        !isHost ||
        !currentTournament ||
        currentTournament.status !==
            "waiting"
    ) {

        return;

    }


    if (
        event.pointerType === "mouse" &&
        event.button !== 0
    ) {

        return;

    }


    const handle =
        event.currentTarget;


    const slotId =
        handle.dataset
            .dragBracketSlot;


    if (
        !slotId
    ) {

        return;

    }


    const card =
        handle.closest(
            ".matchup-card"
        );


    if (
        !card
    ) {

        return;

    }


    event.preventDefault();


    matchupDraggedSlotId =
        slotId;


    /*
       ドラッグ中にマウスについてくる
       MATCHカードのコピー
    */

    matchupCardDragGhost =
        card.cloneNode(
            true
        );


    matchupCardDragGhost
        .classList
        .add(
            "matchup-card-drag-ghost"
        );


    document.body
        .appendChild(
            matchupCardDragGhost
        );


    moveMatchupCardDragGhost(
        event
    );


    /*
       ドロップ候補になるMATCHを表示
    */

    matchupCardList
        .querySelectorAll(
            ".matchup-card"
        )
        .forEach(
            targetCard => {

                if (
                    targetCard.dataset
                        .bracketSlotId !==
                    slotId
                ) {

                    targetCard
                        .classList
                        .add(
                            "matchup-card-drop-available"
                        );

                }

            }
        );


    document
        .addEventListener(
            "pointermove",
            handleMatchupCardDrag
        );


    document
        .addEventListener(
            "pointerup",
            finishMatchupCardDrag
        );


    document
        .addEventListener(
            "pointercancel",
            finishMatchupCardDrag
        );

}

function moveMatchupCardDragGhost(
    event
) {

    if (
        !matchupCardDragGhost
    ) {

        return;

    }


    matchupCardDragGhost
        .style.left =
        `${event.clientX + 14}px`;


    matchupCardDragGhost
        .style.top =
        `${event.clientY + 14}px`;

}

function handleMatchupCardDrag(
    event
) {

    if (
        !matchupDraggedSlotId
    ) {

        return;

    }


    moveMatchupCardDragGhost(
        event
    );


    /*
       前回の移動先表示を解除
    */

    if (
        matchupCardCurrentDropTarget
    ) {

        matchupCardCurrentDropTarget
            .classList
            .remove(
                "matchup-card-drop-target"
            );

    }


    matchupCardCurrentDropTarget =
        null;


    /*
       マウス・指の下にある要素を取得
    */

    const element =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );


    if (
        !element
    ) {

        return;

    }


    const targetCard =
        element.closest(
            ".matchup-card"
        );


    if (
        !targetCard ||
        !matchupCardList.contains(
            targetCard
        )
    ) {

        return;

    }


    /*
       自分自身は移動先にしない
    */

    if (
        targetCard.dataset
            .bracketSlotId ===
        matchupDraggedSlotId
    ) {

        return;

    }


    /*
       移動先MATCHを保存して青くする
    */

    matchupCardCurrentDropTarget =
        targetCard;


    targetCard
        .classList
        .add(
            "matchup-card-drop-target"
        );

}

async function finishMatchupCardDrag() {

    const draggedSlotId =
        matchupDraggedSlotId;


    const targetSlotId =
        matchupCardCurrentDropTarget
            ?.dataset
            ?.bracketSlotId ||
        null;


    /*
       現在のMATCH順を
       cleanup前に保存
    */

    const orderedSlotIds =
        [...currentBracketSlots]
            .sort(
                (a, b) =>
                    a.card_order -
                    b.card_order
            )
            .map(
                slot =>
                    slot.id
            );


    const draggedIndex =
        orderedSlotIds.indexOf(
            draggedSlotId
        );


    const targetIndex =
        orderedSlotIds.indexOf(
            targetSlotId
        );


    /*
       ドラッグ表示を終了
    */

    cleanupMatchupCardDrag();


    /*
       正しい移動元・移動先が
       取得できなければ終了
    */

    if (
        !draggedSlotId ||
        !targetSlotId ||
        draggedSlotId ===
            targetSlotId ||
        draggedIndex === -1 ||
        targetIndex === -1
    ) {

        return;

    }


    /*
       移動元を取り除く
    */

    const newOrder =
        [...orderedSlotIds];


    const [
        movedSlotId
    ] =
        newOrder.splice(
            draggedIndex,
            1
        );


    /*
       重要：
       元の配列上での移動先番号へ
       そのまま挿入する

       これにより、

       1 → 3 なら3番目
       3 → 1 なら1番目

       になる
    */

    newOrder.splice(
        targetIndex,
        0,
        movedSlotId
    );


    /*
       DBへ保存
    */

    const {
        error
    } =
        await supabaseClient.rpc(
            "reorder_bracket_slots",
            {
                p_tournament_id:
                    currentTournament.id,

                p_bracket_slot_ids:
                    newOrder
            }
        );


    if (
        error
    ) {

        console.error(
            "MATCH並び替えエラー:",
            error
        );


        showMessage(
            "対戦カードの並び替えに失敗しました。",
            "error"
        );


        return;

    }


    /*
       DBの最新状態を再取得
    */

    await loadTournamentData();


    showMessage(
        "対戦カードを並び替えました。",
        "success"
    );

}

function cleanupMatchupCardDrag() {

    document
        .removeEventListener(
            "pointermove",
            handleMatchupCardDrag
        );


    document
        .removeEventListener(
            "pointerup",
            finishMatchupCardDrag
        );


    document
        .removeEventListener(
            "pointercancel",
            finishMatchupCardDrag
        );


    if (
        matchupCardCurrentDropTarget
    ) {

        matchupCardCurrentDropTarget
            .classList
            .remove(
                "matchup-card-drop-target"
            );

    }


    matchupCardList
        ?.querySelectorAll(
            ".matchup-card"
        )
        .forEach(
            card => {

                card.classList.remove(
                    "matchup-card-drop-available",
                    "matchup-card-drop-target",
                    "matchup-card-drop-before",
                    "matchup-card-drop-after"
                );

            }
        );


    if (
        matchupCardDragGhost
    ) {

        matchupCardDragGhost
            .remove();

    }


    matchupDraggedSlotId =
        null;

    matchupCardDragGhost =
        null;

    matchupCardCurrentDropTarget =
        null;

}

/* ==========================================================
   対戦カード参加者 ドラッグ開始
========================================================== */

function beginMatchupParticipantDrag(
    event
) {

    if (
        !currentTournament ||
        !isHost ||
        currentTournament.status !==
            "waiting"
    ) {

        return;

    }


    if (
        event.pointerType === "mouse" &&
        event.button !== 0
    ) {

        return;

    }


    const source =
        event.currentTarget;


    const participantId =
        source.dataset
            .participantId;


    const participant =
        getParticipant(
            participantId
        );


    if (
        !participant ||
        participant.status ===
            "banned"
    ) {

        return;

    }


    event.preventDefault();


    matchupDraggedParticipantId =
        participantId;


    /* ------------------------------------------------------
       マウス・指についてくるカードを作成
    ------------------------------------------------------ */

    matchupDragGhost =
        source.cloneNode(
            true
        );


    matchupDragGhost
        .classList
        .add(
            "matchup-drag-ghost"
        );


    document.body.appendChild(
        matchupDragGhost
    );


    moveMatchupDragGhost(
        event.clientX,
        event.clientY
    );


    /* ------------------------------------------------------
       配置可能な枠を青くする
    ------------------------------------------------------ */

    document
        .querySelectorAll(
            ".matchup-slot"
        )
        .forEach(
            slot => {

                slot.classList.add(
                    "drop-available"
                );

            }
        );

        /*
           MATCH内の参加者をドラッグしている場合だけ
           参加者一覧を「配置解除」の候補にする
        */

        const sourceIsMatchSlot =
            source.classList.contains(
                "matchup-slot-assigned"
            );


        if (
            sourceIsMatchSlot
        ) {

            /*
               どのMATCH・どちら側から
               ドラッグしたか保存
            */

            matchupDraggedSourceSlotId =
                source.dataset
                    .bracketSlotId ||
                null;


            matchupDraggedSourceSide =
                Number(
                    source.dataset
                        .bracketSide
                );


            /*
               参加者一覧を
               「MATCHから戻せる場所」として表示
            */

            if (
                matchupParticipantList
            ) {

                matchupParticipantList
                    .classList
                    .add(
                        "matchup-return-available"
                    );

            }

        }

    document.body
        .classList
        .add(
            "matchup-drag-active"
        );


    /* ------------------------------------------------------
       pointermove / pointerup
    ------------------------------------------------------ */

    document.addEventListener(
        "pointermove",
        handleMatchupParticipantDrag
    );


    document.addEventListener(
        "pointerup",
        finishMatchupParticipantDrag
    );


    document.addEventListener(
        "pointercancel",
        finishMatchupParticipantDrag
    );

}


/* ==========================================================
   対戦カード参加者 ドラッグ中
========================================================== */

function handleMatchupParticipantDrag(
    event
) {

    if (
        !matchupDraggedParticipantId ||
        !matchupDragGhost
    ) {

        return;

    }


    event.preventDefault();


    moveMatchupDragGhost(
        event.clientX,
        event.clientY
    );


    /* ------------------------------------------------------
       現在強調されている枠を解除
    ------------------------------------------------------ */

    if (
        matchupCurrentDropTarget
    ) {

        matchupCurrentDropTarget
            .classList
            .remove(
                "drop-target"
            );


        matchupCurrentDropTarget =
            null;

    }


    /*------------------------------------------------------
       前回の戻し先表示を解除
    ------------------------------------------------------ */

    if (
        matchupParticipantList
    ) {

        matchupParticipantList
            .classList
            .remove(
                "matchup-return-target"
            );

    }


    matchupReturnTargetActive =
        false;

    /* ------------------------------------------------------
       ポインターの下にある要素を取得
    ------------------------------------------------------ */

    const element =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );


    if (
        !element
    ) {

        return;

    }


    /*
       参加者一覧の上にいるか確認
    */

    if (
        matchupParticipantList &&
        matchupParticipantList
            .classList
            .contains(
                "matchup-return-available"
            ) &&
        (
            element ===
                matchupParticipantList ||
            matchupParticipantList
                .contains(
                    element
                )
        )
    ) {

        matchupParticipantList
            .classList
            .add(
                "matchup-return-target"
            );


        matchupReturnTargetActive =
            true;


        return;

    }

    const dropTarget =
        element.closest(
            ".matchup-slot"
        );


    if (
        !dropTarget ||
        !matchupCardList.contains(
            dropTarget
        )
    ) {

        return;

    }


    matchupCurrentDropTarget =
        dropTarget;


    dropTarget
        .classList
        .add(
            "drop-target"
        );

}


/* ==========================================================
   ドラッグカード移動
========================================================== */

function moveMatchupDragGhost(
    x,
    y
) {

    if (
        !matchupDragGhost
    ) {

        return;

    }


    matchupDragGhost.style.left =
        `${x}px`;


    matchupDragGhost.style.top =
        `${y}px`;

}


/* ==========================================================
   対戦カード参加者 ドラッグ終了
========================================================== */

async function finishMatchupParticipantDrag(
    event
) {

    /*
       MATCH → 参加者一覧へ戻した場合
    */

    if (
        matchupReturnTargetActive &&
        matchupDraggedSourceSlotId &&
        (
            matchupDraggedSourceSide === 1 ||
            matchupDraggedSourceSide === 2
        )
    ) {

        const sourceSlotId =
            matchupDraggedSourceSlotId;


        const sourceSide =
            matchupDraggedSourceSide;


        const participantId =
            matchupDraggedParticipantId;


        /*
           先にドラッグ表示を終了
        */

        cleanupMatchupParticipantDrag();


        /*
           MATCHの割り当てだけ解除
        */

        const {
            error
        } =
            await supabaseClient.rpc(
                "clear_bracket_slot_player",
                {
                    p_bracket_slot_id:
                        sourceSlotId,

                    p_side:
                        sourceSide
                }
            );


        if (
            error
        ) {

            console.error(
                "MATCH配置解除エラー:",
                error
            );


            showMessage(
                "参加者の配置解除に失敗しました。",
                "error"
            );


            return;

        }


        /*
           最新状態を再取得
        */

        await loadTournamentData();


        const participant =
            getParticipant(
                participantId
            );


        showMessage(
            participant
                ? `${participant.display_name} さんを対戦カードから外しました。`
                : "参加者を対戦カードから外しました。",
            "success"
        );


        return;

    }

    if (
        !matchupDraggedParticipantId
    ) {

        return;

    }


    event.preventDefault();


    /*
       cleanupすると値が消えるため、
       先に必要な情報を保存します。
    */

    const participantId =
        matchupDraggedParticipantId;


    const dropTarget =
        matchupCurrentDropTarget;


    /*
       MATCHの枠以外で離した場合は
       保存せず終了
    */

    if (
        !dropTarget
    ) {

        cleanupMatchupParticipantDrag();

        return;

    }


    const bracketSlotId =
        dropTarget.dataset
            .bracketSlotId;


    const side =
        Number(
            dropTarget.dataset
                .bracketSide
        );


    /*
       不正なデータなら保存しない
    */

    if (
        !bracketSlotId ||
        (
            side !== 1 &&
            side !== 2
        )
    ) {

        cleanupMatchupParticipantDrag();

        return;

    }


    /*
       ドラッグ表示を先に終了
    */

    cleanupMatchupParticipantDrag();


    try {

        /*
           Supabaseへ配置を保存
        */

        const {
            error
        } =
            await supabaseClient.rpc(
                "assign_bracket_slot_player",
                {
                    p_bracket_slot_id:
                        bracketSlotId,

                    p_side:
                        side,

                    p_participant_id:
                        participantId
                }
            );


        if (
            error
        ) {

            throw error;

        }


        /*
           最新データを取得して再描画
        */

        await loadTournamentData();


        const participant =
            getParticipant(
                participantId
            );


        if (
            participant
        ) {

            showMessage(
                `${participant.display_name} さんを対戦カードに配置しました。`,
                "success"
            );

        } else {

            showMessage(
                "参加者を対戦カードに配置しました。",
                "success"
            );

        }

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    }

}

/* ==========================================================
   ドラッグ状態解除
========================================================== */

function cleanupMatchupParticipantDrag() {

    document.removeEventListener(
        "pointermove",
        handleMatchupParticipantDrag
    );


    document.removeEventListener(
        "pointerup",
        finishMatchupParticipantDrag
    );


    document.removeEventListener(
        "pointercancel",
        finishMatchupParticipantDrag
    );


    document
        .querySelectorAll(
            ".matchup-slot"
        )
        .forEach(
            slot => {

                slot.classList.remove(
                    "drop-available",
                    "drop-target"
                );

            }
        );


    if (
        matchupDragGhost
    ) {

        matchupDragGhost.remove();

    }


    document.body
        .classList
        .remove(
            "matchup-drag-active"
        );

    if (
        matchupParticipantList
    ) {

        matchupParticipantList
            .classList
            .remove(
                "matchup-return-available",
                "matchup-return-target"
            );

    }


    matchupReturnTargetActive =
        false;

    matchupDraggedSourceSlotId =
        null;

    matchupDraggedSourceSide =
        null;

    matchupDraggedParticipantId =
        null;

    matchupDragGhost =
        null;

    matchupCurrentDropTarget =
        null;

}

/* ==========================================================
   対戦カード削除
========================================================== */

async function handleDeleteMatchup(
    event
) {

    const button =
        event.currentTarget;


    const bracketSlotId =
        button.dataset
            .deleteBracketSlot;


    const slot =
        currentBracketSlots.find(
            item =>
                item.id ===
                bracketSlotId
        );


    if (
        !slot ||
        !currentTournament ||
        !isHost ||
        currentTournament.status !==
            "waiting"
    ) {

        return;

    }


    try {

        button.disabled =
            true;


        const {
            error
        } =
            await supabaseClient.rpc(
                "delete_bracket_slot",
                {
                    p_bracket_slot_id:
                        bracketSlotId
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            `MATCH ${slot.card_order} を削除しました。`,
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    }

}

/* ==========================================================
   対戦カード追加
========================================================== */

async function handleAddMatchup() {

    if (
        !currentTournament ||
        !isHost ||
        currentTournament.status !==
            "waiting"
    ) {

        return;

    }


    try {

        setButtonLoading(
            addMatchupButton,
            true,
            "追加中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "add_bracket_slot",
                {
                    p_tournament_id:
                        currentTournament.id
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            "対戦カードを追加しました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setButtonLoading(
            addMatchupButton,
            false
        );

    }

}

/* ==========================================================
   大会情報
========================================================== */

function getTournamentCodeMask() {
    const code = currentTournament?.tournament_code || "";
    return "●".repeat(code.length);
}

function updateTournamentCodeEyeIcon() {
    if (!toggleTournamentCodeButton) return;

    const icon = toggleTournamentCodeButton.querySelector("i");
    if (!icon) return;

    icon.className = isTournamentCodeVisible
        ? "fa-regular fa-eye"
        : "fa-regular fa-eye-slash";
}

function renderTournamentHeader() {

    // YouTube連携大会では主催者・参加者とも大会コード欄を表示しない。
    // 通常大会では従来どおり表示する。
    const tournamentCodeBlock = currentTournamentCode?.closest(".tournament-code-block");
    tournamentCodeBlock?.classList.toggle(
        "hidden",
        currentTournament?.tournament_mode === "youtube"
    );

    currentTournamentName
        .textContent =
        currentTournament.name;


    isTournamentCodeVisible = false;
    currentTournamentCode.textContent = getTournamentCodeMask();
    toggleTournamentCodeButton.classList.add("is-hidden");
    updateTournamentCodeEyeIcon();
    toggleTournamentCodeButton.setAttribute("aria-label", "大会コードを表示");
    toggleTournamentCodeButton.title = "大会コードを表示";


    const status =
        currentTournament.status;


    tournamentStatus.className =
        "status-badge";


    if (
        status ===
        "waiting"
    ) {

        tournamentStatus
            .classList
            .add(
                "waiting"
            );


        tournamentStatus
            .textContent =
            "参加受付中";

    } else if (
        status ===
        "active"
    ) {

        tournamentStatus.classList.add("active");
        tournamentStatus.textContent = currentTournament.paused_at ? "大会一時中断中" : "大会進行中";

    } else {

        tournamentStatus
            .classList
            .add(
                "finished"
            );


        tournamentStatus
            .textContent =
            "大会終了";

    }

}


/* ==========================================================
   参加者一覧
========================================================== */

function renderParticipants() {

    participantCount
        .textContent =
        `${currentParticipants.length} PLAYERS`;


    if (
        currentParticipants.length === 0
    ) {

        participantList.innerHTML =
            `
            <div class="empty-state">
                参加者はいません。
            </div>
            `;


        return;

    }


    participantList.innerHTML =
        currentParticipants
            .map(
                participant => {

                    const mine =
                        currentParticipant &&
                        currentParticipant.id ===
                            participant.id;


                    const status =
                        getParticipantStatus(
                            participant.status
                        );


                    return `
                        <div class="participant-item">

                            <div class="participant-name">

                                ${escapeHTML(
                                    participant.display_name
                                )}

                                ${mine
                                    ? "（あなた）"
                                    : ""
                                }

                            </div>


                            <div
                                class="participant-status ${status.className}"
                            >
                                ${status.text}
                            </div>

                        </div>
                    `;

                }
            )
            .join("");


    if (fullscreenBracketButton) {
        fullscreenBracketButton.classList.toggle("hidden", Boolean(currentTournament.archived_at) || (status === "waiting" && !bracketSetupConfirmed));
    }

}




function isBracketFullscreenMode() {
    return new URLSearchParams(window.location.search).get("bracket") === "fullscreen";
}

function openFullscreenBracket() {
    if (!currentTournament) return;
    const url = new URL(window.location.href);
    url.searchParams.set("t", currentTournament.access_token);
    url.searchParams.set("bracket", "fullscreen");
    window.open(url.toString(), "tournament-bracket-fullscreen");
}

/* ==========================================================
   トーナメント表
========================================================== */

function renderBracket() {

    /*
       ----------------------------------------------------------
       大会開始前
       ----------------------------------------------------------

       matches はまだ作成されていないため、
       bracket_slots からプレビュー用のトーナメント表を作ります。
    */
    if (
        currentMatches.length === 0
    ) {

        /*
           対戦カードがまだない場合
        */
        if (
            currentBracketSlots.length === 0
        ) {

            bracket.innerHTML =
                `
                <div class="empty-state">

                    <div class="empty-icon">
                        VS
                    </div>

                    <div>
                        対戦カードを追加するとトーナメント表が表示されます。
                    </div>

                </div>
                `;


            return;

        }


        /*
           MATCHを card_order 順に並べる
        */
        const orderedSlots =
            [...currentBracketSlots]
                .sort(
                    (
                        a,
                        b
                    ) =>
                        a.card_order -
                        b.card_order
                );


        /*
           開始前プレビュー用ラウンド
        */
        const previewRounds =
            {};


        /*
           ROUND 1

           ここは必ず
           「作成した対戦カード数」と
           同じ数にします。
        */
        previewRounds[1] =
            orderedSlots.map(
                (
                    slot,
                    index
                ) => {

                    return {
                        id:
                            `preview-${slot.id}`,

                        round_number:
                            1,

                        match_number:
                            index + 1,

                        player1_id:
                            slot.player1_id,

                        player2_id:
                            slot.player2_id,

                        winner_id:
                            null,

                        status:
                            "waiting",

                        preview:
                            true,

                        bracket_slot_id:
                            slot.id
                    };

                }
            );


        /*
           ROUND 2 以降

           19 → 10 → 5 → 3 → 2 → 1

           のように半分ずつ作ります。
        */
        let previousMatchCount =
            orderedSlots.length;

        let roundNumber =
            2;


        while (
            previousMatchCount > 1
        ) {

            const matchCount =
                Math.ceil(
                    previousMatchCount / 2
                );


            previewRounds[
                roundNumber
            ] =
                [];


            for (
                let index = 0;
                index < matchCount;
                index++
            ) {

                previewRounds[
                    roundNumber
                ].push(
                    {
                        id:
                            `preview-round-${roundNumber}-${index}`,

                        round_number:
                            roundNumber,

                        match_number:
                            index + 1,

                        player1_id:
                            null,

                        player2_id:
                            null,

                        winner_id:
                            null,

                        status:
                            "waiting",

                        preview:
                            true
                    }
                );

            }


            previousMatchCount =
                matchCount;

            roundNumber++;

        }


        /*
           全ラウンド数
        */
        const maxRound =
            Math.max(
                ...Object
                    .keys(
                        previewRounds
                    )
                    .map(
                        Number
                    )
            );


        /*
           HTML生成
        */
        const previewHTML =
            Object
                .keys(
                    previewRounds
                )
                .map(
                    Number
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        a - b
                )
                .map(
                    currentRoundNumber => {

                        const roundMatches =
                            previewRounds[
                                currentRoundNumber
                            ];


                        const roundTitle =
                            getRoundTitle(
                                currentRoundNumber,
                                maxRound
                            );


                        return `
                            <div
                                class="bracket-round"
                                data-preview-round="${currentRoundNumber}"
                            >

                                <div class="bracket-round-title">
                                    ${roundTitle}
                                </div>

                                ${roundMatches
                                    .map(
                                        renderMatchCard
                                    )
                                    .join(
                                        ""
                                    )
                                }

                            </div>
                        `;

                    }
                )
                .join(
                    ""
                );


        bracket.innerHTML =
            `
            <div class="bracket-inner bracket-preview">
                ${previewHTML}
            </div>
            `;


        return;

    }


    const rounds =
        groupMatchesByRound();


    const maxRound =
        Math.max(
            ...Object
                .keys(
                    rounds
                )
                .map(
                    Number
                )
        );


    const html =
        Object
            .keys(
                rounds
            )
            .map(
                Number
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    a - b
            )
            .map(
                roundNumber => {

                    const roundMatches =
                        rounds[
                            roundNumber
                        ];


                    const roundTitle =
                        getRoundTitle(
                            roundNumber,
                            maxRound
                        );


                    return `
                        <div class="bracket-round">

                            <div class="bracket-round-title">
                                ${roundTitle}
                            </div>

                            ${roundMatches
                                .map(
                                    renderMatchCard
                                )
                                .join(
                                    ""
                                )
                            }

                        </div>
                    `;

                }
            )
            .join(
                ""
            );


    bracket.innerHTML =
        `
        <div class="bracket-inner">
            ${html}
        </div>
        `;


    /* ----------------------------------------------------------
       主催者専用「勝者にする」
    ---------------------------------------------------------- */

    if (
        isHost
    ) {

        bracket
            .querySelectorAll(
                "[data-host-winner]"
            )
            .forEach(
                button => {

                    button
                        .addEventListener(
                            "click",
                            handleHostWinner
                        );

                }
            );

    }


    bracket.querySelectorAll("[data-participant-undo]").forEach(button => {
        button.addEventListener("click", handleParticipantUndo);
    });

    /* ----------------------------------------------------------
       優勝者
    ---------------------------------------------------------- */

    if (
        currentTournament.status ===
        "finished"
    ) {

        const finalMatch =
            currentMatches.find(
                match =>

                    match.round_number ===
                    maxRound
            );


        if (
            finalMatch &&
            finalMatch.winner_id
        ) {

            const champion =
                getParticipant(
                    finalMatch.winner_id
                );


            if (
                champion
            ) {

                bracket
                    .insertAdjacentHTML(
                        "beforeend",
                        `
                        <div class="champion-card">

                            <div class="champion-label">
                                CHAMPION
                            </div>

                            <div class="champion-name">

                                ★ ${escapeHTML(
                                    champion.display_name
                                )}

                            </div>

                        </div>
                        `
                    );

            }

        }

    }

}


/* ==========================================================
   対戦カード
========================================================== */

function renderMatchCard(
    match
) {

    const player1 =
        getParticipant(
            match.player1_id
        );


    const player2 =
        getParticipant(
            match.player2_id
        );


    const canHostChoose =
        isHost &&

        !currentTournament.archived_at &&

        currentTournament.status ===
            "active" &&

        match.status ===
            "active" &&

        !match.winner_id &&

        player1 &&

        player2;


    return `
        <div class="match-card">

            ${renderMatchPlayer(
                player1,
                match,
                canHostChoose
            )}

            ${renderMatchPlayer(
                player2,
                match,
                canHostChoose
            )}

        </div>
    `;

}


/* ==========================================================
   対戦選手
========================================================== */

function renderMatchPlayer(
    participant,
    match,
    canHostChoose
) {

    if (
        !participant
    ) {

        return `
            <div class="match-player">

                <span>
                    ---
                </span>

            </div>
        `;

    }


    const winner =
        participant.id ===
        match.winner_id;


    const banned =
        participant.status ===
        "banned";


    const classes = [
        "match-player"
    ];


    if (
        winner
    ) {

        classes.push(
            "winner"
        );

    }


    if (
        banned
    ) {

        classes.push(
            "banned"
        );

    }


    let rightSide =
        "";


    if (
        winner
    ) {

        const canUndoThisWin =
            isParticipantsLatestFinishedMatch(participant.id, match) &&
            currentUser &&
            !currentTournament.archived_at &&
            (currentTournament.status === "active" || currentTournament.status === "finished") &&
            participant.status !== "banned" &&
            (isHost || (participant.status === "active" && participant.user_id === currentUser.id));

        rightSide = `
            <span class="match-win-label">WIN</span>
            ${canUndoThisWin ? `
                <button type="button" class="participant-undo-button"
                    data-participant-undo="true" data-match-id="${match.id}">
                    ↶ 戻す
                </button>
            ` : ""}
        `;

    } else if (
        canHostChoose &&
        !banned
    ) {

        rightSide =
            `
            <button
                type="button"
                class="host-winner-button"
                data-host-winner="true"
                data-match-id="${match.id}"
                data-winner-id="${participant.id}"
            >
                勝者にする
            </button>
            `;

    }


    return `
        <div class="${classes.join(" ")}">

            <span class="match-player-name">

                ${escapeHTML(
                    participant.display_name
                )}

            </span>

            ${rightSide}

        </div>
    `;

}


/* ==========================================================
   主催者：勝者指定
========================================================== */

async function handleHostWinner(
    event
) {

    const button =
        event.currentTarget;


    const matchId =
        button.dataset.matchId;


    const winnerId =
        button.dataset.winnerId;


    const winner =
        getParticipant(
            winnerId
        );


    const match =
        currentMatches.find(
            item =>
                item.id ===
                matchId
        );


    if (
        !winner ||
        !match
    ) {

        showMessage(
            "試合データを取得できませんでした。",
            "error"
        );


        return;

    }


    const confirmed =
        await showConfirmDialog(
            "勝者を登録",
            `${winner.display_name} さんをこの試合の勝者として登録しますか？`,
            "勝者にする",
            "success"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        disableHostWinnerButtons(
            matchId,
            true
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "host_set_match_winner",
                {
                    p_match_id:
                        matchId,

                    p_winner_id:
                        winnerId
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            `${winner.display_name} さんを勝者として登録しました。`,
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    }

}


/* ==========================================================
   主催者勝者ボタン無効化
========================================================== */

function disableHostWinnerButtons(
    matchId,
    disabled
) {

    bracket
        .querySelectorAll(
            `[data-host-winner][data-match-id="${matchId}"]`
        )
        .forEach(
            button => {

                button.disabled =
                    disabled;

            }
        );

}

/* ==========================================================
   自分の試合
========================================================== */

function renderMyMatch() {

    myMatchArea
        .classList
        .add(
            "hidden"
        );


    victoryButton.dataset.matchId =
        "";

    // 勝利操作は現在の自動生成トーナメント表へ統合しています。
    return;


    if (
        !currentParticipant
    ) {

        return;

    }


    /*
       終了済み大会では
       勝利登録を表示しない
    */

    if (
        currentTournament.archived_at
    ) {

        return;

    }


    if (
        currentTournament.status !==
        "active"
    ) {

        return;

    }


    const myMatch =
        currentMatches.find(
            match =>

                match.status ===
                    "active"
                &&

                !match.winner_id
                &&

                (
                    match.player1_id ===
                        currentParticipant.id
                    ||
                    match.player2_id ===
                        currentParticipant.id
                )
        );


    if (
        !myMatch
    ) {

        return;

    }


    const opponentId =
        myMatch.player1_id ===
        currentParticipant.id

            ? myMatch.player2_id

            : myMatch.player1_id;


    const opponent =
        getParticipant(
            opponentId
        );


    if (
        !opponent
    ) {

        return;

    }


    myMatchInfo.innerHTML =
        `
        <div>

            ${escapeHTML(
                currentParticipant.display_name
            )}

            <span class="my-match-vs">
                VS
            </span>

            ${escapeHTML(
                opponent.display_name
            )}

        </div>
        `;


    victoryButton.dataset.matchId =
        myMatch.id;


    /*
       自分の有効な試合が見つかったので
       勝利ボタンを使用可能にします。
    */
    victoryButton.disabled =
        false;


    myMatchArea
        .classList
        .remove(
            "hidden"
        );

}


/* ==========================================================
   主催者画面
========================================================== */

function renderHostControls() {

    if (
        !isHost
    ) {

        hostControls
            .classList
            .add(
                "hidden"
            );


        return;

    }


    hostControls
        .classList
        .remove(
            "hidden"
        );


    startTournamentButton.disabled =
        currentTournament.status !==
        "waiting";

    if (pauseTournamentButton) {
        const tournamentIsActive =
            currentTournament.status === "active" &&
            !currentTournament.archived_at;

        // 開始前も表示したままにし、開始するまでは操作不可にする。
        pauseTournamentButton.classList.remove("hidden");
        pauseTournamentButton.textContent = currentTournament.paused_at ? "大会を再開" : "大会を一時中断";
        pauseTournamentButton.classList.toggle("is-resume", Boolean(currentTournament.paused_at));
        pauseTournamentButton.disabled = !tournamentIsActive;
    }


    undoButton.disabled =
        currentTournament.status ===
        "waiting";


    resetTournamentButton.disabled =
        currentTournament.status ===
            "waiting"
        &&
        currentMatches.length === 0;


    /* ----------------------------------------------------------
       大会終了 / 再開ボタン
    ---------------------------------------------------------- */

    const isArchived =
        Boolean(
            currentTournament.archived_at
        );

    /*
       終了済み大会では、
       再開以外の大会操作を無効化します。
    */

    if (
        isArchived
    ) {

        startTournamentButton.disabled =
            true;

        undoButton.disabled =
            true;

        resetTournamentButton.disabled =
            true;

    }


    /*
       大会終了 / 再開ボタン

       通常大会：
       再開 = 無効
       終了 = 有効

       終了済み大会：
       再開 = 有効
       終了 = 無効
    */

    reopenTournamentButton.disabled =
        !isArchived;

    archiveTournamentButton.disabled =
        isArchived;

    renderHostParticipants();

}


function handleBracketLiveParticipantSearch(event) {
    event.preventDefault();

    const input = document.getElementById("bracketLiveParticipantSearchInput");
    const query = String(input?.value ?? "").trim();

    if (!query) {
        showMessage("参加者名を入力してください。", "error");
        input?.focus();
        return;
    }

    const participant = currentParticipants.find(
        item =>
            item.status !== "banned" &&
            String(item.display_name ?? "").trim() === query
    );

    if (!participant) {
        showMessage("一致する参加者が見つかりません。", "error");
        input?.focus();
        input?.select();
        return;
    }

    const canvas = document.getElementById("bracketSetupCanvas");

    if (!canvas) {
        showMessage("トーナメント表が見つかりません。", "error");
        return;
    }

    const participantId = String(participant.id);
    const escapedId = window.CSS?.escape
        ? CSS.escape(participantId)
        : participantId.replace(/["\\]/g, "\\$&");

    let target =
        canvas.querySelector(`[data-participant-id="${escapedId}"]`) ||
        canvas.querySelector(`[data-player-id="${escapedId}"]`) ||
        canvas.querySelector(`[data-setup-participant-id="${escapedId}"]`);

    if (!target) {
        target = Array.from(
            canvas.querySelectorAll(
                ".bracket-setup-player, .bracket-player, .auto-bracket-player, .bracket-slot-player, .bracket-match-player, [class*='player-name'], [class*='participant-name']"
            )
        ).find(element =>
            String(element.textContent ?? "").trim() === query
        ) || null;
    }

    if (!target) {
        showMessage(
            "この参加者は現在のトーナメント表上に表示されていません。",
            "error"
        );
        return;
    }

    const highlightTarget =
        target.closest(
            ".bracket-setup-player, .bracket-player, .auto-bracket-player, .bracket-slot-player, .bracket-match-player"
        ) || target;

    document.querySelectorAll(".bracket-live-search-highlight")
        .forEach(element =>
            element.classList.remove("bracket-live-search-highlight")
        );

    highlightTarget.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
    });

    highlightTarget.classList.add("bracket-live-search-highlight");

    window.setTimeout(() => {
        highlightTarget.classList.remove("bracket-live-search-highlight");
    }, 2600);
}


function handleParticipantSearch(event) {
    event.preventDefault();
    const input = document.getElementById("participantSearchInput");
    const name = (input?.value || "").trim();
    if (!name) {
        showMessage("検索する参加者名を入力してください。", "error");
        return;
    }
    const participant = currentParticipants.find((p) => (p.display_name || "").trim() === name);
    if (!participant) {
        showMessage(`「${name}」と完全一致する参加者はいません。`, "error");
        return;
    }
    const item = document.querySelector(`[data-host-participant-id="${CSS.escape(participant.id)}"]`);
    if (!item) return;
    document.querySelectorAll(".host-participant-item.search-highlight").forEach((el) => el.classList.remove("search-highlight"));
    item.classList.add("search-highlight");
    item.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => item.classList.remove("search-highlight"), 3500);
}

/* ==========================================================
   主催者：参加者管理
========================================================== */

function renderHostParticipants() {

    if (
        currentParticipants.length === 0
    ) {

        hostParticipantList.innerHTML =
            `
            <div class="empty-state">
                参加者はいません。
            </div>
            `;


        return;

    }

    /*
       現在の bracket_order 順に並べる
    */

    const orderedParticipants =
        [
            ...currentParticipants
        ].sort(
            compareParticipantsByBracketOrder
        );


    hostParticipantList.innerHTML =
        orderedParticipants
            .map(
                (
                    participant,
                    index
                ) => {

                    const status =
                        getParticipantStatus(
                            participant.status
                        );


                    let buttons =
                        "";


                    if (
                        participant.status ===
                        "active"
                    ) {

                        buttons =
                            `
                            <button
                                class="button button-suspend"
                                data-action="suspend"
                                data-participant-id="${participant.id}"
                                type="button"
                            >
                                一時ブロック
                            </button>

                            <button
                                class="button button-ban"
                                data-action="ban"
                                data-participant-id="${participant.id}"
                                type="button"
                            >
                                BAN
                            </button>
                            `;

                    } else {

                        buttons =
                            `
                            <button
                                class="button button-unblock"
                                data-action="unblock"
                                data-participant-id="${participant.id}"
                                type="button"
                            >
                                ブロック解除
                            </button>
                            `;


                        if (
                            participant.status ===
                            "suspended"
                        ) {

                            buttons +=
                                `
                                <button
                                    class="button button-ban"
                                    data-action="ban"
                                    data-participant-id="${participant.id}"
                                    type="button"
                                >
                                    BAN
                                </button>
                                `;

                        }

                    }

                    buttons +=
                        `
                        <button
                            class="button button-delete-participant${currentTournament.status !== "waiting" ? " delete-disabled-after-start" : ""}"
                            data-action="delete"
                            data-participant-id="${participant.id}"
                            data-delete-disabled-message="${currentTournament.status !== "waiting" ? "1" : "0"}"
                            type="button"
                            aria-disabled="${currentTournament.status !== "waiting" ? "true" : "false"}"
                        >
                            削除
                        </button>
                        `;

                    return `
                        <div class="host-participant-item" data-host-participant-id="${participant.id}">

                            <div class="host-participant-main">

                                <div class="host-participant-info">

                                    <div class="host-participant-name-row">

                                        <div class="participant-name">

                                            ${escapeHTML(
                                                participant.display_name
                                            )}

                                            ${
                                                participant.user_id === currentUser.id
                                                    ? "（あなた）"
                                                    : ""
                                            }

                                        </div>


                                        <div
                                            class="participant-status ${status.className}"
                                        >
                                            ${status.text}
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div class="host-participant-actions">

                                ${buttons}

                            </div>

                        </div>
                    `;

                }
            )
            .join(
                ""
            );


    /*
       一時ブロック / BAN / 解除
    */

    hostParticipantList
        .querySelectorAll(
            "[data-action]"
        )
        .forEach(
            button => {

                /*
                   終了済み大会では
                   参加者の状態を変更できないようにする
                */

                if (
                    currentTournament.archived_at
                ) {

                    button.disabled =
                        true;


                    return;

                }


                if (
                    button.dataset.action === "delete"
                    && currentTournament.status !== "waiting"
                ) {

                    return;

                }


                button
                    .addEventListener(
                        "click",
                        handleParticipantAction
                    );

            }
        );

}



/* ==========================================================
   大会開始後：参加者削除不可ツールチップ
========================================================== */

function initializeParticipantDeleteDisabledTooltip() {

    if (document.getElementById("participantDeleteDisabledTooltip")) {
        return;
    }

    const tooltip = document.createElement("div");
    tooltip.id = "participantDeleteDisabledTooltip";
    tooltip.className = "participant-delete-disabled-tooltip";
    tooltip.innerHTML =
        "大会中は一時中断でも削除はできません。<br>大会開始前にご確認ください。";

    document.body.appendChild(tooltip);

    const moveTooltip = event => {
        const gap = 14;
        const rect = tooltip.getBoundingClientRect();

        let x = event.clientX + gap;
        let y = event.clientY + gap;

        if (x + rect.width > window.innerWidth - 8) {
            x = event.clientX - rect.width - gap;
        }

        if (y + rect.height > window.innerHeight - 8) {
            y = event.clientY - rect.height - gap;
        }

        tooltip.style.left = `${Math.max(8, x)}px`;
        tooltip.style.top = `${Math.max(8, y)}px`;
    };

    document.addEventListener("pointerover", event => {
        const button = event.target.closest?.(
            ".button-delete-participant"
        );

        if (!button) {
            return;
        }

        if (button.classList.contains("delete-disabled-after-start")) {
            tooltip.innerHTML =
                "大会中は一時中断でも削除はできません。<br>大会開始前にご確認ください。";
        } else {
            tooltip.textContent =
                "大会開始後は削除できません。";
        }

        tooltip.classList.add("is-visible");
        moveTooltip(event);
    });

    document.addEventListener("pointermove", event => {
        if (!tooltip.classList.contains("is-visible")) {
            return;
        }

        const button = event.target.closest?.(
            ".button-delete-participant"
        );

        if (!button) {
            tooltip.classList.remove("is-visible");
            return;
        }

        moveTooltip(event);
    });

    document.addEventListener("pointerout", event => {
        const button = event.target.closest?.(
            ".button-delete-participant"
        );

        if (button) {
            tooltip.classList.remove("is-visible");
        }
    });
}

initializeParticipantDeleteDisabledTooltip();


/* ==========================================================
   参加者並び替え 初期化
========================================================== */

function initializeParticipantReordering() {

    const items =
        hostParticipantList
            .querySelectorAll(
                "[data-reorder-participant-id]"
            );


    items.forEach(
        item => {

            const handle =
                item.querySelector(
                    ".participant-drag-handle"
                );


            if (
                !handle
            ) {

                return;

            }


            /*
               Pointer Events を使用します。

               mouse / touch / pen を
               同じ処理で扱えるため、
               PCとスマホの両方に対応できます。
            */

            handle.addEventListener(
                "pointerdown",
                event => {

                    beginParticipantDrag(
                        event,
                        item,
                        handle
                    );

                }
            );

        }
    );

}


/* ==========================================================
   ドラッグ開始
========================================================== */

function beginParticipantDrag(
    event,
    item,
    handle
) {

    /*
       主催者かつ大会開始前だけ
    */

    if (
        !isHost
        ||
        !currentTournament
        ||
        currentTournament.status !==
            "waiting"
        ||
        participantOrderSaving
    ) {

        return;

    }


    /*
       左クリック以外は無視

       touchの場合 button は通常0なので
       そのまま通ります。
    */

    if (
        event.pointerType ===
            "mouse"
        &&
        event.button !== 0
    ) {

        return;

    }


    event.preventDefault();


    draggedParticipantId =
        item.dataset
            .reorderParticipantId;


    draggedParticipantElement =
        item;


    /*
       pointercapture により、
       指やマウスがハンドルから外れても
       pointermoveを受け取れます。
    */

    try {

        handle.setPointerCapture(
            event.pointerId
        );

    } catch (
        error
    ) {

        /*
           一部ブラウザで
           setPointerCapture が使えなくても
           ドラッグ自体は続行します。
        */

    }


    item.classList.add(
        "participant-dragging"
    );


    hostParticipantList
        .classList
        .add(
            "participant-list-reordering"
        );


    /*
       ドラッグ中に文字選択されないようにする
    */

    document.body
        .classList
        .add(
            "participant-drag-active"
        );


    const pointerMoveHandler =
        moveEvent => {

            handleParticipantPointerMove(
                moveEvent
            );

        };


    const pointerEndHandler =
        endEvent => {

            finishParticipantDrag(
                endEvent,
                handle,
                pointerMoveHandler,
                pointerEndHandler
            );

        };


    handle.addEventListener(
        "pointermove",
        pointerMoveHandler
    );


    handle.addEventListener(
        "pointerup",
        pointerEndHandler
    );


    handle.addEventListener(
        "pointercancel",
        pointerEndHandler
    );

}


/* ==========================================================
   ドラッグ中
========================================================== */

function handleParticipantPointerMove(
    event
) {

    if (
        !draggedParticipantElement
    ) {

        return;

    }


    event.preventDefault();


    const clientY =
        event.clientY;


    /*
       現在ドラッグしているもの以外を取得
    */

    const otherItems =
        [
            ...hostParticipantList
                .querySelectorAll(
                    "[data-reorder-participant-id]"
                )
        ].filter(
            item =>
                item !==
                draggedParticipantElement
        );


    if (
        otherItems.length === 0
    ) {

        return;

    }


    /*
       指・マウスのY座標に最も近い
       挿入位置を探す
    */

    let insertBeforeElement =
        null;


    for (
        const item
        of otherItems
    ) {

        const rect =
            item.getBoundingClientRect();


        const middleY =
            rect.top +
            (
                rect.height /
                2
            );


        if (
            clientY <
            middleY
        ) {

            insertBeforeElement =
                item;

            break;

        }

    }


    if (
        insertBeforeElement
    ) {

        if (
            draggedParticipantElement
                .nextElementSibling !==
            insertBeforeElement
        ) {

            hostParticipantList
                .insertBefore(
                    draggedParticipantElement,
                    insertBeforeElement
                );

        }

    } else {

        hostParticipantList
            .appendChild(
                draggedParticipantElement
            );

    }


    /*
       表示中の番号を即座に更新
    */

    updateParticipantOrderNumbers();

}


/* ==========================================================
   ドラッグ終了
========================================================== */

async function finishParticipantDrag(
    event,
    handle,
    pointerMoveHandler,
    pointerEndHandler
) {

    if (
        !draggedParticipantElement
    ) {

        return;

    }


    /*
       イベント解除
    */

    handle.removeEventListener(
        "pointermove",
        pointerMoveHandler
    );


    handle.removeEventListener(
        "pointerup",
        pointerEndHandler
    );


    handle.removeEventListener(
        "pointercancel",
        pointerEndHandler
    );


    try {

        if (
            handle.hasPointerCapture(
                event.pointerId
            )
        ) {

            handle.releasePointerCapture(
                event.pointerId
            );

        }

    } catch (
        error
    ) {

        /*
           pointer capture非対応時は無視
        */

    }


    draggedParticipantElement
        .classList
        .remove(
            "participant-dragging"
        );


    hostParticipantList
        .classList
        .remove(
            "participant-list-reordering"
        );


    document.body
        .classList
        .remove(
            "participant-drag-active"
        );


    draggedParticipantId =
        null;


    draggedParticipantElement =
        null;


    /*
       画面上の並び順をDBへ保存
    */

    await scheduleParticipantOrderSave();

}


/* ==========================================================
   表示中の順番番号更新
========================================================== */

function updateParticipantOrderNumbers() {

    const items =
        hostParticipantList
            .querySelectorAll(
                "[data-reorder-participant-id]"
            );


    items.forEach(
        (
            item,
            index
        ) => {

            const number =
                item.querySelector(
                    ".participant-order-number"
                );


            if (
                number
            ) {

                number.textContent =
                    String(
                        index + 1
                    );

            }

        }
    );

}


/* ==========================================================
   並び順保存予約
========================================================== */

async function scheduleParticipantOrderSave() {

    clearTimeout(
        participantOrderSaveTimer
    );


    /*
       ドラッグ終了直後に保存します。

       短時間に複数回処理が走った場合は
       最後の操作だけ保存します。
    */

    return new Promise(
        resolve => {

            participantOrderSaveTimer =
                setTimeout(
                    async () => {

                        try {

                            await saveParticipantOrder();

                        } finally {

                            resolve();

                        }

                    },
                    80
                );

        }
    );

}


/* ==========================================================
   Supabaseへ並び順保存
========================================================== */

async function saveParticipantOrder() {

    if (
        !currentTournament
        ||
        !isHost
        ||
        currentTournament.status !==
            "waiting"
    ) {

        return;

    }


    if (
        participantOrderSaving
    ) {

        return;

    }


    const items =
        [
            ...hostParticipantList
                .querySelectorAll(
                    "[data-reorder-participant-id]"
                )
        ];


    const orderedIds =
        items
            .map(
                item =>
                    item.dataset
                        .reorderParticipantId
            )
            .filter(
                Boolean
            );


    /*
       参加者全員が含まれているか
       クライアント側でも確認
    */

    if (
        orderedIds.length !==
        currentParticipants.length
    ) {

        showMessage(
            "参加者の並び順を取得できませんでした。",
            "error"
        );


        await safeReloadTournamentData();


        return;

    }


    /*
       同じIDが重複していないか確認
    */

    if (
        new Set(
            orderedIds
        ).size !==
        orderedIds.length
    ) {

        showMessage(
            "参加者の並び順に問題があります。",
            "error"
        );


        await safeReloadTournamentData();


        return;

    }


    participantOrderSaving =
        true;


    hostParticipantList
        .classList
        .add(
            "participant-order-saving"
        );


    try {

        const {
            error
        } =
            await supabaseClient.rpc(
                "reorder_participants",
                {
                    p_tournament_id:
                        currentTournament.id,

                    p_participant_ids:
                        orderedIds
                }
            );


        if (
            error
        ) {

            throw error;

        }


        /*
           DB保存成功後、
           ローカル側も同じ順番に更新します。

           Realtimeを待たずに画面を安定させます。
        */

        const participantMap =
            new Map(
                currentParticipants.map(
                    participant => [
                        participant.id,
                        participant
                    ]
                )
            );


        currentParticipants =
            orderedIds
                .map(
                    (
                        participantId,
                        index
                    ) => {

                        const participant =
                            participantMap.get(
                                participantId
                            );


                        if (
                            !participant
                        ) {

                            return null;

                        }


                        return {
                            ...participant,

                            bracket_order:
                                index + 1
                        };

                    }
                )
                .filter(
                    Boolean
                );


        currentParticipant =
            currentParticipants.find(
                participant =>

                    participant.user_id ===
                    currentUser.id

            ) || null;


        showMessage(
            "対戦順を保存しました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        /*
           保存失敗時はDB上の正しい順番に戻す
        */

        await safeReloadTournamentData();

    } finally {

        participantOrderSaving =
            false;


        hostParticipantList
            .classList
            .remove(
                "participant-order-saving"
            );

    }

}


/* ==========================================================
   大会開始
========================================================== */

async function handleStartTournament() {

    if (!currentTournament) {
        return;
    }

    /*
       ------------------------------------------------------
       新トーナメント表の配置を確認
       ------------------------------------------------------
    */
    syncBracketSetupState();

    const activeParticipants =
        currentParticipants.filter(
            participant => participant.status !== "banned"
        );

    if (activeParticipants.length < 2) {
        showMessage(
            "大会を開始するには2人以上の参加者が必要です。",
            "error"
        );
        return;
    }

    const expectedSlotCount =
        nextPowerOfTwoForSetup(activeParticipants.length);

    if (
        bracketSetupAssignments.length !== expectedSlotCount
    ) {
        showMessage(
            "トーナメント表の枠数が参加人数と一致していません。画面を更新してもう一度お試しください。",
            "error"
        );
        return;
    }

    const assignedIds =
        bracketSetupAssignments.filter(Boolean);

    if (assignedIds.length !== activeParticipants.length) {
        const assignedSet = new Set(assignedIds);
        const names = activeParticipants
            .filter(participant => !assignedSet.has(participant.id))
            .map(participant => participant.display_name)
            .join("、");

        showMessage(
            names
                ? `トーナメント表に配置されていない参加者がいます：${names}`
                : "すべての参加者をトーナメント表へ配置してください。",
            "error"
        );
        return;
    }

    if (new Set(assignedIds).size !== assignedIds.length) {
        showMessage(
            "同じ参加者が複数の枠に配置されています。配置を確認してください。",
            "error"
        );
        return;
    }

    const validParticipantIds =
        new Set(activeParticipants.map(participant => participant.id));

    if (assignedIds.some(id => !validParticipantIds.has(id))) {
        showMessage(
            "BANされた参加者、または無効な参加者がトーナメント表に含まれています。",
            "error"
        );
        return;
    }

    const confirmed =
        await showConfirmDialog(
            "大会を開始",
            "現在のトーナメント表の配置を保存して大会を開始します。開始後は参加者の配置を変更できません。",
            "大会を開始",
            "success"
        );

    if (!confirmed) {
        return;
    }

    try {
        setButtonLoading(
            startTournamentButton,
            true,
            "開始中..."
        );

        /*
           画面上の全枠をそのままDBへ保存します。
           空き枠は null = BYE として送ります。
        */
        const {
            error: saveBracketError
        } = await supabaseClient.rpc(
            "save_generated_bracket",
            {
                p_tournament_id: currentTournament.id,
                p_player_ids: bracketSetupAssignments.map(
                    participantId => participantId || null
                )
            }
        );

        if (saveBracketError) {
            throw saveBracketError;
        }

        /*
           保存した1回戦配置から既存エンジンで
           2回戦以降を生成して大会を開始します。
        */
        const {
            error: startError
        } = await supabaseClient.rpc(
            "start_tournament",
            {
                p_tournament_id: currentTournament.id
            }
        );

        if (startError) {
            throw startError;
        }

        bracketSetupConfirmed = true;

        await loadTournamentData();

        // YouTube大会は開始成功時に勝利報告の監視を自動開始する。
        // 既に監視中なら状態を維持し、通常大会には影響させない。
        if (currentTournament?.tournament_mode === "youtube" &&
            currentTournament.status === "active" &&
            !youtubeMonitorActive) {
            await startYoutubeChatMonitor();
        }

        requestAnimationFrame(() => {
            document.getElementById("bracketSetupPrototype")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        showMessage(
            "トーナメント表の配置を保存して大会を開始しました。",
            "success"
        );

    } catch (error) {
        console.error(
            "tournament start error:",
            error
        );

        /*
           RPCの応答がエラーでも、開始処理自体がDB上で完了している
           場合があります。先に最新状態を再取得し、active / finished
           なら開始成功として画面を確定します。
        */
        await safeReloadTournamentData();

        if (
            currentTournament &&
            (
                currentTournament.status === "active" ||
                currentTournament.status === "finished"
            )
        ) {
            bracketSetupConfirmed = true;

            // RPC応答がエラーでも大会開始が完了していた場合の復旧経路。
            if (currentTournament.tournament_mode === "youtube" &&
                currentTournament.status === "active" &&
                !youtubeMonitorActive) {
                await startYoutubeChatMonitor();
            }

            requestAnimationFrame(() => {
                document.getElementById("bracketSetupPrototype")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });

            showMessage(
                "トーナメント表の配置を保存して大会を開始しました。",
                "success"
            );
        } else {
            showMessage(
                translateError(error),
                "error"
            );
        }

    } finally {
        setButtonLoading(
            startTournamentButton,
            false
        );

        if (currentTournament) {
            startTournamentButton.disabled =
                currentTournament.status !== "waiting";
        }
    }
}


async function handlePauseTournament() {
    if (!currentTournament || !isHost || currentTournament.status !== "active") return;
    const paused = Boolean(currentTournament.paused_at);
    const ok = await showConfirmDialog(paused ? "大会を再開" : "大会を一時中断", paused ? "大会を再開します。" : "中断中は参加者が勝利ボタンを押せなくなります。主催者の勝者指定は引き続き使用できます。", paused ? "大会を再開" : "一時中断", paused ? "success" : "warning");
    if (!ok) return;
    try {
        pauseTournamentButton.disabled = true;
        const { error } = await supabaseClient.rpc(paused ? "resume_tournament" : "pause_tournament", { p_tournament_id: currentTournament.id });
        if (error) throw error;
        await loadTournamentData();
        showMessage(paused ? "大会を再開しました。" : "大会を一時中断しました。", paused ? "success" : "warning");
    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");
    } finally {
        if (pauseTournamentButton) pauseTournamentButton.disabled = false;
    }
}

/* ==========================================================
   参加者：勝利
========================================================== */

async function handleVictory() {

    const matchId =
        victoryButton
            .dataset
            .matchId;


    if (
        !matchId
    ) {

        return;

    }


    const confirmed =
        await showConfirmDialog(
            "勝利を登録",
            "この試合の勝者として登録します。よろしいですか？",
            "勝利を登録",
            "success"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        setButtonLoading(
            victoryButton,
            true,
            "登録中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "claim_victory",
                {
                    p_match_id:
                        matchId
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            "勝利を登録しました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    } finally {

        /*
           勝利ボタンのLoading状態を解除します。
           loadTournamentData() によって次の試合が
           表示されている場合、その試合で再び
           勝利ボタンを使用できるようにします。
        */

        setButtonLoading(
            victoryButton,
            false
        );


        /*
           自分の試合が表示されていない場合は
           勝利ボタンを操作できない状態にします。
        */

        if (
            myMatchArea
                .classList
                .contains(
                    "hidden"
                )
        ) {

            victoryButton.disabled =
                true;

        }

    }

}

/* ==========================================================
   Undo
========================================================== */

async function handleParticipantUndo(event) {
    const button = event.currentTarget?.dataset?.matchId ? event.currentTarget : event.target.closest("[data-participant-undo]");
    if (!button || button.disabled) return;
    const matchId = button.dataset.matchId;
    const match = currentMatches.find(item => item.id === matchId);
    const winner = match && getParticipant(match.winner_id);
    if (!winner) return;
    const confirmed = await showConfirmDialog(
        "勝利を取り消す",
        `${winner.display_name}さんの直近の勝利を取り消して、この試合を未決着に戻します。後続の試合が決着している場合は取り消せません。`,
        "戻す"
    );
    if (!confirmed) return;
    try {
        setButtonLoading(button, true, "処理中...");
        const { error } = await supabaseClient.rpc("undo_participant_victory", {
            p_match_id: matchId
        });
        if (error) throw error;
        await loadTournamentData();
        showMessage("勝利を取り消しました。", "success");
    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");
        await safeReloadTournamentData();
    } finally {
        if (button.isConnected) setButtonLoading(button, false);
    }
}

async function handleUndo() {

    if (
        !currentTournament
    ) {

        return;

    }


    const confirmed =
        await showConfirmDialog(
            "1つ前に戻す",
            "最後に登録された勝利を1つ取り消します。",
            "戻す"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        setButtonLoading(
            undoButton,
            true,
            "処理中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "undo_last_victory",
                {
                    p_tournament_id:
                        currentTournament.id
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            "1つ前の勝利を取り消しました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    } finally {

        setButtonLoading(
            undoButton,
            false
        );


        /*
           loadTournamentData() 後の状態に合わせて
           ボタン状態を戻します。
        */

        if (
            currentTournament
        ) {

            undoButton.disabled =
                currentTournament.status ===
                    "waiting";

        }

    }

}


/* ==========================================================
   リセット
========================================================== */

async function handleResetTournament() {

    if (
        !currentTournament
    ) {

        return;

    }


    const confirmed =
        await showConfirmDialog(
            "トーナメントをリセット",
            "対戦表と勝敗データをリセットします。参加者は残ります。",
            "リセット"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        setButtonLoading(
            resetTournamentButton,
            true,
            "リセット中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "reset_tournament",
                {
                    p_tournament_id:
                        currentTournament.id
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            "トーナメントをリセットしました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    } finally {

        setButtonLoading(
            resetTournamentButton,
            false
        );

        /*
           現在の大会状態に合わせて
           disabledを決め直します。
        */

        if (
            currentTournament
        ) {

            resetTournamentButton.disabled =
                currentTournament.status ===
                    "waiting"
                &&
                currentMatches.length ===
                    0;

        }

    }
}


/* ==========================================================
   終了済み大会を再開
========================================================== */

async function handleReopenTournament() {

    if (
        !currentTournament
        ||
        !isHost
        ||
        !currentTournament.archived_at
    ) {

        return;

    }


    const confirmed =
        await showConfirmDialog(
            "終了済み大会を再開",
            "この大会を再開します。参加者・対戦カード・試合結果・BANなどの状態はそのまま引き継がれます。",
            "大会を再開する"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        setButtonLoading(
            reopenTournamentButton,
            true,
            "再開中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "reopen_tournament",
                {
                    p_tournament_id:
                        currentTournament.id
                }
            );


        if (
            error
        ) {

            throw error;

        }


        /*
           archived_at = NULL になった最新状態を
           Supabaseから再取得します。
        */

        await loadTournamentData();

        await loadMyTournaments();

        showMessage(
            "大会を再開しました。",
            "success"
        );


    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();


    } finally {

        setButtonLoading(
            reopenTournamentButton,
            false
        );

    }

}


/* ==========================================================
   TOP：主催大会の一括終了 / 一括削除
========================================================== */

async function handleArchiveAllHostTournaments() {

    const confirmed = await showConfirmDialog(
        "全部の大会を終了",
        "自分が主催している未終了の大会をすべて終了します。大会データは削除されません。",
        "全部終了する"
    );

    if (!confirmed) {
        return;
    }

    try {
        setButtonLoading(
            archiveAllHostTournamentsButton,
            true,
            "終了中..."
        );

        const { data, error } = await supabaseClient.rpc(
            "archive_all_host_tournaments"
        );

        if (error) {
            throw error;
        }

        await loadMyTournaments();

        const count = Number(data ?? 0);
        showMessage(
            count > 0
                ? `${count}件の大会を終了しました。`
                : "終了する大会はありませんでした。",
            "success"
        );

    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");

    } finally {
        setButtonLoading(
            archiveAllHostTournamentsButton,
            false
        );
    }
}


async function handleDeleteAllHostTournaments() {

    const confirmed = await showConfirmDialog(
        "全部の大会を削除",
        "自分が主催するすべての大会と、参加者・対戦カード・試合結果などの関連データを完全に削除します。この操作は取り消せません。",
        "すべて削除する"
    );

    if (!confirmed) {
        return;
    }

    try {
        setButtonLoading(
            deleteAllHostTournamentsButton,
            true,
            "削除中..."
        );

        /*
           先に終了を別トランザクションで確定させる。
           これにより参加者側へRealtime UPDATEが確実に届いてから完全削除する。
        */
        const { error: archiveError } = await supabaseClient.rpc(
            "archive_all_host_tournaments"
        );

        if (archiveError) {
            throw archiveError;
        }

        await new Promise(resolve => setTimeout(resolve, 350));

        const { data, error } = await supabaseClient.rpc(
            "delete_all_host_tournaments"
        );

        if (error) {
            throw error;
        }

        await loadMyTournaments();

        const count = Number(data ?? 0);
        showMessage(
            count > 0
                ? `${count}件の大会を完全に削除しました。`
                : "削除する大会はありませんでした。",
            "success"
        );

    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");

    } finally {
        setButtonLoading(
            deleteAllHostTournamentsButton,
            false
        );
    }
}


/* ==========================================================
   大会終了
========================================================== */

async function handleArchiveTournament() {

    if (
        !currentTournament
        ||
        !isHost
    ) {

        return;

    }


    const confirmed =
        await showConfirmDialog(
            "大会を終了",
            "この大会を終了します。参加者・対戦カード・試合結果は削除されません。",
            "大会を終了する"
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        setButtonLoading(
            archiveTournamentButton,
            true,
            "終了中..."
        );


        const {
            error
        } =
            await supabaseClient.rpc(
                "archive_tournament",
                {
                    p_tournament_id:
                        currentTournament.id
                }
            );


        if (
            error
        ) {

            throw error;

        }


        showMessage(
            "大会を終了しました。",
            "success"
        );


        await handleLeaveTournament();

        await loadMyTournaments();

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );

    } finally {

        setButtonLoading(
            archiveTournamentButton,
            false
        );

    }

}


/* ==========================================================
   一時ブロック / BAN / 解除
========================================================== */

async function handleParticipantAction(
    event
) {

    const button =
        event.currentTarget;


    const participantId =
        button.dataset
            .participantId;


    const action =
        button.dataset
            .action;


    const participant =
        getParticipant(
            participantId
        );


    if (
        !participant
    ) {

        return;

    }


    let newStatus;

    let title;

    let message;

    let confirmText;

    let dialogType =
        "danger";


    /* ----------------------------------------------------------
       一時ブロック
    ---------------------------------------------------------- */

    if (
        action ===
        "suspend"
    ) {

        newStatus =
            "suspended";


        title =
            "一時ブロック";


        message =
            `${participant.display_name} さんを一時ブロックします。参加者は大会に残りますが、勝利ボタンを押せなくなります。`;


        confirmText =
            "一時ブロック";

    }

    /* ----------------------------------------------------------
       BAN
    ---------------------------------------------------------- */

    else if (
        action ===
        "ban"
    ) {

        newStatus =
            "banned";


        title =
            "BAN";


        message =
            `${participant.display_name} さんをBANします。進行中の対戦に相手がいる場合、相手が自動的に勝ち上がります。`;


        confirmText =
            "BANする";

    }

    /* ----------------------------------------------------------
       削除
    ---------------------------------------------------------- */

    else if (
        action ===
        "delete"
    ) {

        title =
            "参加者を削除";


        message =
            `${participant.display_name} さんを参加者一覧とトーナメント配置から削除します。BANではないため、削除後は同じブラウザから再参加できます。`;


        confirmText =
            "削除する";


        const confirmed =
            await showConfirmDialog(
                title,
                message,
                confirmText,
                "danger"
            );


        if (
            !confirmed
        ) {

            return;

        }


        try {

            button.disabled =
                true;


            const {
                error
            } =
                await supabaseClient.rpc(
                    "host_delete_participant",
                    {
                        p_participant_id:
                            participantId
                    }
                );


            if (
                error
            ) {

                throw error;

            }


            await loadTournamentData();


            showMessage(
                "参加者を削除しました。",
                "success"
            );

        } catch (
            error
        ) {

            console.error(
                error
            );


            showMessage(
                translateError(
                    error
                ),
                "error"
            );


            await safeReloadTournamentData();

        }


        return;

    }

    /* ----------------------------------------------------------
       ブロック解除
    ---------------------------------------------------------- */

    else {

        newStatus =
            "active";


        title =
            "ブロック解除";


        message =
            `${participant.display_name} さんのブロックを解除します。`;


        confirmText =
            "解除する";


        dialogType =
            "success";

    }


    const confirmed =
        await showConfirmDialog(
            title,
            message,
            confirmText,
            dialogType
        );


    if (
        !confirmed
    ) {

        return;

    }


    try {

        button.disabled =
            true;


        const {
            error
        } =
            await supabaseClient.rpc(
                "set_participant_status",
                {
                    p_participant_id:
                        participantId,

                    p_status:
                        newStatus
                }
            );


        if (
            error
        ) {

            throw error;

        }


        await loadTournamentData();


        showMessage(
            getParticipantActionSuccessMessage(
                newStatus
            ),
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        showMessage(
            translateError(
                error
            ),
            "error"
        );


        await safeReloadTournamentData();

    }

}


/* ==========================================================
   Realtime
========================================================== */

async function subscribeRealtime() {

    await unsubscribeRealtime();


    if (
        !currentTournament
    ) {

        return;

    }


    const tournamentId =
        currentTournament.id;


    realtimeChannel =
        supabaseClient
            .channel(
                `tournament-${tournamentId}`
            )


            /* --------------------------------------------------
               大会情報
            -------------------------------------------------- */

            .on(
                "postgres_changes",
                {
                    event:
                        "*",

                    schema:
                        "public",

                    table:
                        "tournaments",

                    filter:
                        `id=eq.${tournamentId}`
                },
                handleRealtimeChange
            )


            /* --------------------------------------------------
               参加者

               bracket_order の変更もここで受け取ります。
            -------------------------------------------------- */

            .on(
                "postgres_changes",
                {
                    event:
                        "*",

                    schema:
                        "public",

                    table:
                        "participants",

                    filter:
                        `tournament_id=eq.${tournamentId}`
                },
                handleRealtimeChange
            )


            /* --------------------------------------------------
               試合
            -------------------------------------------------- */

            .on(
                "postgres_changes",
                {
                    event:
                        "*",

                    schema:
                        "public",

                    table:
                        "matches",

                    filter:
                        `tournament_id=eq.${tournamentId}`
                },
                handleRealtimeChange
            )


            .subscribe();

}


/* ==========================================================
   Realtime変更
========================================================== */

function handleRealtimeChange(payload) {

    /* 大会自体が削除された場合は、開いている参加者を即TOPへ戻す */
    if (payload?.table === "tournaments" && payload?.eventType === "DELETE") {
        void handleDeletedTournamentRealtime();
        return;
    }

    /* 大会終了はpayloadを先に反映し、表示の遅延をなくす */
    if (payload?.table === "tournaments" && payload?.eventType === "UPDATE" && payload?.new?.id === currentTournament?.id) {
        currentTournament = { ...currentTournament, ...payload.new };
        renderTournament();
    }

    /*
       自分がドラッグしている最中に
       Realtime再描画するとDOMが入れ替わって
       ドラッグが途切れるため待ちます。
    */

    if (
        draggedParticipantElement
        ||
        participantOrderSaving
    ) {

        clearTimeout(
            realtimeRefreshTimer
        );


        realtimeRefreshTimer =
            setTimeout(
                () => {

                    handleRealtimeChange();

                },
                250
            );


        return;

    }


    clearTimeout(
        realtimeRefreshTimer
    );


    realtimeRefreshTimer =
        setTimeout(
            async () => {

                try {

                    await loadTournamentData();

                } catch (
                    error
                ) {

                    console.error(
                        "Realtime refresh error:",
                        error
                    );

                }

            },
            120
        );

}




/* ==========================================================
   TOP大会一覧 Realtime
========================================================== */

function subscribeTournamentListRealtime() {
    if (tournamentListRealtimeChannel) return;

    tournamentListRealtimeChannel = supabaseClient
        .channel("tournament-list-realtime")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "tournaments" },
            () => {
                clearTimeout(tournamentListRealtimeTimer);
                tournamentListRealtimeTimer = setTimeout(async () => {
                    /* TOPを表示している時だけ一覧を取り直す */
                    if (!homeScreen.classList.contains("hidden")) {
                        try {
                            await loadMyTournaments();
                        } catch (error) {
                            console.error("Tournament list realtime refresh error:", error);
                        }
                    }
                }, 80);
            }
        )
        .subscribe();
}

async function handleDeletedTournamentRealtime() {
    if (!currentTournament) return;

    clearTimeout(participantOrderSaveTimer);
    participantOrderSaveTimer = null;
    draggedParticipantId = null;
    draggedParticipantElement = null;
    participantOrderSaving = false;
    document.body.classList.remove("participant-drag-active");

    await unsubscribeRealtime();

    currentTournament = null;
    currentParticipants = [];
    currentMatches = [];
    currentBracketSlots = [];
    currentParticipant = null;
    isHost = false;

    clearTournamentURL();
    showHome();
    await loadMyTournaments();
    showMessage("この大会は主催者によって削除されました。", "info");
}


/* ==========================================================
   Realtime解除
========================================================== */

async function unsubscribeRealtime() {

    clearTimeout(
        realtimeRefreshTimer
    );


    realtimeRefreshTimer =
        null;


    if (
        !realtimeChannel
    ) {

        return;

    }


    try {

        await supabaseClient
            .removeChannel(
                realtimeChannel
            );

    } catch (
        error
    ) {

        console.warn(
            "Realtime unsubscribe:",
            error
        );

    }


    realtimeChannel =
        null;

}


/* ==========================================================
   安全な再読込
========================================================== */

async function safeReloadTournamentData() {

    if (
        !currentTournament
    ) {

        return;

    }


    /*
       ドラッグ中にDOMを再生成しない
    */

    if (
        draggedParticipantElement
    ) {

        return;

    }


    try {

        await loadTournamentData();

    } catch (
        error
    ) {

        console.error(
            "Tournament reload error:",
            error
        );

    }

}


/* ==========================================================
   大会コード表示 / 非表示
========================================================== */

function toggleTournamentCodeVisibility() {
    if (!currentTournament) return;

    isTournamentCodeVisible = !isTournamentCodeVisible;
    currentTournamentCode.textContent = isTournamentCodeVisible
        ? currentTournament.tournament_code
        : getTournamentCodeMask();

    toggleTournamentCodeButton.classList.toggle("is-hidden", !isTournamentCodeVisible);
    updateTournamentCodeEyeIcon();
    const label = isTournamentCodeVisible ? "大会コードを隠す" : "大会コードを表示";
    toggleTournamentCodeButton.setAttribute("aria-label", label);
    toggleTournamentCodeButton.title = label;
}

/* ==========================================================
   大会コードコピー
========================================================== */

async function copyTournamentCode() {

    if (
        !currentTournament
    ) {

        return;

    }


    const code =
        currentTournament
            .tournament_code;


    try {

        await navigator
            .clipboard
            .writeText(
                code
            );


        showMessage(
            "大会コードをコピーしました。",
            "success"
        );

    } catch (
        error
    ) {

        console.error(
            error
        );


        /*
           Clipboard API が利用できない環境では
           コードそのものを表示します。
        */

        showMessage(
            `大会コード：${code}`,
            "info"
        );

    }

}


/* ==========================================================
   トップへ戻る
========================================================== */

async function handleLeaveTournament() {

    /*
       並び替え関連タイマーを停止
    */

    clearTimeout(
        participantOrderSaveTimer
    );


    participantOrderSaveTimer =
        null;


    draggedParticipantId =
        null;


    draggedParticipantElement =
        null;


    participantOrderSaving =
        false;


    document.body
        .classList
        .remove(
            "participant-drag-active"
        );


    await unsubscribeRealtime();


    currentTournament =
        null;


    currentParticipants =
        [];


    currentMatches =
        [];


    currentParticipant =
        null;


    isHost =
        false;


    clearTournamentURL();


    showHome();

    /*
       大会ページの「← トップへ戻る」は
       方式選択TOPではなく「通常トーナメント機能版」のTOPへ戻す。
       戻る・進むでもこの状態を復元できるよう、現在の履歴を通常版TOPとして置き換える。
    */
    showTournamentMode("normal");

    window.history.replaceState(
        { screen: "home", mode: "normal" },
        "",
        window.location.pathname
    );


    /*
       F5などで大会URLから直接開いた場合は、
       初期表示時に「あなたが参加してる大会一覧」を
       読み込んでいないため、トップへ戻る時に再取得する。
    */

    await loadMyTournaments();

}


/* ==========================================================
   画面切り替え
========================================================== */

/* YouTube identity: verified channel ID, not a mutable handle, is authoritative. */
const YOUTUBE_HANDLE_STORAGE_PREFIX = "tournament.youtubeHostHandle.v2.";
let youtubeHandleOwnerId = null;
let youtubeHandleVerified = false;
let youtubeVerifiedChannelId = null;

function youtubeHandleStorageKey() {
    return youtubeHandleOwnerId ? YOUTUBE_HANDLE_STORAGE_PREFIX + youtubeHandleOwnerId : null;
}

function saveYoutubeHandleLocally() {
    const key = youtubeHandleStorageKey();
    if (!key || !youtubeHostHandle) return;
    try {
        const handle = youtubeHostHandle.value.trim();
        if (handle) localStorage.setItem(key, handle);
        else localStorage.removeItem(key);
    } catch (error) { console.warn("YouTubeハンドルの保存に失敗", error); }
}

function isYoutubeHandleFormat(handle) {
    // Unicode handles (including Japanese) are valid. The YouTube API is authoritative.
    return /^@[^\s@/\\?#]{1,100}$/u.test(String(handle || ""));
}

function showYoutubeIdentityStatus(message, reauth = false) {
    if (!youtubeHostHandle) return;
    let status = document.getElementById("youtubeIdentityStatus");
    if (!status) {
        status = document.createElement("div");
        status.id = "youtubeIdentityStatus";
        status.setAttribute("role", "status");
        status.style.marginTop = "8px";
        youtubeHostHandle.insertAdjacentElement("afterend", status);
    }
    status.textContent = message;
    let button = document.getElementById("youtubeIdentityReauthButton");
    if (!button) {
        button = document.createElement("button");
        button.type = "button";
        button.id = "youtubeIdentityReauthButton";
        button.className = "button button-secondary";
        button.textContent = "GoogleでYouTubeを再認証";
        button.style.marginTop = "6px";
        button.addEventListener("click", async () => {
            button.disabled = true;
            try {
                const redirectTo = window.location.origin + window.location.pathname;
                const { error } = await supabaseClient.auth.signInWithOAuth({
                    provider: "google",
                    options: { redirectTo, scopes: "https://www.googleapis.com/auth/youtube.readonly",
                        queryParams: { prompt: "consent", access_type: "offline" } }
                });
                if (error) throw error;
            } catch (error) {
                button.disabled = false;
                showYoutubeIdentityStatus("再認証を開始できませんでした: " + (error?.message || error), true);
            }
        });
        status.insertAdjacentElement("afterend", button);
    }
    button.hidden = !reauth;
}

async function fetchMyYoutubeIdentity() {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    const providerToken = data?.session?.provider_token;
    if (!providerToken) return { state: "reauth" };
    let response;
    try {
        response = await fetch("https://www.googleapis.com/youtube/v3/channels?part=id,snippet&mine=true&maxResults=50", {
            headers: { Authorization: "Bearer " + providerToken }
        });
    } catch (error) { return { state: "network" }; }
    if (response.status === 401 || response.status === 403) return { state: "reauth" };
    if (!response.ok) return { state: "error" };
    const payload = await response.json();
    const channels = (payload.items || []).filter(c => c.id && isYoutubeHandleFormat(c.snippet?.customUrl));
    if (channels.length !== 1 || (payload.items || []).length !== 1) return { state: "ambiguous" };
    return { state: "ok", channelId: channels[0].id, handle: channels[0].snippet.customUrl };
}

async function restoreYoutubeHostHandle() {
    const googleLinked = Boolean(currentUser?.identities?.some(i => i.provider === "google"))
        || currentUser?.app_metadata?.providers?.includes("google") === true;
    youtubeHandleOwnerId = googleLinked ? currentUser?.id : null;
    youtubeHandleVerified = false;
    youtubeVerifiedChannelId = null;
    if (!youtubeHostHandle || !youtubeHandleOwnerId) return;

    // Existing values are displayed only as unverified fallback; never auto-synced.
    let saved = null;
    try { saved = localStorage.getItem(youtubeHandleStorageKey()); } catch (_) {}
    if (saved) youtubeHostHandle.value = saved;
    let profile = null;
    const { data, error } = await supabaseClient.from("host_youtube_preferences")
        .select("youtube_handle, youtube_channel_id")
        .eq("user_id", youtubeHandleOwnerId).maybeSingle();
    if (error) {
        showYoutubeIdentityStatus("YouTube情報の読み込みに失敗しました。DBの追加カラムを確認してください。", false);
        return;
    }
    profile = data;
    if (!saved && profile?.youtube_handle) youtubeHostHandle.value = profile.youtube_handle;

    const identity = await fetchMyYoutubeIdentity();
    if (identity.state === "reauth") {
        showYoutubeIdentityStatus("YouTubeチャンネルの確認にはGoogleの再認証が必要です。", true);
        return;
    }
    if (identity.state !== "ok") {
        showYoutubeIdentityStatus(identity.state === "ambiguous"
            ? "YouTubeチャンネルを一意に確認できません。自動更新は行いません。"
            : "YouTubeチャンネル情報を取得できませんでした。自動更新は行いません。", false);
        return;
    }
    if (profile?.youtube_channel_id && profile.youtube_channel_id !== identity.channelId) {
        showYoutubeIdentityStatus("登録済みのYouTubeチャンネルと異なります。自動更新を停止しました。", false);
        return;
    }
    const { error: writeError } = await supabaseClient.from("host_youtube_preferences")
        .upsert({ user_id: youtubeHandleOwnerId, youtube_channel_id: identity.channelId,
            youtube_handle: identity.handle }, { onConflict: "user_id" });
    if (writeError) {
        showYoutubeIdentityStatus("YouTube情報を保存できませんでした。", false);
        console.warn("YouTube情報の同期に失敗", writeError);
        return;
    }
    youtubeHandleVerified = true;
    youtubeVerifiedChannelId = identity.channelId;
    youtubeHostHandle.value = identity.handle;
    saveYoutubeHandleLocally();
    showYoutubeIdentityStatus("YouTube本人確認済み（チャンネルID照合）。ハンドル変更は次回の確認時に自動反映されます。", false);

    // Manual changes are allowed as drafts, but never overwrite a verified identity.
    youtubeHostHandle.addEventListener("input", () => {
        youtubeHandleVerified = false;
        showYoutubeIdentityStatus("手入力のハンドルは本人確認されていません。DBへは自動保存しません。", false);
    });
}

function restoreHomeModeAfterReload() {
    showTournamentMode("normal");
}

function openTournamentMode(mode) {
    showTournamentMode("normal");
}


function showTournamentMode(mode) {
    tournamentModeSelection?.classList.add("hidden");
    normalTournamentMode?.classList.remove("hidden");
    youtubeTournamentMode?.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}


function showHome() {
    document.getElementById("publicWatchScreen")?.classList.add("hidden");
    stopPublicWatchRefresh();
    stopYoutubeChatMonitor();

    homeScreen
        .classList
        .remove(
            "hidden"
        );

    showTournamentMode("normal");


    tournamentScreen
        .classList
        .add(
            "hidden"
        );


    /*
       トップ画面を開くたびに
       終了済み大会を非表示へ戻す
    */

    archivedTournamentList
        .classList
        .add(
            "hidden"
        );


    showArchivedTournamentsButton
        .textContent =
            "終了した大会を表示";

}


function showTournament() {
    document.getElementById("publicWatchScreen")?.classList.add("hidden");
    stopPublicWatchRefresh();
    document.getElementById("youtubeCreateScreen")?.classList.add("hidden");

    homeScreen
        .classList
        .add(
            "hidden"
        );


    tournamentScreen
        .classList
        .remove(
            "hidden"
        );


    window.scrollTo(
        {
            top:
                0,

            behavior:
                "smooth"
        }
    );

}


/* ==========================================================
   ブラウザ履歴（戻る・進む）
========================================================== */

async function handleBrowserHistoryNavigation() {
    const watchToken = new URLSearchParams(window.location.search).get("watch");
    if (watchToken) { await openPublicWatch(watchToken); return; }
    document.getElementById("publicWatchScreen")?.classList.add("hidden");
    stopPublicWatchRefresh();
    const accessToken = getTournamentAccessTokenFromURL();

    try {
        if (accessToken) {
            /* 進む：履歴に残っている大会ページを再表示。ここでは履歴を追加しない。 */
            await openTournamentByAccessToken(accessToken, { updateHistory: false });
            return;
        }

        /* 戻る：TOPへ。ここでも新しい履歴は追加しない。 */
        clearTimeout(participantOrderSaveTimer);
        participantOrderSaveTimer = null;
        draggedParticipantId = null;
        draggedParticipantElement = null;
        participantOrderSaving = false;
        document.body.classList.remove("participant-drag-active");

        await unsubscribeRealtime();

        currentTournament = null;
        currentParticipants = [];
        currentMatches = [];
        currentParticipant = null;
        isHost = false;

        showHome();
        renderYoutubeCreatePage();

        const mode = window.history.state?.mode;
        if (mode === "normal" || mode === "youtube") {
            showTournamentMode(mode);
        }

        await loadMyTournaments();
    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");
    }
}


/* ==========================================================
   URLから大会コード取得
========================================================== */

function getTournamentAccessTokenFromURL() {

    const params = new URLSearchParams(window.location.search);
    const token = params.get("t");

    return token ? token.trim() : null;
}


/* ==========================================================
   URLへ大会コード設定
========================================================== */

function setTournamentURL(
    accessToken
) {

    const url =
        new URL(
            window.location.href
        );


    url.searchParams.set(
        "t",
        accessToken
    );
    url.searchParams.delete("page");


    const nextUrl = url.pathname + url.search + url.hash;
    const currentUrl = window.location.pathname + window.location.search + window.location.hash;

    if (nextUrl !== currentUrl) {
        window.history.pushState(
            { screen: "tournament", accessToken },
            "",
            nextUrl
        );
    }

}


/* ==========================================================
   URLから大会コード削除
========================================================== */

function clearTournamentURL() {

    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "t"
    );
    url.searchParams.delete("page");


    window.history
        .pushState(
            {},
            "",
            url.pathname
        );

}


/* ==========================================================
   確認ダイアログ
========================================================== */

function showConfirmDialog(
    title,
    message,
    confirmText = "実行する",
    type = "danger"
) {

    return new Promise(
        resolve => {

            dialogResolve =
                resolve;


            dialogTitle.textContent =
                title;


            dialogMessage.textContent =
                message;


            dialogConfirm.textContent =
                confirmText;


            /*
               前回表示時の色を完全に削除
            */

            dialogOverlay
                .classList
                .remove(
                    "dialog-success",
                    "dialog-danger"
                );


            dialogConfirm
                .classList
                .remove(
                    "button-danger",
                    "button-success"
                );


            /*
               勝利・大会開始・解除など
            */

            if (
                type ===
                "success"
            ) {

                dialogOverlay
                    .classList
                    .add(
                        "dialog-success"
                    );


                dialogConfirm
                    .classList
                    .add(
                        "button-success"
                    );

            }

            /*
               BAN・リセット・Undoなど
            */

            else {

                dialogOverlay
                    .classList
                    .add(
                        "dialog-danger"
                    );


                dialogConfirm
                    .classList
                    .add(
                        "button-danger"
                    );

            }


            dialogOverlay
                .classList
                .remove(
                    "hidden"
                );

        }
    );

}


/* ==========================================================
   ダイアログを閉じる
========================================================== */

function closeDialog(
    result
) {

    if (
        dialogOverlay
            .classList
            .contains(
                "hidden"
            )
    ) {

        return;

    }


    dialogOverlay
        .classList
        .add(
            "hidden"
        );


    if (
        dialogResolve
    ) {

        const resolve =
            dialogResolve;


        dialogResolve =
            null;


        resolve(
            result
        );

    }

}


/* ==========================================================
   参加者取得
========================================================== */

function getParticipant(
    id
) {

    if (
        !id
    ) {

        return null;

    }


    return (
        currentParticipants.find(
            participant =>

                participant.id ===
                id
        )
        ||
        null
    );

}


/* ==========================================================
   ラウンドごとに試合をまとめる
========================================================== */

function groupMatchesByRound() {

    const rounds =
        {};


    for (
        const match
        of currentMatches
    ) {

        if (
            !rounds[
                match.round_number
            ]
        ) {

            rounds[
                match.round_number
            ] =
                [];

        }


        rounds[
            match.round_number
        ].push(
            match
        );

    }


    return rounds;

}


/* ==========================================================
   ラウンド名
========================================================== */

function getRoundTitle(
    roundNumber,
    maxRound
) {

    if (
        roundNumber ===
        maxRound
    ) {

        return "FINAL";

    }


    if (
        roundNumber ===
        maxRound - 1
    ) {

        return "SEMIFINAL";

    }


    return `ROUND ${roundNumber}`;

}


/* ==========================================================
   参加者ステータス
========================================================== */

function getParticipantStatus(
    status
) {

    if (
        status ===
        "suspended"
    ) {

        return {
            text:
                "一時ブロック",

            className:
                "suspended"
        };

    }


    if (
        status ===
        "banned"
    ) {

        return {
            text:
                "BAN",

            className:
                "banned"
        };

    }


    return {
        text:
            "参加中",

        className:
            "active"
    };

}


/* ==========================================================
   操作成功メッセージ
========================================================== */

function getParticipantActionSuccessMessage(
    status
) {

    if (
        status ===
        "suspended"
    ) {

        return "参加者を一時ブロックしました。";

    }


    if (
        status ===
        "banned"
    ) {

        return "参加者をBANしました。";

    }


    return "ブロックを解除しました。";

}

/* ==========================================================
   エラー翻訳
========================================================== */

function translateError(
    error
) {

    const rawMessage =
        error?.message
        ||
        String(
            error
        )
        ||
        "Unknown error";


    const message =
        rawMessage
            .toLowerCase();


    /* ----------------------------------------------------------
       認証
    ---------------------------------------------------------- */

    if (
        message.includes(
            "authentication required"
        )
    ) {

        return "認証に失敗しました。ページを再読み込みしてください。";

    }


    /* ----------------------------------------------------------
       大会作成
    ---------------------------------------------------------- */

    if (
        message.includes(
            "tournament name is required"
        )
    ) {

        return "大会名を入力してください。";

    }


    if (
        message.includes(
            "tournament name is too long"
        )
    ) {

        return "大会名が長すぎます。";

    }


    /* ----------------------------------------------------------
       参加
    ---------------------------------------------------------- */

    if (
        message.includes(
            "display name is required"
        )
    ) {

        return "参加者名を入力してください。";

    }


    if (
        message.includes(
            "display name is too long"
        )
    ) {

        return "参加者名は30文字以内で入力してください。";

    }


    if (
        message.includes(
            "tournament not found or not accepting participants"
        )
    ) {

        return "大会が見つからないか、すでに参加受付を終了しています。";

    }


    if (
        message.includes(
            "tournament not found"
        )
    ) {

        return "大会が見つかりませんでした。";

    }


    if (
        message.includes(
            "already joined"
        )
    ) {

        return "このブラウザではすでに大会へ参加しています。";

    }


    /* ----------------------------------------------------------
       主催者権限
    ---------------------------------------------------------- */

    if (
        message.includes(
            "only the tournament host can perform this action"
        )
        ||
        message.includes(
            "only the tournament host can reorder participants"
        )
    ) {

        return "この操作を行う権限がありません。";

    }


    /* ----------------------------------------------------------
       並び替え
    ---------------------------------------------------------- */

    if (
        message.includes(
            "participants can only be reordered before the tournament starts"
        )
    ) {

        return "参加者の並び替えは大会開始前のみ行えます。";

    }


    if (
        message.includes(
            "participant list does not match tournament participants"
        )
    ) {

        return "参加者情報が更新されました。最新の参加者一覧を読み込み直してください。";

    }


    if (
        message.includes(
            "duplicate participant detected"
        )
    ) {

        return "参加者の並び順に重複があります。";

    }


    if (
        message.includes(
            "invalid participant detected"
        )
    ) {

        return "参加者の並び順に無効なデータがあります。";

    }


    /* ----------------------------------------------------------
       ブロック
    ---------------------------------------------------------- */

    if (
        message.includes(
            "you are temporarily blocked"
        )
    ) {

        return "現在、一時ブロックされているため勝利を登録できません。";

    }


    if (
        message.includes(
            "you are blocked"
        )
        ||
        message.includes(
            "blocked participant cannot advance"
        )
    ) {

        return "この大会への参加がブロックされています。";

    }


    /* ----------------------------------------------------------
       参加者
    ---------------------------------------------------------- */

    if (
        message.includes(
            "you are not a participant"
        )
    ) {

        return "あなたはこの大会の参加者ではありません。";

    }


    if (
        message.includes(
            "participant not found"
        )
    ) {

        return "参加者が見つかりませんでした。";

    }


    if (
        message.includes(
            "invalid participant status"
        )
    ) {

        return "参加者の状態が正しくありません。";

    }


    /* ----------------------------------------------------------
       試合
    ---------------------------------------------------------- */

    if (
        message.includes(
            "you are not a player in this match"
        )
        ||
        message.includes(
            "winner is not a player in this match"
        )
    ) {

        return "指定された参加者はこの試合の選手ではありません。";

    }


    if (
        message.includes(
            "match is already finished"
        )
    ) {

        return "この試合はすでに終了しています。";

    }


    if (
        message.includes(
            "match is not active"
        )
    ) {

        return "この試合は現在進行中ではありません。";

    }


    if (
        message.includes(
            "match is not ready"
        )
    ) {

        return "対戦相手がまだ決まっていません。";

    }


    if (
        message.includes(
            "match not found"
        )
    ) {

        return "試合データが見つかりませんでした。";

    }


    /* ----------------------------------------------------------
       大会開始
    ---------------------------------------------------------- */

    if (
        message.includes(
            "at least"
        )
        &&
        message.includes(
            "participant"
        )
    ) {

        return "大会を開始するには2人以上の参加者が必要です。";

    }


    if (
        message.includes(
            "not enough"
        )
        &&
        message.includes(
            "participant"
        )
    ) {

        return "大会を開始するには2人以上の参加者が必要です。";

    }


    if (
        message.includes(
            "already started"
        )
    ) {

        return "この大会はすでに開始されています。";

    }


    /* ----------------------------------------------------------
       Undo
    ---------------------------------------------------------- */

    if (
        message.includes(
            "no victory"
        )
        ||
        message.includes(
            "nothing to undo"
        )
    ) {

        return "取り消せる勝利記録がありません。";

    }


    /* ----------------------------------------------------------
       その他
    ---------------------------------------------------------- */

    console.error(
        "Supabase error:",
        rawMessage
    );


    return (
        "処理中にエラーが発生しました。"
        +
        "もう一度お試しください。"
    );

}


/* ==========================================================
   メッセージ
========================================================== */

let messageTimer =
    null;


function showMessage(
    text,
    type = "info",
    requireClick = false
) {

    clearTimeout(
        messageTimer
    );


    /*
       前回のフェードアウト状態を解除
    */

    messageElement
        .classList
        .remove(
            "toast-hiding"
        );


    messageElement
        .textContent =
        text;


    messageElement
        .className =
        `message ${type}`;


    /*
       一度非表示状態から開始
    */

    messageElement
        .classList
        .add(
            "toast-preparing"
        );


    messageElement
        .classList
        .remove(
            "hidden"
        );


    /*
       次の描画タイミングで
       上からフェードイン
    */

    requestAnimationFrame(
        () => {

            requestAnimationFrame(
                () => {

                    messageElement
                        .classList
                        .remove(
                            "toast-preparing"
                        );

                }
            );

        }
    );


    /*
       requireClick=true の通知は自動では消さず、
       ユーザーが通知をクリックした時だけ閉じる。
    */

    messageElement.onclick = null;
    messageElement.classList.remove("toast-click-to-close");

    if (requireClick) {
        messageElement.classList.add("toast-click-to-close");
        messageElement.title = "クリックして閉じる";

        messageElement.onclick = () => {
            clearTimeout(messageTimer);
            messageElement.classList.add("toast-hiding");

            setTimeout(() => {
                messageElement.classList.add("hidden");
                messageElement.classList.remove("toast-hiding", "toast-click-to-close");
                messageElement.onclick = null;
                messageElement.title = "";
            }, 300);
        };

        return;
    }

    messageElement.title = "";

    /*
       通常の通知は3秒後にフェードアウト開始
    */

    messageTimer =
        setTimeout(
            () => {

                messageElement
                    .classList
                    .add(
                        "toast-hiding"
                    );

                setTimeout(
                    () => {

                        messageElement
                            .classList
                            .add(
                                "hidden"
                            );

                        messageElement
                            .classList
                            .remove(
                                "toast-hiding"
                            );

                    },
                    300
                );

            },
            3000
        );

}


/* ==========================================================
   ボタン Loading
========================================================== */

function setButtonLoading(
    button,
    loading,
    loadingText = "処理中..."
) {

    if (
        !button
    ) {

        return;

    }


    if (
        loading
    ) {

        if (
            !button.dataset
                .originalText
        ) {

            button.dataset
                .originalText =
                button.textContent;

        }


        button.disabled =
            true;


        button.textContent =
            loadingText;

    } else {

        if (
            button.dataset
                .originalText
        ) {

            button.textContent =
                button.dataset
                    .originalText;


            delete button.dataset
                .originalText;

        }


        button.disabled =
            false;

    }

}


/* ==========================================================
   全体 Loading
========================================================== */

function setGlobalLoading(
    loading
) {

    createTournamentButton.disabled =
        loading;


    joinTournamentButton.disabled =
        loading;

}


/* ==========================================================
   HTMLエスケープ
========================================================== */

function escapeHTML(
    value
) {

    return String(
        value ?? ""
    )

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}




/* ==========================================================
   ページ離脱時の後処理
========================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        clearTimeout(
            realtimeRefreshTimer
        );


        clearTimeout(
            participantOrderSaveTimer
        );

    }
);


/* ==========================================================
   Pointer操作の安全対策
========================================================== */

window.addEventListener(
    "blur",
    () => {

        /*
           PCでドラッグ中にウィンドウからフォーカスが
           外れた場合、ドラッグ状態だけ残ることを防ぎます。
        */

        if (
            draggedParticipantElement
        ) {

            draggedParticipantElement
                .classList
                .remove(
                    "participant-dragging"
                );


            draggedParticipantElement =
                null;


            draggedParticipantId =
                null;


            hostParticipantList
                .classList
                .remove(
                    "participant-list-reordering"
                );


            document.body
                .classList
                .remove(
                    "participant-drag-active"
                );

        }

    }
);

/* ==========================================================
   参加人数から自動生成するトーナメント表 UI
   ※ 一括追加は host_add_participants_bulk RPC と接続済み
========================================================== */
let bracketSetupAssignments = [];
let bracketSetupConfirmed = false;
let bracketSetupDraggedParticipantId = null;
let bracketSetupDragGhost = null;
let bracketSetupDragOffsetX = 0;
let bracketSetupDragOffsetY = 0;
let bracketSetupKnownParticipantKey = "";
let bracketSetupParticipantPoolVisible = true;
let bracketSetupParticipantPoolHeight = 132;

function toggleBracketSetupParticipantPool() {
    bracketSetupParticipantPoolVisible = !bracketSetupParticipantPoolVisible;
    renderBracketSetupPrototype();
}

function initializeBracketSetupPrototype() {
    const manualBulkButton = document.getElementById("bracketManualBulkButton");
    const randomButton = document.getElementById("bracketRandomButton");
    const confirmButton = document.getElementById("bracketConfirmButton");
    const previewFullscreenButton = document.getElementById("previewFullscreenButton");
    const pool = document.getElementById("bracketSetupParticipantPool");
    const canvas = document.getElementById("bracketSetupCanvas");
    const bulkTextarea = document.getElementById("bulkParticipantTextarea");
    const bulkButton = document.getElementById("bulkParticipantAddButton");
    const bulkToggleButton = document.getElementById("bulkParticipantToggleButton");
    if (!randomButton || randomButton.dataset.ready === "1") return;
    randomButton.dataset.ready = "1";

    manualBulkButton?.addEventListener("click", openManualBulkPlacementWindow);
    randomButton.addEventListener("click", randomizeBracketSetup);
    confirmButton.addEventListener("click", confirmBracketSetup);
    pool?.addEventListener("pointerdown", beginBracketSetupDrag);
    pool?.addEventListener("click", (event) => {
        if (event.target.closest("[data-bracket-pool-toggle]")) {
            toggleBracketSetupParticipantPool();
        }
    });
    pool?.addEventListener("submit", handleBracketPoolParticipantSearch);
    pool?.addEventListener("pointerdown", beginBracketPoolResize);
    canvas?.addEventListener("pointerdown", beginBracketSetupDrag);
    window.addEventListener("pointermove", moveBracketSetupDrag, { passive: false });
    window.addEventListener("pointerup", finishBracketSetupDrag);
    window.addEventListener("pointercancel", cancelBracketSetupDrag);

    bulkTextarea?.addEventListener("input", updateBulkParticipantPreview);
    bulkButton?.addEventListener("click", addBulkParticipants);
    bulkToggleButton?.addEventListener("click", toggleBulkParticipantBox);
    applyBulkParticipantVisibility();
}

function nextPowerOfTwoForSetup(n) {
    if (n <= 1) return n;
    let p = 1;
    while (p < n) p *= 2;
    return p;
}

function getBracketSetupUsableParticipants() {
    return currentParticipants.filter((p) => p.status !== "banned");
}

/*
   シード（1回戦免除）を1回戦全体へ均等に分散する。
   左→右型: 8 MATCHなら 1, 8, 4, 5, 2, 7 ... の順。
   左右→中央型: 16 MATCHなら 1, 16, 8, 9, 4, 12 ... の順。
*/
function getSeedMatchPriority(pairCount, centered) {
    if (pairCount <= 0) return [];

    const result = [];
    const add = (matchNumber) => {
        const n = Math.round(matchNumber);
        if (n >= 1 && n <= pairCount && !result.includes(n)) result.push(n);
    };

    add(1);
    if (pairCount > 1) add(pairCount);
    if (pairCount > 2) {
        add(pairCount / 2);
        add(pairCount / 2 + 1);
    }

    if (centered) {
        // 32枠（16 MATCH）では 1,16,8,9,4,12 ... を優先。
        for (let divisor = 4; divisor <= pairCount; divisor *= 2) {
            const step = pairCount / divisor;
            if (step < 1) break;
            for (let k = 1; k < divisor; k += 2) add(k * step);
        }
    } else {
        // 左→右型は中央4枠の次に外側から左右交互で追加する。
        let left = 2;
        let right = pairCount - 1;
        while (result.length < pairCount) {
            add(left++);
            add(right--);
            if (left > right + 1) break;
        }
    }

    // 上の優先規則で未登録のMATCHがあれば、既存シードから最も離れた位置を順に補う。
    while (result.length < pairCount) {
        let best = null;
        let bestDistance = -1;
        for (let n = 1; n <= pairCount; n++) {
            if (result.includes(n)) continue;
            const distance = Math.min(...result.map((used) => Math.abs(used - n)));
            if (distance > bestDistance) {
                bestDistance = distance;
                best = n;
            }
        }
        add(best);
    }
    return result;
}

function buildSeedDistributedAssignments(participantIds, randomizePlayers = false) {
    const ids = [...participantIds];
    if (randomizePlayers) {
        for (let i = ids.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ids[i], ids[j]] = [ids[j], ids[i]];
        }
    }

    const slotCount = ids.length >= 2 ? nextPowerOfTwoForSetup(ids.length) : ids.length;
    const assignments = Array(slotCount).fill(null);
    if (slotCount < 2) {
        if (ids[0]) assignments[0] = ids[0];
        return assignments;
    }

    const pairCount = slotCount / 2;
    const seedCount = slotCount - ids.length;
    const centered = ids.length >= 16;
    const seedMatches = new Set(getSeedMatchPriority(pairCount, centered).slice(0, seedCount));
    let playerIndex = 0;

    for (let pair = 0; pair < pairCount; pair++) {
        const base = pair * 2;
        if (seedMatches.has(pair + 1)) {
            // 免除枠の上下も固定化せず、ランダム配置時だけ左右（上下）を散らす。
            const playerSide = randomizePlayers && Math.random() < 0.5 ? 1 : 0;
            assignments[base + playerSide] = ids[playerIndex++] || null;
        } else {
            assignments[base] = ids[playerIndex++] || null;
            assignments[base + 1] = ids[playerIndex++] || null;
        }
    }
    return assignments;
}

function syncBracketSetupState() {
    initializeBracketSetupPrototype();
    const usable = getBracketSetupUsableParticipants();
    const participantKey = usable.map((p) => p.id).sort().join("|");
    const slotCount = usable.length >= 2 ? nextPowerOfTwoForSetup(usable.length) : usable.length;

    if (participantKey !== bracketSetupKnownParticipantKey || bracketSetupAssignments.length !== slotCount) {
        const validIds = new Set(usable.map((p) => p.id));
        const previous = bracketSetupAssignments.filter((id) => id && validIds.has(id));
        const used = new Set(previous);
        const missing = usable.map((p) => p.id).filter((id) => !used.has(id));
        bracketSetupAssignments = buildSeedDistributedAssignments(
            [...previous, ...missing].slice(0, slotCount),
            false
        );
        bracketSetupKnownParticipantKey = participantKey;
        bracketSetupConfirmed = false;
    }
}

function hydrateBracketSetupFromSavedSlots() {
    if (!currentBracketSlots.length) return;
    const ordered = [...currentBracketSlots].sort((a, b) => a.card_order - b.card_order);
    const saved = [];
    ordered.forEach(slot => {
        saved.push(slot.player1_id || null, slot.player2_id || null);
    });
    if (saved.length >= 2) {
        bracketSetupAssignments = saved;
        bracketSetupKnownParticipantKey = getBracketSetupUsableParticipants().map(p => p.id).sort().join("|");
    }
}

function handleBracketPoolParticipantSearch(event) {
    const form = event.target.closest("[data-bracket-pool-search]");
    if (!form) return;
    event.preventDefault();

    const input = form.querySelector("[data-bracket-pool-search-input]");
    const name = (input?.value || "").trim();
    if (!name) {
        showMessage("検索する参加者名を入力してください。", "error");
        return;
    }

    const participant = getBracketSetupUsableParticipants()
        .find((p) => (p.display_name || "").trim() === name);

    if (!participant) {
        showMessage(`「${name}」と完全一致する参加者はいません。`, "error");
        return;
    }

    if (!bracketSetupParticipantPoolVisible) {
        bracketSetupParticipantPoolVisible = true;
        renderBracketSetupPrototype();
    }

    const item = document.querySelector(
        `#bracketSetupParticipantPool [data-setup-participant-id="${CSS.escape(participant.id)}"]`
    );
    if (!item) return;

    document.querySelectorAll("#bracketSetupParticipantPool .bracket-setup-player.search-highlight")
        .forEach((el) => el.classList.remove("search-highlight"));

    item.classList.add("search-highlight");
    item.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    window.setTimeout(() => item.classList.remove("search-highlight"), 2200);
}

function beginBracketPoolResize(event) {
    const handle = event.target.closest("[data-bracket-pool-resize]");
    if (!handle || event.button !== 0) return;

    const list = document.querySelector("#bracketSetupParticipantPool .bracket-setup-pool-list");
    if (!list || list.classList.contains("hidden")) return;

    event.preventDefault();
    event.stopPropagation();

    const startY = event.clientY;
    const startHeight = list.getBoundingClientRect().height;
    const minHeight = 84;
    const maxHeight = Math.max(220, Math.min(720, window.innerHeight * 0.72));

    const move = (moveEvent) => {
        bracketSetupParticipantPoolHeight = Math.round(
            Math.max(minHeight, Math.min(maxHeight, startHeight + moveEvent.clientY - startY))
        );
        list.style.height = `${bracketSetupParticipantPoolHeight}px`;
        list.style.maxHeight = "none";
    };

    const end = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
        document.body.classList.remove("is-resizing-participant-pool");
    };

    document.body.classList.add("is-resizing-participant-pool");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
}


function placeLiveParticipantSearchForCurrentMode() {
    const form = document.getElementById("bracketLiveParticipantSearchForm");
    const prototype = document.getElementById("bracketSetupPrototype");
    const controls = prototype?.querySelector(".bracket-setup-controls");
    const canvas = document.getElementById("bracketSetupCanvas");

    if (!form || !prototype || !controls || !canvas) return;

    let marker = document.getElementById("bracketLiveParticipantSearchMarker");

    if (!marker) {
        marker = document.createElement("span");
        marker.id = "bracketLiveParticipantSearchMarker";
        marker.hidden = true;
        controls.insertBefore(marker, form);
    }

    if (isBracketFullscreenMode()) {
        if (form.parentElement !== prototype) {
            prototype.insertBefore(form, canvas);
        }
    } else if (form.parentElement !== controls) {
        marker.insertAdjacentElement("afterend", form);
    }
}


function renderBracketSetupPrototype() {
    const section = document.getElementById("bracketSetupPrototype");
    if (!section || !currentTournament) return;
    const show = true; // 参加者も開始前の暫定トーナメントを閲覧できる
    section.classList.toggle("hidden", !show);
    if (!show) return;
    document.body.classList.toggle("bracket-fullscreen-mode", isBracketFullscreenMode());
    updateBracketViewerHeader();

    const isWaiting = isHost && currentTournament.status === "waiting" && !currentTournament.archived_at;
    section.classList.toggle("bracket-live-mode", !isWaiting);
    section.classList.toggle("bracket-edit-mode", isWaiting);
    const bracketSetupPrimaryActions = document.querySelector(".bracket-setup-primary-actions");
    if (bracketSetupPrimaryActions) {
        bracketSetupPrimaryActions.classList.toggle("hidden", !isWaiting);
    }

    const previewFullscreenButton = document.getElementById("previewFullscreenButton");
    if (previewFullscreenButton) {
        previewFullscreenButton.classList.toggle("hidden", isWaiting && !bracketSetupConfirmed);
    }

    placeLiveParticipantSearchForCurrentMode();

    const bracketLiveParticipantSearchForm =
        document.getElementById("bracketLiveParticipantSearchForm");

    if (bracketLiveParticipantSearchForm) {
        bracketLiveParticipantSearchForm.classList.toggle("hidden", isWaiting);
    }
    if (fullscreenBracketButton) fullscreenBracketButton.classList.toggle("hidden", Boolean(currentTournament.archived_at) || (isWaiting && !bracketSetupConfirmed));

    const bulkBox = section.querySelector(".bulk-participant-box");
    const summary = section.querySelector(".bracket-auto-summary");
    const controls = section.querySelector(".bracket-setup-controls");
    const note = section.querySelector(".bracket-setup-note");
    const poolWrap = document.getElementById("bracketSetupParticipantPool");
    [bulkBox, summary, controls, note, poolWrap].forEach(el => { if (el) el.classList.toggle("hidden", !isWaiting); });

    if (isWaiting) {
        applyBulkParticipantVisibility();
        if (!(isBracketFullscreenMode() && loadBracketSetupPreview())) syncBracketSetupState();
    } else {
        // 開始前の参加者には、保存済みの配置または現在の参加者から作る暫定配置を表示。
        // ここではDBに書き込まず、主催者用の編集操作も表示しない。
        if (currentTournament.status === "waiting" && !currentBracketSlots.length) {
            syncBracketSetupState();
        } else {
            hydrateBracketSetupFromSavedSlots();
        }
        bracketSetupConfirmed = true;
    }
    const usable = getBracketSetupUsableParticipants();
    const count = usable.length;
    const firstRoundMatches = count >= 2 ? Math.ceil(count / 2) : 0;
    const slotCount = count >= 2 ? nextPowerOfTwoForSetup(count) : count;
    const pool = document.getElementById("bracketSetupParticipantPool");
    const canvas = document.getElementById("bracketSetupCanvas");
    const playerCount = document.getElementById("bracketAutoPlayerCount");
    const matchCount = document.getElementById("bracketAutoMatchCount");
    const autoSlotCount = document.getElementById("bracketAutoSlotCount");
    if (!pool || !canvas) return;

    if (playerCount) {
        playerCount.textContent = `${count}人`;
        playerCount.closest(".bracket-auto-summary > div")?.classList.toggle("is-participant-limit", count >= 256);
    }
    if (matchCount) matchCount.textContent = `${firstRoundMatches} MATCH`;
    if (autoSlotCount) autoSlotCount.textContent = `${Math.max(0, slotCount - count)}枠`;

    const assignedIds = new Set(bracketSetupAssignments.filter(Boolean));
    pool.innerHTML = `<div class="bracket-setup-pool-head"><div class="bracket-setup-pool-title"><strong>参加者</strong><span class="count-badge">${count} PLAYERS</span></div><button type="button" class="button button-secondary bracket-pool-toggle-button" data-bracket-pool-toggle>${bracketSetupParticipantPoolVisible ? "非表示" : "表示"}</button></div><form class="bracket-pool-search-form ${bracketSetupParticipantPoolVisible ? "" : "hidden"}" data-bracket-pool-search><label for="bracketPoolParticipantSearchInput">参加者の検索</label><div class="bracket-pool-search-row"><input id="bracketPoolParticipantSearchInput" data-bracket-pool-search-input type="text" maxlength="30" placeholder="参加者名を完全一致で検索" autocomplete="off"><button class="button button-secondary" type="submit">検索</button></div></form><div class="bracket-setup-pool-list ${bracketSetupParticipantPoolVisible ? "" : "hidden"}" style="height:${bracketSetupParticipantPoolHeight}px;max-height:none">${usable.map((p) => `<div class="bracket-setup-player ${assignedIds.has(p.id) ? "is-assigned" : ""} ${p.status === "suspended" ? "is-suspended" : ""}" data-setup-participant-id="${escapeHTML(p.id)}">☰ ${escapeHTML(p.display_name)}${p.status === "suspended" ? "（一時ブロック）" : ""}</div>`).join("")}</div><div class="bracket-pool-resize-handle ${bracketSetupParticipantPoolVisible ? "" : "hidden"}" data-bracket-pool-resize title="ドラッグして参加者一覧の高さを変更" aria-label="参加者一覧の高さを変更"><span></span></div>`;
    canvas.innerHTML = createBracketSetupHTML();
    if (!isWaiting) {
        applyLiveResultsToGeneratedBracket(canvas);
    } else {
    }
    // 本人の枠は、初期配置・勝ち上がり後のどちらでも必ず水色にする。
    canvas.querySelectorAll("[data-setup-participant-id]").forEach((slot) => {
        slot.classList.toggle("is-my-slot", isCurrentUsersParticipant(slot.dataset.setupParticipantId));
    });
    requestAnimationFrame(() => {
        layoutBracketSetupMatches();
        drawBracketSetupConnections();
        setupFullscreenTopScrollbar(canvas);
    });
}


function setupFullscreenTopScrollbar(canvas) {
    const existing = document.getElementById("fullscreenBracketTopScrollbar");
    if (!isBracketFullscreenMode()) {
        existing?.remove();
        return;
    }

    let topBar = existing;
    if (!topBar) {
        topBar = document.createElement("div");
        topBar.id = "fullscreenBracketTopScrollbar";
        topBar.className = "fullscreen-bracket-top-scrollbar";
        topBar.innerHTML = '<div class="fullscreen-bracket-top-scrollbar-inner"></div>';
        canvas.parentNode.insertBefore(topBar, canvas);

        let syncing = false;
        topBar.addEventListener("scroll", () => {
            if (syncing) return;
            syncing = true;
            canvas.scrollLeft = topBar.scrollLeft;
            syncing = false;
        });
        canvas.addEventListener("scroll", () => {
            if (syncing) return;
            syncing = true;
            topBar.scrollLeft = canvas.scrollLeft;
            syncing = false;
        });
    }

    const inner = topBar.firstElementChild;
    if (inner) inner.style.width = `${canvas.scrollWidth}px`;
    topBar.scrollLeft = canvas.scrollLeft;
}

function isCurrentUsersParticipant(participantId) {
    if (!participantId || !currentUser) return false;
    const participant = getParticipant(participantId);
    return Boolean(participant && participant.user_id === currentUser.id);
}

function updateBracketViewerHeader() {
    const title = document.getElementById("bracketPanelTitle");
    const subtitle = document.getElementById("bracketPanelSubtitle");
    const viewerName = document.getElementById("bracketViewerName");
    if (!title || !subtitle || !viewerName) return;

    if (!isHost && currentParticipant) {
        title.textContent = "トーナメント表";
        subtitle.textContent = "TOURNAMENT BRACKET";
        viewerName.textContent = currentParticipant.display_name || "";
        viewerName.classList.remove("hidden");
    } else {
        title.textContent = currentTournament.name || "トーナメント表";
        subtitle.textContent = "AUTO BRACKET SETUP";
        viewerName.textContent = "";
        viewerName.classList.add("hidden");
    }
}

function liveActionButton(participantId, match) {
    if (!participantId || !match || match.status !== "active" || match.winner_id || currentTournament.archived_at) return "";
    const participant = getParticipant(participantId);
    if (!participant || participant.status === "banned") return "";
    if (isHost) {
        return `<button type="button" class="generated-win-button host" data-generated-host-win="1" data-match-id="${match.id}" data-winner-id="${participantId}">勝者にする</button>`;
    }
    const mine = isCurrentUsersParticipant(participantId);
    const blocked = currentParticipant && currentParticipant.status !== "active";
    if (mine && !blocked && !currentTournament.paused_at) {
        return `<button type="button" class="generated-win-button" data-generated-self-win="1" data-match-id="${match.id}">★ 勝利</button>`;
    }
    return "";
}

// 各参加者について、現在確定している最も新しいラウンドの勝利だけを戻せる。
// 戻す処理後に loadTournamentData() で再描画されるため、前のラウンドが自動的に対象となる。
// 各選手の最後の勝利だけを候補にし、後続試合が決着している場合は表示しない。
// 後続の勝利を取り消して未決着に戻すと、前のラウンドのボタンが再表示される。
function isParticipantsLatestFinishedMatch(participantId, match) {
    if (!participantId || !match || match.winner_id !== participantId || match.status !== "finished") return false;
    if (currentMatches.some(other =>
        other.id !== match.id &&
        other.winner_id === participantId &&
        other.status === "finished" &&
        (other.round_number > match.round_number ||
            (other.round_number === match.round_number && other.match_number > match.match_number))
    )) return false;

    // 対戦相手が勝ち上がった場合も含め、上位ラウンドが決着済みなら
    // 過去の勝利を取り消すことはできないためボタンを出さない。
    const maxRound = currentMatches.reduce((max, item) => Math.max(max, item.round_number), match.round_number);
    let number = match.match_number;
    for (let round = match.round_number + 1; round <= maxRound; round++) {
        number = Math.floor((number - 1) / 2) + 1;
        const nextMatch = currentMatches.find(item => item.round_number === round && item.match_number === number);
        if (nextMatch && nextMatch.winner_id && nextMatch.status === "finished") return false;
    }
    return true;
}

function generatedUndoButton(participantId, match) {
    if (!isParticipantsLatestFinishedMatch(participantId, match) || !currentUser || !currentTournament || currentTournament.archived_at) return "";
    if (!["active", "finished"].includes(currentTournament.status)) return "";
    const participant = getParticipant(participantId);
    if (!participant || participant.status === "banned") return "";
    if (!isHost && (participant.status !== "active" || participant.user_id !== currentUser.id)) return "";
    return `<button type="button" class="participant-undo-button" data-participant-undo="true" data-match-id="${escapeHTML(match.id)}">↶ 戻す</button>`;
}

function livePlayerSlot(participantId, winnerId, match) {
    const participant = participantId ? getParticipant(participantId) : null;
    if (!participant) return '<div class="future-slot">勝者待ち</div>';
    const won = winnerId && winnerId === participantId;
    const mineClass = isCurrentUsersParticipant(participantId) ? " is-my-slot" : "";
    return `<div class="future-slot live-player ${won ? "is-winner" : ""}${mineClass}"><span class="bracket-player-name ${getBracketNameFitClass(participant.display_name)}" data-full-name="${escapeHTML(participant.display_name)}">${escapeHTML(participant.display_name)}</span>${won ? `<b class="winner-badge">勝利</b>${generatedUndoButton(participantId, match)}` : liveActionButton(participantId, match)}</div>`;
}

async function handleGeneratedBracketAction(event) {
    const undoButton = event.target.closest("[data-participant-undo]");
    if (undoButton) {
        await handleParticipantUndo({ currentTarget: undoButton });
        return;
    }
    const button = event.target.closest("[data-generated-self-win],[data-generated-host-win]");
    if (!button || button.disabled) return;
    const matchId = button.dataset.matchId;
    const winnerId = button.dataset.winnerId;
    const isHostAction = button.hasAttribute("data-generated-host-win");
    const ok = await showConfirmDialog("勝利を登録", isHostAction ? "この選手を勝者として登録します。よろしいですか？" : "この試合の勝者として登録します。よろしいですか？", "勝利を登録", "success");
    if (!ok) return;
    try {
        button.disabled = true;
        const result = isHostAction
            ? await supabaseClient.rpc("host_set_match_winner", { p_match_id: matchId, p_winner_id: winnerId })
            : await supabaseClient.rpc("claim_victory", { p_match_id: matchId });
        if (result.error) throw result.error;
        await loadTournamentData();
        showMessage("勝利を登録しました。", "success");
    } catch (error) {
        console.error(error);
        showMessage(translateError(error), "error");
        await safeReloadTournamentData();
    }
}

function applyLiveResultsToGeneratedBracket(canvas) {
    if (!currentMatches.length) return;
    const rounds = [...new Set(currentMatches.map(m => Number(m.round_number)))].sort((a,b) => a-b);
    const maxRound = Math.max(...rounds);
    const firstRound = currentMatches.filter(m => Number(m.round_number) === 1).sort((a,b) => Number(a.match_number)-Number(b.match_number));
    const centered = getBracketSetupUsableParticipants().length >= 16;

    // 1回戦は保存済み配置を維持しつつ、勝者を強調する。
    canvas.querySelectorAll('.auto-match-first').forEach((el, visualIndex) => {
        let matchIndex = visualIndex;
        if (centered) {
            const leftCount = firstRound.length / 2;
            const inRight = el.closest('.bracket-half-right');
            if (inRight) {
                const rightMatches = [...canvas.querySelectorAll('.bracket-half-right .auto-match-first')];
                matchIndex = leftCount + rightMatches.indexOf(el);
            } else {
                const leftMatches = [...canvas.querySelectorAll('.bracket-half-left .auto-match-first')];
                matchIndex = leftMatches.indexOf(el);
            }
        }
        // BYEがある場合、DB側ではBYE試合が自動処理されるため、
        // firstRound配列の添字と画面上の1回戦MATCH位置が一致しないことがある。
        // 画面の2枠に入っている参加者IDから対応するDB試合を特定する。
        const visualParticipantIds = [...el.querySelectorAll('[data-setup-participant-id]')]
            .map(slot => slot.dataset.setupParticipantId)
            .filter(Boolean);

        let match = null;
        if (visualParticipantIds.length === 2) {
            const wanted = new Set(visualParticipantIds);
            match = firstRound.find(candidate => {
                const ids = [candidate.player1_id, candidate.player2_id].filter(Boolean);
                return ids.length === 2 && ids.every(id => wanted.has(id));
            }) || null;
        } else if (visualParticipantIds.length === 1) {
            // シード枠はDBで自動進出済み。1回戦用の勝利ボタンは表示しない。
            match = firstRound.find(candidate =>
                candidate.player1_id === visualParticipantIds[0] ||
                candidate.player2_id === visualParticipantIds[0]
            ) || null;
        }

        // BYEなしの従来配置との互換用フォールバック。
        if (!match && visualParticipantIds.length === 2) {
            match = firstRound[matchIndex] || null;
        }
        if (!match) return;
        el.querySelectorAll('[data-setup-participant-id]').forEach(slot => {
            const participantId = slot.dataset.setupParticipantId;
            if (match.winner_id && participantId === match.winner_id) {
                slot.classList.add('is-live-winner');
                if (!slot.querySelector('.winner-badge')) slot.insertAdjacentHTML('beforeend','<b class="winner-badge">勝利</b>');
                const undo = generatedUndoButton(participantId, match);
                if (undo) slot.insertAdjacentHTML('beforeend', undo);
            } else {
                const action = liveActionButton(participantId, match);
                if (action) slot.insertAdjacentHTML('beforeend', action);
            }
        });
    });

    // 2回戦以降。左右型ではDBの前半を左、後半を右へ対応させる。
    for (let round = 2; round <= maxRound; round++) {
        const matches = currentMatches.filter(m => Number(m.round_number) === round).sort((a,b) => Number(a.match_number)-Number(b.match_number));
        if (round === maxRound && centered) {
            const final = matches[0];
            const box = canvas.querySelector('.bracket-final-match');
            if (box && final) box.innerHTML = `${livePlayerSlot(final.player1_id, final.winner_id, final)}<span>VS</span>${livePlayerSlot(final.player2_id, final.winner_id, final)}`;
            const champ = canvas.querySelector('.bracket-champion-box');
            if (champ && final?.winner_id) {
                const p = getParticipant(final.winner_id);
                champ.textContent = p ? `優勝：${p.display_name}` : '優勝';
            }
            continue;
        }
        if (!centered) {
            // 左→右型は「配列の位置」ではなく、DBの round_number / match_number と
            // 画面上のMATCHを直接対応させる。BYEや自動進出があってもずれない。
            matches.forEach((m) => {
                const matchNumber = Number(m.match_number);
                const el = canvas.querySelector(
                    `.auto-bracket-standard .future-match[data-live-round="${round}"][data-live-match-number="${matchNumber}"]`
                );
                if (!el) return;
                el.innerHTML = `${livePlayerSlot(m.player1_id, m.winner_id, m)}${livePlayerSlot(m.player2_id, m.winner_id, m)}`;
            });
        } else {
            const half = matches.length / 2;
            const leftCol = canvas.querySelector(`.bracket-half-left .future-round-column.round-${round}`);
            const rightCol = canvas.querySelector(`.bracket-half-right .future-round-column.round-${round}`);
            const leftEls = leftCol ? [...leftCol.querySelectorAll('.auto-match')] : [];
            const rightEls = rightCol ? [...rightCol.querySelectorAll('.auto-match')] : [];
            leftEls.forEach((el,i) => { const m=matches[i]; if(m) el.innerHTML = `${livePlayerSlot(m.player1_id,m.winner_id,m)}${livePlayerSlot(m.player2_id,m.winner_id,m)}`; });
            rightEls.forEach((el,i) => { const m=matches[half+i]; if(m) el.innerHTML = `${livePlayerSlot(m.player1_id,m.winner_id,m)}${livePlayerSlot(m.player2_id,m.winner_id,m)}`; });
        }
    }

    if (!centered && currentTournament.status === 'finished') {
        const final = currentMatches.find(m => m.round_number === maxRound && m.match_number === 1);
        const winner = canvas.querySelector('.bracket-winner-box');
        if (winner && final?.winner_id) {
            const p = getParticipant(final.winner_id);
            winner.textContent = p ? `優勝：${p.display_name}` : 'WINNER';
        }
    }
}

function createBracketSetupHTML() {
    const count = getBracketSetupUsableParticipants().length;
    if (count < 2) {
        return `<div class="bracket-setup-empty">参加者が2人以上になると、ここにトーナメント表が自動生成されます。</div>`;
    }
    const centered = count >= 16;
    const rounds = Math.log2(bracketSetupAssignments.length);
    const mode = centered ? "左右から中央へ勝ち上がるトーナメント表" : "左から右へ勝ち上がるトーナメント表";
    return `<div class="bracket-setup-mode-label">${mode}</div>${centered ? createCenteredBracketHTML(rounds) : createStandardBracketHTML(rounds)}`;
}

function createStandardBracketHTML(rounds) {
    const columns = [];
    columns.push(createFirstRoundColumn(0, bracketSetupAssignments.length, "left"));
    for (let round = 2; round <= rounds; round++) {
        const matchCount = Math.pow(2, rounds - round);
        const label = matchCount === 1 ? "決勝" : matchCount === 2 ? "準決勝" : matchCount === 4 ? "準々決勝" : `${round}回戦`;
        columns.push(createFutureRoundColumn(round, matchCount, "left", label));
    }
    columns.push(`<div class="bracket-round-column bracket-winner-column"><div class="bracket-round-title">優勝</div><div class="bracket-winner-box">WINNER</div></div>`);
    return `<div class="auto-bracket auto-bracket-standard">${columns.join("")}</div>`;
}

function createCenteredBracketHTML(rounds) {
    const halfSlots = bracketSetupAssignments.length / 2;
    const sideRounds = rounds - 1;
    const left = [];
    const right = [];
    left.push(createFirstRoundColumn(0, halfSlots, "left", "LEFT 1回戦"));
    right.push(createFirstRoundColumn(halfSlots, halfSlots, "right", "RIGHT 1回戦"));
    for (let r = 2; r <= sideRounds; r++) {
        const matchCount = Math.pow(2, sideRounds - r);
        const label = matchCount === 1 ? "準決勝" : matchCount === 2 ? "準々決勝" : `${r}回戦`;
        left.push(createFutureRoundColumn(r, matchCount, "left", label));
        right.unshift(createFutureRoundColumn(r, matchCount, "right", label));
    }
    return `<div class="auto-bracket auto-bracket-centered"><div class="bracket-half bracket-half-left">${left.join("")}</div><div class="bracket-center-final"><div class="bracket-round-title bracket-final-title">決勝</div><div class="bracket-champion-box">優勝</div><div class="bracket-final-match"><div>LEFT WINNER</div><span>VS</span><div>RIGHT WINNER</div></div></div><div class="bracket-half bracket-half-right">${right.join("")}</div></div>`;
}

function createFirstRoundColumn(start, slotCount, side, title = "1回戦") {
    const pairs = [];
    for (let i = 0; i < slotCount; i += 2) {
        const absolute = start + i;
        // 32枠なら左右とも必ず16枠（8 MATCH）を描画する。
        // 空きペアも消さないことで、左右の行数・高さ・接続線を完全に対称に保つ。
        pairs.push(`<div class="auto-match auto-match-first ${side === "right" ? "mirror" : ""}" data-bracket-match-index="${pairs.length}">${createBracketSetupSlot(absolute)}${createBracketSetupSlot(absolute + 1)}</div>`);
    }
    return `<div class="bracket-round-column first-round-column" data-side="${side}"><div class="bracket-round-title">${title}</div><div class="bracket-round-matches">${pairs.join("")}</div></div>`;
}

function createFutureRoundColumn(round, matchCount, side, customLabel = null) {
    const matches = Array.from({ length: matchCount }, (_, i) => `<div class="auto-match future-match ${side === "right" ? "mirror" : ""}" data-bracket-match-index="${i}" data-live-round="${round}" data-live-match-number="${i + 1}"><div class="future-slot">勝者</div><div class="future-slot">勝者</div></div>`).join("");
    const label = customLabel || (round === 2 ? "2回戦" : `${round}回戦`);
    return `<div class="bracket-round-column future-round-column round-${round}" data-side="${side}"><div class="bracket-round-title">${label}</div><div class="bracket-round-matches">${matches}</div></div>`;
}

function getBulkParticipantStorageKey() {
    return currentTournament?.id ? `tournament:${currentTournament.id}:bulk-participants-visible` : null;
}

function applyBulkParticipantVisibility() {
    const body = document.getElementById("bulkParticipantBody");
    const button = document.getElementById("bulkParticipantToggleButton");
    const key = getBulkParticipantStorageKey();
    if (!body || !button || !key) return;
    const visible = localStorage.getItem(key) !== "hidden";
    body.classList.toggle("hidden", !visible);
    button.textContent = visible ? "非表示" : "表示";
    button.setAttribute("aria-expanded", visible ? "true" : "false");
}

function toggleBulkParticipantBox() {
    const body = document.getElementById("bulkParticipantBody");
    const key = getBulkParticipantStorageKey();
    if (!body || !key) return;
    localStorage.setItem(key, body.classList.contains("hidden") ? "shown" : "hidden");
    applyBulkParticipantVisibility();
}

/* 各ラウンドのMATCH中心を、前ラウンド2試合の中心点に厳密に合わせる。
   space-around に依存しないため、人数や画面幅が変わっても線が崩れない。 */
function layoutBracketSetupMatches(canvasElement = document.getElementById("bracketSetupCanvas")) {
    const bracket = canvasElement?.querySelector(".auto-bracket");
    if (!bracket) return;
    const ROW = 112;
    const layoutColumns = (columns) => {
        if (!columns.length) return;
        const first = [...columns[0].querySelectorAll(":scope > .bracket-round-matches > .auto-match")];
        if (!first.length) return;
        const height = first.length * ROW;
        columns.forEach(col => {
            const wrap = col.querySelector(":scope > .bracket-round-matches");
            if (wrap) wrap.style.height = `${height}px`;
        });
        let centers = first.map((_, i) => (i + 0.5) * ROW);
        columns.forEach((col, ci) => {
            const matches = [...col.querySelectorAll(":scope > .bracket-round-matches > .auto-match")];
            const useCenters = ci === 0 ? centers : matches.map((_, i) => {
                const a = centers[i * 2];
                const b = centers[i * 2 + 1];
                return b == null ? a : (a + b) / 2;
            });
            matches.forEach((match, i) => {
                match.style.position = "absolute";
                match.style.top = `${useCenters[i]}px`;
                match.style.transform = "translateY(-50%)";
                match.style.left = "0";
                match.style.right = "0";
            });
            centers = useCenters;
        });
    };
    if (bracket.classList.contains("auto-bracket-standard")) {
        const standardColumns = [...bracket.querySelectorAll(":scope > .bracket-round-column:not(.bracket-winner-column)")];
        layoutColumns(standardColumns);

        // 左→右型も、決勝と優勝を同じ高さに揃える。
        const finalMatch = standardColumns.at(-1)?.querySelector(".auto-match");
        const winnerColumn = bracket.querySelector(".bracket-winner-column");
        const winnerBox = bracket.querySelector(".bracket-winner-box");
        if (finalMatch && winnerColumn && winnerBox) {
            const finalRect = finalMatch.getBoundingClientRect();
            const columnRect = winnerColumn.getBoundingClientRect();
            const centerY = finalRect.top + finalRect.height / 2 - columnRect.top;
            winnerBox.style.position = "absolute";
            winnerBox.style.left = "0";
            winnerBox.style.right = "0";
            winnerBox.style.top = `${centerY}px`;
            winnerBox.style.transform = "translateY(-50%)";
            winnerBox.style.margin = "0";
        }
    } else {
        layoutColumns([...bracket.querySelectorAll(".bracket-half-left > .bracket-round-column")]);
        layoutColumns([...bracket.querySelectorAll(".bracket-half-right > .bracket-round-column")].reverse());

        // 決勝MATCHは左右の準決勝MATCHと完全に同じY座標へ固定する。
        const leftLast = bracket.querySelector(".bracket-half-left > .bracket-round-column:last-child .auto-match");
        const rightLast = bracket.querySelector(".bracket-half-right > .bracket-round-column:first-child .auto-match");
        const finalArea = bracket.querySelector(".bracket-center-final");
        const finalBox = bracket.querySelector(".bracket-final-match");
        if (leftLast && rightLast && finalArea && finalBox) {
            const bracketRect = bracket.getBoundingClientRect();
            const l = leftLast.getBoundingClientRect();
            const r = rightLast.getBoundingClientRect();
            const centerY = ((l.top + l.height / 2) + (r.top + r.height / 2)) / 2 - bracketRect.top;
            finalArea.style.height = `${Math.max(bracket.scrollHeight, centerY * 2)}px`;
            finalBox.style.top = `${centerY}px`;
        }
    }
}

function drawBracketSetupConnections(canvas = document.getElementById("bracketSetupCanvas")) {
    if (!canvas) return;
    const bracket = canvas.querySelector(".auto-bracket");
    if (!bracket) return;

    bracket.querySelectorAll(".bracket-connection-layer").forEach((el) => el.remove());
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "bracket-connection-layer");
    svg.setAttribute("width", String(bracket.scrollWidth));
    svg.setAttribute("height", String(bracket.scrollHeight));
    svg.setAttribute("viewBox", `0 0 ${bracket.scrollWidth} ${bracket.scrollHeight}`);
    bracket.prepend(svg);

    const base = bracket.getBoundingClientRect();
    const point = (el, side) => {
        const r = el.getBoundingClientRect();
        return {
            x: (side === "right" ? r.left : r.right) - base.left,
            y: r.top + r.height / 2 - base.top
        };
    };
    const addPath = (from, to, direction) => {
        const midX = (from.x + to.x) / 2;
        const d = `M ${from.x} ${from.y} H ${midX} V ${to.y} H ${to.x}`;
        const path = document.createElementNS(ns, "path");
        path.setAttribute("d", d);
        path.setAttribute("class", "bracket-connection-path");
        svg.appendChild(path);
    };

    const connectColumns = (columns, direction) => {
        for (let c = 0; c < columns.length - 1; c++) {
            const sources = [...columns[c].querySelectorAll(":scope > .bracket-round-matches > .auto-match")];
            const targets = [...columns[c + 1].querySelectorAll(":scope > .bracket-round-matches > .auto-match")];
            sources.forEach((source, i) => {
                const target = targets[Math.floor(i / 2)];
                if (!target) return;
                addPath(point(source, direction), point(target, direction === "right" ? "left" : "right"), direction);
            });
        }
    };

    if (bracket.classList.contains("auto-bracket-standard")) {
        const columns = [...bracket.querySelectorAll(":scope > .bracket-round-column:not(.bracket-winner-column)")];
        connectColumns(columns, "left");
        const lastMatches = columns.length ? [...columns[columns.length - 1].querySelectorAll(":scope > .bracket-round-matches > .auto-match")] : [];
        const winner = bracket.querySelector(".bracket-winner-box");
        if (lastMatches[0] && winner) {
            const from = point(lastMatches[0], "left");
            const to = point(winner, "right");
            const path = document.createElementNS(ns, "path");
            path.setAttribute("d", `M ${from.x} ${from.y} H ${to.x}`);
            path.setAttribute("class", "bracket-connection-path bracket-final-connection");
            svg.appendChild(path);
        }
    } else {
        const leftCols = [...bracket.querySelectorAll(".bracket-half-left > .bracket-round-column")];
        const rightColsVisual = [...bracket.querySelectorAll(".bracket-half-right > .bracket-round-column")];
        connectColumns(leftCols, "left");
        connectColumns([...rightColsVisual].reverse(), "right");
        const finalBox = bracket.querySelector(".bracket-final-match");
        const leftLast = leftCols.at(-1)?.querySelector(".auto-match");
        const rightLast = rightColsVisual[0]?.querySelector(".auto-match");
        const addStraightPath = (from, to) => {
            const path = document.createElementNS(ns, "path");
            path.setAttribute("d", `M ${from.x} ${from.y} H ${to.x}`);
            path.setAttribute("class", "bracket-connection-path bracket-final-connection");
            svg.appendChild(path);
        };
        // 準決勝→決勝は高さを揃えているので、折れ線にせず水平な直線だけで結ぶ。
        if (leftLast && finalBox) addStraightPath(point(leftLast, "left"), point(finalBox, "right"));
        if (rightLast && finalBox) addStraightPath(point(rightLast, "right"), point(finalBox, "left"));
    }
}

function getBracketNameFitClass(name) {
    const text = String(name || "");
    let length;
    try {
        length = [...new Intl.Segmenter("ja", { granularity: "grapheme" }).segment(text)].length;
    } catch (_) {
        length = Array.from(text).length;
    }
    if (length >= 24) return "name-fit-smaller";
    if (length >= 16) return "name-fit-small";
    return "";
}

function ensureBracketNameHoverTooltip() {
    let tooltip = document.getElementById("bracketNameHoverTooltip");
    if (tooltip) return tooltip;
    tooltip = document.createElement("div");
    tooltip.id = "bracketNameHoverTooltip";
    tooltip.className = "bracket-name-hover-tooltip";
    document.body.appendChild(tooltip);
    return tooltip;
}

if (!window.__bracketNameTooltipBound) {
    window.__bracketNameTooltipBound = true;
    document.addEventListener("pointerover", (event) => {
        const nameEl = event.target.closest?.(".auto-bracket .bracket-player-name[data-full-name]");
        if (!nameEl) return;
        const tooltip = ensureBracketNameHoverTooltip();
        tooltip.textContent = nameEl.dataset.fullName || nameEl.textContent || "";
        tooltip.style.display = "block";
    });
    document.addEventListener("pointermove", (event) => {
        const tooltip = document.getElementById("bracketNameHoverTooltip");
        if (!tooltip || tooltip.style.display !== "block") return;
        const gap = 14;
        let x = event.clientX + gap;
        let y = event.clientY + gap;
        const rect = tooltip.getBoundingClientRect();
        if (x + rect.width > window.innerWidth - 8) x = event.clientX - rect.width - gap;
        if (y + rect.height > window.innerHeight - 8) y = event.clientY - rect.height - gap;
        tooltip.style.left = `${Math.max(8, x)}px`;
        tooltip.style.top = `${Math.max(8, y)}px`;
    });
    document.addEventListener("pointerout", (event) => {
        const nameEl = event.target.closest?.(".auto-bracket .bracket-player-name[data-full-name]");
        if (!nameEl) return;
        const tooltip = document.getElementById("bracketNameHoverTooltip");
        if (tooltip) tooltip.style.display = "none";
    });
}

function createBracketSetupSlot(index) {
    const id = bracketSetupAssignments[index];
    const p = id ? getParticipant(id) : null;
    const pair = index % 2 === 0 ? index + 1 : index - 1;
    const pairHas = Boolean(bracketSetupAssignments[pair]);
    const isBye = bracketSetupConfirmed && !p && pairHas;
    const isSeed = bracketSetupConfirmed && p && !pairHas;
    const cls = isBye ? "is-bye" : isSeed ? "is-seed" : p ? "is-filled" : "is-empty";
    let content = "空き";
    if (p) content = `<span class="bracket-player-name ${getBracketNameFitClass(p.display_name)}" data-full-name="${escapeHTML(p.display_name)}">${escapeHTML(p.display_name)}</span>${isSeed ? '<b class="seed-badge">シード枠</b>' : ""}`;
    else if (isBye) content = '<span class="bye-exemption">1回戦免除</span>';
    const mineClass = p && isCurrentUsersParticipant(p.id) ? " is-my-slot" : "";
    return `<div class="bracket-setup-slot ${cls}${mineClass}" data-setup-slot-index="${index}" ${p ? `data-setup-participant-id="${escapeHTML(p.id)}"` : ""}>${content}</div>`;
}

function getBracketSetupPreviewKey() {
    return currentTournament?.id ? `tournament:${currentTournament.id}:bracket-preview` : null;
}

function saveBracketSetupPreview() {
    const key = getBracketSetupPreviewKey();
    if (!key) return;
    localStorage.setItem(key, JSON.stringify({ assignments: bracketSetupAssignments, confirmed: bracketSetupConfirmed }));
}

function loadBracketSetupPreview() {
    const key = getBracketSetupPreviewKey();
    if (!key) return false;
    try {
        const data = JSON.parse(localStorage.getItem(key) || "null");
        if (!data?.confirmed || !Array.isArray(data.assignments)) return false;
        const valid = new Set(getBracketSetupUsableParticipants().map((p) => p.id));
        const ids = data.assignments.filter(Boolean);
        if (ids.some((id) => !valid.has(id)) || new Set(ids).size !== ids.length || ids.length !== valid.size) return false;
        bracketSetupAssignments = data.assignments;
        bracketSetupKnownParticipantKey = [...valid].sort().join("|");
        bracketSetupConfirmed = true;
        return true;
    } catch { return false; }
}

function confirmBracketSetup() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage("参加者を2人以上追加してください。", "error");
        return;
    }
    const assigned = bracketSetupAssignments.filter(Boolean).length;
    if (assigned !== usable.length) {
        showMessage(`参加者${usable.length}人のうち、${assigned}人しか配置されていません。`, "error");
        return;
    }
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage("配置を確定しました。BYEとシード枠を表示します。", "success");
}


let manualBulkPlacementWindow = null;

function openManualBulkPlacementWindow() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage("参加者を2人以上追加してください。", "error");
        return;
    }

    const slotCount = nextPowerOfTwoForSetup(usable.length);
    const requiredSeeds = slotCount - usable.length;
    const participantNames = usable.map((p) => String(p.display_name || "").trim());
    const width = 680;
    const height = 780;
    const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
    const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
    manualBulkPlacementWindow = window.open(
        "",
        "tournamentManualBulkPlacement",
        `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (!manualBulkPlacementWindow) {
        showMessage("別ウィンドウを開けませんでした。ブラウザのポップアップを許可してください。", "error");
        return;
    }

    const doc = manualBulkPlacementWindow.document;
    doc.open();
    doc.write(`<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>参加者の一括登録</title>
<style>
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;background:#080f1b;color:#e2e8f0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans JP",sans-serif}
body{padding:26px}.wrap{max-width:620px;margin:0 auto}h1{margin:0 0 12px;font-size:24px;color:#f8fafc}
.help{margin:0 0 14px;color:#94a3b8;font-size:13px;line-height:1.8}
.summary{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px}.pill{padding:7px 10px;border:1px solid #334155;border-radius:8px;background:#0b1422;font-size:12px;color:#cbd5e1}.pill strong{color:#fff}
.editor{display:flex;width:100%;height:360px;border:1px solid #475569;border-radius:10px;overflow:hidden;background:#0b1422}.editor:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.14)}
.lines{width:46px;flex:0 0 46px;padding:14px 9px 14px 0;background:#0a111d;border-right:1px solid #263244;color:#64748b;text-align:right;font:14px/23.8px ui-monospace,SFMono-Regular,Consolas,monospace;white-space:pre;overflow:hidden;user-select:none}
textarea{flex:1;height:100%;padding:14px;border:0;resize:none;background:transparent;color:#f8fafc;font:14px/23.8px ui-monospace,SFMono-Regular,Consolas,monospace;outline:none;white-space:pre;overflow:auto}
.status{margin-top:12px;padding:12px;border:1px solid #263244;border-radius:10px;background:#0a111d;font-size:12px;line-height:1.75}.ok{color:#86efac}.warn{color:#fbbf24}.bad{color:#fca5a5}.muted{color:#94a3b8}.status-row+.status-row{margin-top:3px}
button{width:100%;margin-top:14px;padding:13px 18px;border:1px solid #3b82f6;border-radius:10px;background:#2563eb;color:#fff;font:inherit;font-weight:900;cursor:pointer}button:hover{background:#1d4ed8}button:disabled{opacity:.45;cursor:not-allowed}
.error{min-height:22px;margin-top:10px;color:#fca5a5;font-size:12px;line-height:1.6}
</style>
</head><body><div class="wrap">
<h1>参加者の一括登録</h1>
<p class="help">参加者を改行で記載してください。「***」のみの記載の場合、そこはシード枠となります。</p>
<div class="summary"><div class="pill">入力行数 <strong id="lineCount">0 / ${slotCount}</strong></div><div class="pill">残り参加者 <strong id="remainingPeople">${usable.length}</strong></div><div class="pill">残りシード <strong id="remainingSeeds">${requiredSeeds}</strong></div></div>
<div class="editor"><div id="lineNumbers" class="lines">1</div><textarea id="manualBulkTextarea" spellcheck="false" placeholder="しおん&#10;***&#10;佐藤&#10;山田"></textarea></div>
<div id="liveStatus" class="status"></div>
<button id="manualBulkConfirm" type="button">トーナメント表の配置を確定</button>
<div id="manualBulkError" class="error"></div>
</div>
<script>
const participantNames=${JSON.stringify(participantNames)};
const requiredLines=${slotCount};
const requiredSeeds=${requiredSeeds};
const textarea=document.getElementById("manualBulkTextarea");
const lineNumbers=document.getElementById("lineNumbers");
const liveStatus=document.getElementById("liveStatus");
const lineCount=document.getElementById("lineCount");
const remainingPeople=document.getElementById("remainingPeople");
const remainingSeeds=document.getElementById("remainingSeeds");
let showInvalidNames=false;
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\\\"":"&quot;","'":"&#39;"}[c]));}
function getLines(){const raw=textarea.value.replace(/\\r\\n?/g,"\\n");if(!raw)return [];const a=raw.split("\\n");while(a.length&&a[a.length-1]==="")a.pop();return a.map(v=>v.trim());}
function updateLineNumbers(){const count=Math.max(1,textarea.value.split("\\n").length);lineNumbers.textContent=Array.from({length:count},(_,i)=>i+1).join("\\n");lineNumbers.scrollTop=textarea.scrollTop;}
function validateLive(){
 const lines=getLines(); const nonSeed=lines.filter(v=>v&&v!=="***"); const seeds=lines.filter(v=>v==="***").length;
 const counts=new Map(); nonSeed.forEach(n=>counts.set(n,(counts.get(n)||0)+1));
 const duplicates=[...counts].filter(([,c])=>c>1).map(([n,c])=>n+" ×"+c);
 const enteredSet=new Set(nonSeed); const missing=participantNames.filter(n=>!enteredSet.has(n));
 const invalid=[...new Set(nonSeed.filter(n=>!participantNames.includes(n)))];
 const seedDiff=requiredSeeds-seeds; const lineDiff=requiredLines-lines.length;
 lineCount.textContent=lines.length+" / "+requiredLines;
 remainingPeople.textContent=Math.max(0,missing.length);
 remainingSeeds.textContent=Math.max(0,seedDiff);
 const rows=[];
 rows.push('<div class="status-row '+(lineDiff===0?'ok':lineDiff>0?'warn':'bad')+'">入力行数：'+lines.length+' / '+requiredLines+(lineDiff>0?'（あと'+lineDiff+'行）':lineDiff<0?'（'+(-lineDiff)+'行オーバー）':' ✓')+'</div>');
 if(missing.length) rows.push('<div class="status-row warn">未入力の参加者（'+missing.length+'人）：'+missing.map(esc).join('、')+'</div>'); else rows.push('<div class="status-row ok">未入力の参加者：0人 ✓</div>');
 if(seedDiff>0) rows.push('<div class="status-row warn">シード枠「***」があと'+seedDiff+'個必要です。</div>');
 else if(seedDiff<0) rows.push('<div class="status-row bad">シード枠「***」が'+(-seedDiff)+'個多すぎます。</div>');
 else rows.push('<div class="status-row ok">シード枠：'+seeds+' / '+requiredSeeds+' ✓</div>');
 if(duplicates.length) rows.push('<div class="status-row bad">重複：'+duplicates.map(esc).join('、')+'</div>');
 if(showInvalidNames&&invalid.length) rows.push('<div class="status-row bad">参加者に存在しない名前：'+invalid.map(esc).join('、')+'</div>');
 if(lines.length===requiredLines&&!missing.length&&seedDiff===0&&!duplicates.length&&!invalid.length) rows.push('<div class="status-row ok">入力内容に問題ありません。</div>');
 liveStatus.innerHTML=rows.join('');
}
textarea.addEventListener("input",()=>{showInvalidNames=false;updateLineNumbers();validateLive();});
textarea.addEventListener("scroll",()=>{lineNumbers.scrollTop=textarea.scrollTop;});
textarea.addEventListener("blur",()=>{showInvalidNames=true;validateLive();});
updateLineNumbers();validateLive();
document.getElementById("manualBulkConfirm").addEventListener("click",function(){
 showInvalidNames=true;validateLive();
 const result=window.opener&&window.opener.applyManualBulkBracketPlacement?window.opener.applyManualBulkBracketPlacement(textarea.value):{ok:false,message:"元の大会ページとの接続が切れています。"};
 if(result&&result.ok){window.close();return;}document.getElementById("manualBulkError").textContent=result?.message||"配置を確定できませんでした。";
});
<\/script></body></html>`);
    doc.close();
    manualBulkPlacementWindow.focus();
    setTimeout(() => manualBulkPlacementWindow?.focus(), 80);
}

function applyManualBulkBracketPlacement(text) {
    if (!currentTournament || currentTournament.status !== "waiting" || currentTournament.archived_at) {
        return { ok: false, message: "現在はトーナメント表を編集できません。" };
    }

    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) return { ok: false, message: "参加者を2人以上追加してください。" };

    const slotCount = nextPowerOfTwoForSetup(usable.length);
    const requiredSeeds = slotCount - usable.length;
    const lines = String(text ?? "").replace(/\r\n?/g, "\n").split("\n").map((line) => line.trim());
    while (lines.length && lines[lines.length - 1] === "") lines.pop();

    if (lines.some((line) => line === "")) {
        return { ok: false, message: "空行は使用できません。シード枠は「***」と記載してください。" };
    }
    if (lines.length !== slotCount) {
        return { ok: false, message: `現在の参加者${usable.length}人では、${slotCount}行で入力してください（参加者${usable.length}人＋シード枠${requiredSeeds}個）。` };
    }

    const seedCount = lines.filter((line) => line === "***").length;
    if (seedCount !== requiredSeeds) {
        return { ok: false, message: `シード枠は${requiredSeeds}個必要です。「***」を${requiredSeeds}行記載してください。` };
    }

    const byName = new Map();
    for (const p of usable) {
        const name = String(p.display_name || "").trim();
        if (!byName.has(name)) byName.set(name, []);
        byName.get(name).push(p);
    }

    const usedIds = new Set();
    const assignments = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === "***") {
            assignments.push(null);
            continue;
        }
        const matches = byName.get(line) || [];
        if (!matches.length) return { ok:false, message:`${i + 1}行目「${line}」は現在の参加者に見つかりません。` };
        if (matches.length > 1) return { ok:false, message:`「${line}」という同名の参加者が複数いるため、一括配置では判別できません。` };
        if (usedIds.has(matches[0].id)) return { ok:false, message:`${i + 1}行目「${line}」が重複しています。` };
        usedIds.add(matches[0].id);
        assignments.push(matches[0].id);
    }

    if (usedIds.size !== usable.length) {
        const missing = usable.filter((p) => !usedIds.has(p.id)).map((p) => p.display_name);
        return { ok:false, message:`未入力の参加者がいます：${missing.join("、")}` };
    }

    for (let i = 0; i < assignments.length; i += 2) {
        if (!assignments[i] && !assignments[i + 1]) {
            return { ok:false, message:`${i + 1}行目と${i + 2}行目を両方シード枠にはできません。` };
        }
    }

    bracketSetupAssignments = assignments;
    bracketSetupKnownParticipantKey = usable.map((p) => p.id).sort().join("|");
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage("手動一括配置でトーナメント表の配置を確定しました。", "success");
    window.focus();
    return { ok:true };
}
window.applyManualBulkBracketPlacement = applyManualBulkBracketPlacement;

function randomizeBracketSetup() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage("参加者を2人以上追加してください。", "error");
        return;
    }

    bracketSetupAssignments = buildSeedDistributedAssignments(
        usable.map((p) => p.id),
        true
    );
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage("参加者をランダムに配置し、シード枠を均等に分散しました。", "success");
}

function beginBracketSetupDrag(event) {
    if (!currentTournament || currentTournament.status !== "waiting" || currentTournament.archived_at) return;
    if (event.target.closest("button")) return;
    if (event.button !== undefined && event.button !== 0) return;
    const card = event.target.closest("[data-setup-participant-id]");
    if (!card) return;
    const id = card.dataset.setupParticipantId;
    const participant = getParticipant(id);
    if (!id || !participant) return;
    event.preventDefault();
    bracketSetupDraggedParticipantId = id;
    const rect = card.getBoundingClientRect();
    bracketSetupDragOffsetX = Math.min(Math.max(event.clientX - rect.left, 18), rect.width - 18);
    bracketSetupDragOffsetY = Math.min(Math.max(event.clientY - rect.top, 12), rect.height - 12);
    bracketSetupDragGhost = document.createElement("div");
    bracketSetupDragGhost.className = "bracket-setup-drag-ghost";
    bracketSetupDragGhost.textContent = participant.display_name;
    document.body.appendChild(bracketSetupDragGhost);
    moveBracketSetupDrag(event);
    document.body.classList.add("bracket-setup-dragging");
}

function moveBracketSetupDrag(event) {
    if (!bracketSetupDraggedParticipantId || !bracketSetupDragGhost) return;
    if (event.cancelable) event.preventDefault();
    bracketSetupDragGhost.style.transform = `translate3d(${event.clientX - bracketSetupDragOffsetX}px, ${event.clientY - bracketSetupDragOffsetY}px, 0)`;
    document.querySelectorAll(".bracket-setup-slot.is-drop-target").forEach((el) => el.classList.remove("is-drop-target"));
    const target = document.elementFromPoint(event.clientX, event.clientY);
    target?.closest?.("[data-setup-slot-index]")?.classList.add("is-drop-target");
}

function finishBracketSetupDrag(event) {
    if (!bracketSetupDraggedParticipantId) return;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const slot = target?.closest?.("[data-setup-slot-index]");
    const pool = target?.closest?.("#bracketSetupParticipantPool");
    const id = bracketSetupDraggedParticipantId;
    const from = bracketSetupAssignments.indexOf(id);
    cleanupBracketSetupDrag();
    if (pool) {
        if (from >= 0) bracketSetupAssignments[from] = null;
        bracketSetupConfirmed = false;
        renderBracketSetupPrototype();
        return;
    }
    if (!slot) return;
    const to = Number(slot.dataset.setupSlotIndex);
    if (!Number.isInteger(to)) return;
    const displaced = bracketSetupAssignments[to];
    if (from >= 0) bracketSetupAssignments[from] = displaced || null;
    bracketSetupAssignments[to] = id;
    bracketSetupConfirmed = false;
    renderBracketSetupPrototype();
}

function cancelBracketSetupDrag() {
    if (bracketSetupDraggedParticipantId) cleanupBracketSetupDrag();
}

function cleanupBracketSetupDrag() {
    bracketSetupDraggedParticipantId = null;
    bracketSetupDragGhost?.remove();
    bracketSetupDragGhost = null;
    document.body.classList.remove("bracket-setup-dragging");
    document.querySelectorAll(".bracket-setup-slot.is-drop-target").forEach((el) => el.classList.remove("is-drop-target"));
}

function parseBulkParticipantNames() {
    const textarea = document.getElementById("bulkParticipantTextarea");
    const rawValue = textarea?.value || "";
    if (!rawValue) return [];
    return rawValue.split(/\r?\n/);
}

function updateBulkParticipantPreview() {
    const badge = document.getElementById("bulkParticipantPreviewCount");
    const names = parseBulkParticipantNames();
    if (badge) badge.textContent = `${names.length} PLAYERS`;
}

async function addBulkParticipants() {
    const rawNames = parseBulkParticipantNames();
    if (!currentTournament || !isHost) return;
    if (!rawNames.length) {
        showMessage("追加する参加者名を1行につき1人入力してください。", "error");
        return;
    }

    const names = [];
    for (let index = 0; index < rawNames.length; index += 1) {
        const check = validateParticipantName(rawNames[index]);
        if (!check.valid) {
            showMessage(`${index + 1}行目: ${check.message}`, "error");
            return;
        }
        names.push(check.name);
    }

    const normalizeParticipantName = (name) => trimParticipantName(name).toLocaleLowerCase();
    const existingNameSet = new Set(
        currentParticipants.map((participant) => normalizeParticipantName(participant.display_name || ""))
    );
    const inputSeen = new Set();
    const skippedNames = [];
    const namesToAdd = [];

    for (const name of names) {
        const key = normalizeParticipantName(name);
        if (existingNameSet.has(key) || inputSeen.has(key)) {
            skippedNames.push(name);
            continue;
        }
        inputSeen.add(key);
        namesToAdd.push(name);
    }

    if (currentParticipants.length + namesToAdd.length > 256) {
        showMessage(`参加者は最大256人です。現在${currentParticipants.length}人登録されています。`, "error");
        return;
    }
    const button = document.getElementById("bulkParticipantAddButton");
    setButtonLoading(button, true, "追加中...");
    try {
        const { data: addedCount, error } = await supabaseClient.rpc("host_add_participants_bulk", {
            p_tournament_id: currentTournament.id,
            p_display_names: names
        });
        if (error) throw error;
        const textarea = document.getElementById("bulkParticipantTextarea");
        if (textarea) textarea.value = "";
        updateBulkParticipantPreview();
        await loadTournamentData();
        const added = Number.isFinite(Number(addedCount)) ? Number(addedCount) : namesToAdd.length;
        if (skippedNames.length > 0) {
            showMessage(`${added}人を追加しました。スキップ: ${skippedNames.join("、")}（クリックして閉じる）`, added === 0 ? "error" : "warning", true);
        } else {
            showMessage(`${added}人をまとめて追加しました。`, "success");
        }
    } catch (error) {
        console.error("bulk participant add error:", error);
        const message = String(error?.message || error || "");
        if (message.includes("host_add_participants_bulk")) {
            showMessage("一括追加用のデータベース設定がまだ必要です。", "error");
        } else {
            showMessage(translateError(error), "error");
        }
    } finally {
        setButtonLoading(button, false);
    }
}

// YouTube作成はURLパラメータで独立した画面として表示する。
function isYoutubeCreatePage() {
    return new URLSearchParams(window.location.search).get("page") === "youtube-create";
}

function renderYoutubeCreatePage() {
    const createScreen = document.getElementById("youtubeCreateScreen");
    if (!createScreen) return;
    const active = authorizedHost && isYoutubeCreatePage() && !getTournamentAccessTokenFromURL();
    createScreen.classList.toggle("hidden", !active);
    homeScreen.classList.toggle("hidden", active);
    if (active) {
        tournamentScreen.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "instant" });
    }
}

document.getElementById("youtubeCreateToggle")?.addEventListener("click", () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("t");
    url.searchParams.set("page", "youtube-create");
    window.history.pushState({ screen: "youtube-create" }, "", url.pathname + url.search + url.hash);
    renderYoutubeCreatePage();
});

document.getElementById("youtubeCreateBackButton")?.addEventListener("click", () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("page");
    window.history.pushState({ screen: "home", mode: "normal" }, "", url.pathname + url.search + url.hash);
    renderYoutubeCreatePage();
    showHome();
});



/* Google OAuth token をサーバー側で検証して、チャット参加者と安全に紐付ける。 */
let youtubeGoogleLinkLastAttempt = 0;
let youtubeGoogleLinkBusy = false;
async function linkYoutubeParticipantsFromGoogle() {
    if (!currentUser || youtubeGoogleLinkBusy ||
        !currentUser.identities?.some(identity => identity.provider === "google")) return;
    if (Date.now() - youtubeGoogleLinkLastAttempt < 15000) return;
    youtubeGoogleLinkLastAttempt = Date.now();
    youtubeGoogleLinkBusy = true;
    try {
        const {data: {session}, error: sessionError} = await supabaseClient.auth.getSession();
        if (sessionError || !session?.provider_token) return;
        const {data, error} = await supabaseClient.functions.invoke("youtube-link-by-google", {
            body: {provider_token: session.provider_token}
        });
        if (error) {
            // Expired/missing permission is not a reason to change the participant's role.
            console.warn("YouTube参加者のGoogle連携を確認できませんでした", error);
            return;
        }
        if (data?.linked > 0) {
            await loadMyTournaments();
            if (publicWatchToken &&
                !document.getElementById("publicWatchScreen")?.classList.contains("hidden")) {
                await refreshPublicWatch();
            }
        }
    } catch (error) {
        console.warn("YouTube参加者のGoogle連携に失敗しました", error);
    } finally {
        youtubeGoogleLinkBusy = false;
    }
}

/* YouTube参加登録・連携後の権限反映（Google再ログイン不要） */
let youtubeParticipationRefreshBusy = false;
let youtubeParticipationRefreshLast = 0;
function startYoutubeParticipationRefresh() {
    const refresh = async () => {
        if (document.hidden || !currentUser || youtubeParticipationRefreshBusy) return;
        if (Date.now() - youtubeParticipationRefreshLast < 5000) return;
        if (homeScreen.classList.contains("hidden") &&
            document.getElementById("publicWatchScreen")?.classList.contains("hidden")) return;
        youtubeParticipationRefreshBusy = true;
        youtubeParticipationRefreshLast = Date.now();
        try {
            // Keep the auth user synchronized with the existing Supabase session.
            const {data, error} = await supabaseClient.auth.getUser();
            if (error || !data?.user) return;
            currentUser = data.user;
            await linkYoutubeParticipantsFromGoogle();
            await loadMyTournaments();
            if (publicWatchToken &&
                !document.getElementById("publicWatchScreen")?.classList.contains("hidden")) {
                await refreshPublicWatch();
            }
        } catch (error) {
            console.error("YouTube参加者状態の更新に失敗しました", error);
        } finally {
            youtubeParticipationRefreshBusy = false;
        }
    };
    setInterval(refresh, 8000);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) refresh();
    });
}

/* STEP 4-2: 観戦専用UI。閲覧のみ。大会の変更RPCは呼び出さない。 */
let myTournamentAccessByWatchToken = new Map();
let publicWatchRefreshTimer = null;
let publicWatchToken = null;
let publicWatchMyParticipant = null;
let publicWatchRefreshing = false;
function stopPublicWatchRefresh() {
    if (publicWatchRefreshTimer) clearInterval(publicWatchRefreshTimer);
    publicWatchRefreshTimer = null;
}
function initializePublicWatch() {
    const toggle = document.getElementById("unifiedFinishedToggle");
    const section = document.getElementById("unifiedFinishedSection");
    if (toggle && section) {
        const setVisible = (visible) => {
            section.classList.toggle("hidden", !visible);
            toggle.textContent = visible ? "終了した大会を隠す" : "終了した大会を表示";
            toggle.setAttribute("aria-expanded", String(visible));
            try { localStorage.setItem("unifiedFinishedVisible", visible ? "1" : "0"); } catch (_) {}
        };
        let saved = false;
        try { saved = localStorage.getItem("unifiedFinishedVisible") === "1"; } catch (_) {}
        setVisible(saved);
        toggle.addEventListener("click", () => setVisible(section.classList.contains("hidden")));
    }
    document.getElementById("publicWatchBack")?.addEventListener("click", async () => {
        history.pushState({screen:"home"}, "", location.pathname);
        stopPublicWatchRefresh();
        showHome();
        await loadMyTournaments();
        await loadPublicWatches();
    });
    document.getElementById("publicWatchSearchForm")?.addEventListener("submit", e => {
        e.preventDefault();
        const query = document.getElementById("publicWatchSearchInput")?.value.trim() || "";
        const canvas = document.getElementById("publicWatchBracket");
        canvas?.querySelectorAll(".public-watch-search-hit").forEach(el => el.classList.remove("public-watch-search-hit"));
        if (!query) { document.getElementById("publicWatchSearchResult").textContent = "参加者名を入力してください。"; return; }
        const matches = [...(canvas?.querySelectorAll(".bracket-player-name[data-full-name]") || [])]
            .filter(el => el.dataset.fullName === query);
        document.getElementById("publicWatchSearchResult").textContent = matches.length ? `${query} が見つかりました。` : "一致する参加者が見つかりません。";
        if (matches.length) {
            const target = matches[0].closest(".future-slot");
            target?.classList.add("public-watch-search-hit");
            target?.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
        }
    });
    document.getElementById("publicWatchBracket")?.addEventListener("click", async e => {
        const button = e.target.closest("[data-watch-claim-victory]");
        if (!button || button.disabled || !publicWatchMyParticipant || publicWatchMyParticipant.status !== "active") return;
        const matchId = button.dataset.watchClaimVictory;
        const confirmed = await showConfirmDialog(
            "勝利を登録", "この試合の勝者として登録します。よろしいですか？",
            "勝利を登録", "success"
        );
        if (!confirmed || publicWatchToken === null) return;
        button.disabled = true;
        try {
            // The database RPC rechecks ownership, ban, suspension, pause and match state.
            const {error} = await supabaseClient.rpc("claim_victory", {p_match_id:matchId});
            if (error) throw error;
            showMessage("勝利を登録しました。", "success");
        } catch (error) {
            console.error(error);
            showMessage(translateError(error), "error");
        } finally {
            await refreshPublicWatch();
        }
    });
    // Active and finished tournament cards are in separate containers.
    // In particular, publicWatchFinished is outside publicWatchPanel.
    // Bind the same navigation handler to both containers.
    const handleCatalogClick = e => {
        const btn = e.target.closest("[data-public-watch]");
        if (btn) {
            openPublicWatch(btn.dataset.publicWatch, true)
                .catch(err => showMessage(translateError(err), "error"));
            return;
        }
        const openBtn = e.target.closest(".my-tournament-open-button");
        if (openBtn && openBtn.dataset.tournamentCode) handleMyTournamentClick(e);
    };
    document.getElementById("publicWatchPanel")?.addEventListener("click", handleCatalogClick);
    document.getElementById("unifiedFinishedSection")?.addEventListener("click", handleCatalogClick);
}
async function loadPublicWatches() {
    const active = document.getElementById("publicWatchActive");
    const finished = document.getElementById("publicWatchFinished");
    if (!active || !finished) return;
    const {data,error} = await supabaseClient.rpc("list_public_tournament_watches");
    if (error) { active.textContent = "大会一覧を取得できませんでした。"; finished.textContent=""; console.error(error); return; }
    const rows = (Array.isArray(data) ? data : []).filter(t => t.tournament_mode === "youtube");
    // Anonymous Supabase users can also be registered tournament participants.
    // Use the authenticated Supabase user ID's participation, not Google login state.
    const card = t => {
        const access = myTournamentAccessByWatchToken.get(t.watch_token);
        const canEnter = Boolean(access && (access.role === "participant" || (access.role === "host" && authorizedHost)));
        const action = canEnter
            ? `data-tournament-code="${escapeHtml(access.code)}" class="button button-secondary my-tournament-open-button"`
            : `data-public-watch="${escapeHtml(t.watch_token)}" class="button button-secondary my-tournament-open-button"`;
        const typeText = t.tournament_mode === "youtube" ? "YouTube 連携トーナメント" : "通常トーナメント";
        const statusText = t.archived_at ? "終了済み" : t.status === "finished" ? "大会終了" : t.status === "active" ? "開催中" : "開催前";
        const roleText = canEnter ? (access.role === "host" ? "主催者" : "参加者") : "観戦者";
        return `<div class="my-tournament-item">
            <div class="my-tournament-info">
                <div class="my-tournament-type">トーナメント種類：「${typeText}」</div>
                <strong class="my-tournament-name">${escapeHtml(t.name)}</strong>
                <div class="my-tournament-meta">${roleText} ・ ${statusText}</div>
                ${t.champion_name ? `<div class="my-tournament-champion">優勝者：${escapeHtml(t.champion_name)}</div>` : ""}
            </div>
            <button type="button" ${action}>${canEnter ? "大会ページへ" : "観戦する"}</button>
        </div>`;
    };
    const current = rows.filter(t => !t.archived_at && t.status !== "finished");
    const ended = rows.filter(t => t.archived_at || t.status === "finished");
    active.innerHTML = current.length ? current.map(card).join("") : '<div class="empty-state">現在公開中の大会はありません。</div>';
    finished.innerHTML = ended.length ? ended.map(card).join("") : '<div class="empty-state">終了した大会はありません。</div>';
}
async function openPublicWatch(token, pushHistory = false) {
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(token)) {
        showMessage("観戦URLが正しくありません", "error"); return;
    }
    await unsubscribeRealtime();
    stopPublicWatchRefresh();
    publicWatchToken = token;
    publicWatchMyParticipant = null;
    homeScreen.classList.add("hidden");
    tournamentScreen.classList.add("hidden");
    document.getElementById("youtubeCreateScreen")?.classList.add("hidden");
    document.getElementById("publicWatchScreen").classList.remove("hidden");
    if (pushHistory) {
        const url = new URL(location.href);
        url.searchParams.delete("t"); url.searchParams.set("watch", token);
        history.pushState({screen:"watch"}, "", url.pathname + url.search);
    }
    await refreshPublicWatch();
    publicWatchRefreshTimer = setInterval(() => {
        if (!document.getElementById("publicWatchScreen")?.classList.contains("hidden"))
            refreshPublicWatch().catch(console.error);
    }, 10000);
}
async function refreshPublicWatch() {
    if (!publicWatchToken || publicWatchRefreshing) return;
    publicWatchRefreshing = true;
    const token = publicWatchToken;
    try {
        const [{data,error}, {data:mine, error:mineError}] = await Promise.all([
            supabaseClient.rpc("get_tournament_watch", {p_watch_token:token}),
            supabaseClient.rpc("get_my_watch_participation", {p_watch_token:token})
        ]);
        if (token !== publicWatchToken) return;
        if (error || mineError) {
            console.error(error || mineError);
            document.getElementById("publicWatchStatus").textContent="観戦情報を取得できませんでした。";
            return;
        }
        publicWatchMyParticipant = mine && mine.id ? mine : null;
        // A viewer can become an authenticated participant while this screen
        // is open (YouTube chat registration + verified channel linking).
        // Switch to the tournament page as soon as access is confirmed.
        if (publicWatchMyParticipant && currentUser) {
            await loadMyTournaments();
            const access = myTournamentAccessByWatchToken.get(token);
            if (access?.role === "participant" && access.code) {
                stopPublicWatchRefresh();
                publicWatchToken = null;
                await openTournament(access.code);
                return;
            }
        }
        if (!data || !data.tournament) {
            document.getElementById("publicWatchTitle").textContent="大会を表示できません";
            document.getElementById("publicWatchStatus").textContent="大会が削除されたか、このアカウントでは閲覧できません。";
            document.getElementById("publicWatchBracket").replaceChildren();
            stopPublicWatchRefresh();
            return;
        }
        const t = data.tournament;
        document.getElementById("publicWatchTitle").textContent=t.name;
        const tournamentActive = t.status === "active" && !t.archived_at && !t.paused_at;
        document.getElementById("publicWatchStatus").textContent=t.archived_at || t.status === "finished"
            ? "終了した大会" : t.paused_at ? "大会一時停止中"
            : t.status === "active" ? "大会進行中" : "開催前";
        const participants = new Map((data.participants || []).map(p=>[p.id,p]));
        // Before the tournament starts, show the existing bracket slots as a
        // read-only preview. If slots have not been created yet, show the
        // current participant list in a clearly marked provisional bracket.
        const savedMatches = data.matches || [];
        const savedSlots = [...(data.bracket_slots || [])].sort((a,b) => Number(a.card_order)-Number(b.card_order));
        let displayMatches = savedMatches;
        let previewMode = false;
        let provisionalMode = false;
        if (!savedMatches.length) {
            previewMode = true;
            const eligible = (data.participants || []).filter(p => p.status !== "banned");
            const slots = savedSlots.length ? savedSlots.map((slot,i) => ({
                player1_id: slot.player1_id, player2_id: slot.player2_id,
                match_number: i+1
            })) : Array.from({length: Math.ceil(eligible.length/2)}, (_,i) => ({
                player1_id: eligible[i*2]?.id || null,
                player2_id: eligible[i*2+1]?.id || null,
                match_number: i+1
            }));
            provisionalMode = !savedSlots.length;
            displayMatches = slots.map((slot,i) => ({...slot,
                id: `preview-${i+1}`, round_number:1, status:"waiting", winner_id:null
            }));
            let previousCount = slots.length, roundNumber = 2;
            while (previousCount > 1) {
                previousCount = Math.ceil(previousCount / 2);
                for (let i=0; i<previousCount; i++) displayMatches.push({
                    id:`preview-${roundNumber}-${i+1}`, round_number:roundNumber,
                    match_number:i+1, player1_id:null, player2_id:null,
                    status:"waiting", winner_id:null
                });
                roundNumber++;
            }
        }
        const rounds = new Map();
        for (const m of displayMatches) {
            const n=Number(m.round_number)||0;
            if (!rounds.has(n)) rounds.set(n,[]);
            rounds.get(n).push(m);
        }
        const wrap=document.getElementById("publicWatchBracket");
        if (!rounds.size) {
            wrap.innerHTML='<div class="empty-state">参加者が登録されると、ここに現在のトーナメント表が表示されます。</div>';
            return;
        }
        const name = id => id ? escapeHtml(participants.get(id)?.display_name || "未定") : "未定";
        // Both tournament types require the participant's Supabase user_id to match
        // the current session. YouTube users must first complete chat-code linking.
        const canClaim = m => tournamentActive && m.status === "active" && !m.winner_id
            && m.player1_id && m.player2_id
            && publicWatchMyParticipant?.status === "active"
            && [m.player1_id,m.player2_id].includes(publicWatchMyParticipant.id);
        // The spectator view uses the same bracket classes, slot cards, and
        // left-to-right / centered layouts as the fullscreen bracket.
        const ordered = [...rounds.entries()].sort((a,b)=>a[0]-b[0]);
        const first = ordered[0]?.[1] || [];
        const centered = (data.participants || []).filter(p => p.status !== "banned").length >= 16 && ordered.length >= 2;
        const slot = (id, m) => {
            const winner = Boolean(id && m?.winner_id === id);
            const label = id ? name(id) : "未定";
            // A missing opponent is a bye only when the match is a confirmed
            // single-player match (or a first-round pre-start bracket slot).
            // Unresolved later-round opponents must continue to show "未定".
            const otherId = m?.player1_id === id ? m?.player2_id : m?.player1_id;
            const isBye = !id && Boolean(otherId) &&
                (Number(m?.round_number) === 1 ||
                 (m?.status === "finished" && m?.winner_id === otherId));
            if (isBye) {
                const round = Number(m.round_number) || 1;
                return `<div class="future-slot bracket-setup-slot is-bye public-watch-bye"><span class="bye-exemption">${round}回戦免除</span></div>`;
            }
            return `<div class="future-slot ${id ? "live-player" : ""} ${winner ? "is-winner" : ""} ${publicWatchMyParticipant?.id === id ? "is-my-slot" : ""}"><span class="bracket-player-name ${getBracketNameFitClass(participants.get(id)?.display_name || "")} " data-full-name="${escapeHtml(participants.get(id)?.display_name || "")}">${label}</span>${winner ? '<b class="winner-badge">勝利</b>' : ""}${id && publicWatchMyParticipant?.id === id && canClaim(m) ? `<button type="button" class="generated-win-button" data-watch-claim-victory="${escapeHtml(m.id)}">勝利にする</button>` : ""}</div>`;
        };
        const matchHtml = (m, mirror=false) => `<div class="auto-match future-match ${mirror ? "mirror" : ""}">${slot(m.player1_id,m)}${slot(m.player2_id,m)}</div>`;
        const colHtml = (round, matches, mirror=false) => {
            const title = round === ordered.length ? "決勝" : round === ordered.length-1 ? "準決勝" : `${round}回戦`;
            return `<div class="bracket-round-column ${round===1 ? "first-round-column" : "future-round-column"}" data-side="${mirror ? "right" : "left"}"><div class="bracket-round-title">${title}</div><div class="bracket-round-matches">${matches.sort((a,b)=>(a.match_number||0)-(b.match_number||0)).map(m=>matchHtml(m,mirror)).join("")}</div></div>`;
        };
        const final = ordered.at(-1)?.[1]?.[0];
        const champion = final?.winner_id ? `優勝：${name(final.winner_id)}` : "WINNER";
        let content;
        if (centered) {
            const left = [], right = [];
            for (const [r, matches] of ordered.slice(0,-1)) {
                const sorted = [...matches].sort((a,b)=>(a.match_number||0)-(b.match_number||0));
                const half = Math.ceil(sorted.length / 2);
                left.push(colHtml(r,sorted.slice(0,half)));
                right.unshift(colHtml(r,sorted.slice(half),true));
            }
            content = `<div class="auto-bracket auto-bracket-centered"><div class="bracket-half bracket-half-left">${left.join("")}</div><div class="bracket-center-final"><div class="bracket-round-title bracket-final-title">決勝</div><div class="bracket-champion-box">${champion}</div>${final ? `<div class="bracket-final-match">${slot(final.player1_id,final)}<span>VS</span>${slot(final.player2_id,final)}</div>` : ""}</div><div class="bracket-half bracket-half-right">${right.join("")}</div></div>`;
        } else {
            content = `<div class="auto-bracket auto-bracket-standard">${ordered.map(([r,matches])=>colHtml(r,[...matches])).join("")}<div class="bracket-round-column bracket-winner-column"><div class="bracket-round-title">優勝</div><div class="bracket-winner-box">${champion}</div></div></div>`;
        }
        // Avoid resetting scroll position on each 10-second poll.
        const scrollX=wrap.scrollLeft, scrollY=wrap.scrollTop;
        wrap.innerHTML=`${previewMode ? `<div class="bracket-setup-mode-label">${provisionalMode ? "大会開始前・暫定配置（対戦カード未確定）" : "大会開始前・現在の対戦カード配置"}</div>` : ""}<div class="bracket-setup-mode-label">${centered ? "左右から中央へ勝ち上がるトーナメント表" : "左から右へ勝ち上がるトーナメント表"}</div>${content}`;
        layoutBracketSetupMatches(wrap);
        drawBracketSetupConnections(wrap);
        wrap.scrollLeft=scrollX; wrap.scrollTop=scrollY;
    } finally {
        publicWatchRefreshing = false;
    }
}
