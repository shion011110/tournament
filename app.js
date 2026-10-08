/* Tournament browser build - original source not included */
const __to_strings=["aHR0cHM6Ly9xcHF0cnFxa2Vld2JzcGF4Z2ZpZy5zdXBhYmFzZS5jbw==","c2JfcHVibGlzaGFibGVfb1dDVzlTM3dyeXZUZHJYTTl4ZGFZQV9HcDhBMjNNZA==","bWVzc2FnZQ==","aG9tZVNjcmVlbg==","dG91cm5hbWVudFNjcmVlbg==","dG91cm5hbWVudE1vZGVTZWxlY3Rpb24=","bm9ybWFsVG91cm5hbWVudE1vZGU=","eW91dHViZVRvdXJuYW1lbnRNb2Rl","bm9ybWFsVG91cm5hbWVudE1vZGVCdXR0b24=","eW91dHViZVRvdXJuYW1lbnRNb2RlQnV0dG9u","bm9ybWFsVG91cm5hbWVudE1vZGVCYWNrQnV0dG9u","eW91dHViZVRvdXJuYW1lbnRNb2RlQmFja0J1dHRvbg==","Y3JlYXRlWW91dHViZVRvdXJuYW1lbnRGb3Jt","eW91dHViZVRvdXJuYW1lbnROYW1l","eW91dHViZUhvc3RIYW5kbGU=","eW91dHViZVN0cmVhbVVybA==","eW91dHViZUNyZWF0ZUVycm9y","Y3JlYXRlWW91dHViZVRvdXJuYW1lbnRCdXR0b24=","Y3JlYXRlVG91cm5hbWVudEZvcm0=","dG91cm5hbWVudE5hbWU=","Y3JlYXRlVG91cm5hbWVudEJ1dHRvbg==","am9pblRvdXJuYW1lbnRGb3Jt","dG91cm5hbWVudENvZGU=","ZGlzcGxheU5hbWU=","am9pblRvdXJuYW1lbnRCdXR0b24=","bXlUb3VybmFtZW50TGlzdA==","c2hvd0FyY2hpdmVkVG91cm5hbWVudHNCdXR0b24=","YXJjaGl2ZWRUb3VybmFtZW50TGlzdA==","YXJjaGl2ZUFsbEhvc3RUb3VybmFtZW50c0J1dHRvbg==","ZGVsZXRlQWxsSG9zdFRvdXJuYW1lbnRzQnV0dG9u","Y3VycmVudFRvdXJuYW1lbnROYW1l","Y3VycmVudFRvdXJuYW1lbnRDb2Rl","Y29weVRvdXJuYW1lbnRDb2RlQnV0dG9u","dG9nZ2xlVG91cm5hbWVudENvZGVCdXR0b24=","bWF0Y2h1cFBhcnRpY2lwYW50Q291bnQ=","aG9zdFBhcnRpY2lwYW50Q291bnQ=","dG91cm5hbWVudFN0YXR1cw==","ZnVsbHNjcmVlbkJyYWNrZXRCdXR0b24=","cGF1c2VUb3VybmFtZW50QnV0dG9u","YnJhY2tldA==","bXlNYXRjaEFyZWE=","bXlNYXRjaEluZm8=","dmljdG9yeUJ1dHRvbg==","aG9zdENvbnRyb2xz","c3RhcnRUb3VybmFtZW50QnV0dG9u","dW5kb0J1dHRvbg==","cmVzZXRUb3VybmFtZW50QnV0dG9u","cmVvcGVuVG91cm5hbWVudEJ1dHRvbg==","YXJjaGl2ZVRvdXJuYW1lbnRCdXR0b24=","aG9zdFBhcnRpY2lwYW50TGlzdA==","bWF0Y2h1cEJ1aWxkZXI=","bWF0Y2h1cFBhcnRpY2lwYW50TGlzdA==","YWRkTWF0Y2h1cEJ1dHRvbg==","bWF0Y2h1cENhcmRMaXN0","bGVhdmVUb3VybmFtZW50QnV0dG9u","ZGlhbG9nT3ZlcmxheQ==","ZGlhbG9nVGl0bGU=","ZGlhbG9nTWVzc2FnZQ==","ZGlhbG9nQ29uZmlybQ==","ZGlhbG9nQ2FuY2Vs","eW91dHViZUxpbmtDaGFsbGVuZ2U=","eW91dHViZUxpbmtTdGFydEJ1dHRvbg==","eW91dHViZUxpbmtSZWlzc3VlQnV0dG9u","aGlkZGVu","WW91VHViZSDpgKPmkLrlnovjga48YnI+5aSn5Lya6Zay6Kan44Kz44O844OJ55m66KGM","YXJpYS1leHBhbmRlZA==","eW91dHViZUxpbmtDb3VudGRvd24=","eW91dHViZUxpbmtTdGF0dXM=","44OB44Oj44OD44OI44G444Gu5oqV56i/44KS5b6F44Gj44Gm44GE44G+44GZ4oCm","44Kz44O844OJ44Gu5pyJ5Yq55pyf6ZmQ44GM5YiH44KM44G+44GX44Gf44CC5YaN55m66KGM44GX44Gm44GP44Gg44GV44GE44CC","eW91dHViZV9saW5rX3N0YXR1cw==","56K66KqN44Gr5aSx5pWX44GX44G+44GX44Gf44CC44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GE44CC","6YCj5pC644GM5a6M5LqG44GX44G+44GX44Gf77yB5aSn5Lya5LiA6Kan44KS5pu05paw44GX44G+44GZ44CC","eW91dHViZV9saW5rX2NyZWF0ZV9jb2Rl","eW91dHViZUxpbmtDb2Rl","5LiN5piO44Gq44Ko44Op44O8","55+t5pmC6ZaT44Gn44Gu5YaN55m66KGM44Gv5Yi26ZmQ44GV44KM44Gm44GE44G+44GZ44CC5bCR44GX5b6F44Gj44Gm44GL44KJ5YaN55m66KGM44GX44Gm44GP44Gg44GV44GE44CC","44Kz44O844OJ55m66KGM44Gr5aSx5pWX44GX44G+44GX44Gf77ya","ZXJyb3I=","RE9NQ29udGVudExvYWRlZA==","Y2xpY2s=","cG9wc3RhdGU=","dG91cm5hbWVudHM=","aWQsIHRvdXJuYW1lbnRfY29kZSwgbmFtZSwgdG91cm5hbWVudF9tb2RlLCBzdGF0dXMsIGFyY2hpdmVkX2F0LCBjcmVhdGVkX2F0","aG9zdF91c2VyX2lk","cGFydGljaXBhbnRz","dXNlcl9pZA==","aG9zdA==","cGFydGljaXBhbnQ=","bWF0Y2hlcw==","dG91cm5hbWVudF9pZCwgcm91bmRfbnVtYmVyLCB3aW5uZXJfaWQ=","dG91cm5hbWVudF9pZA==","d2lubmVyX2lk","aWQsIGRpc3BsYXlfbmFtZQ==","ZmluaXNoZWQ=","JmFtcDs=","Jmx0Ow==","Jmd0Ow==","JnF1b3Q7","JiMwMzk7","YWN0aXZl","5aSn5Lya57WC5LqG","57WC5LqG5riI44G/","eW91dHViZQ==","WW91VHViZSDpgKPmkLrjg4jjg7zjg4rjg6Hjg7Pjg4g=","6YCa5bi444OI44O844OK44Oh44Oz44OI","bm9ybWFs","c3VibWl0","eW91dHViZUFwaVRlc3RCdXR0b24=","eW91dHViZUxpdmVUZXN0QnV0dG9u","eW91dHViZUxpdmVTYXZlQnV0dG9u","eW91dHViZUNoYXRNb25pdG9yU3RhcnRCdXR0b24=","eW91dHViZUNoYXRNb25pdG9yU3RvcEJ1dHRvbg==","cHJldmlld0Z1bGxzY3JlZW5CdXR0b24=","YnJhY2tldExpdmVQYXJ0aWNpcGFudFNlYXJjaEZvcm0=","cGFydGljaXBhbnRTZWFyY2hGb3Jt","YnJhY2tldFNldHVwQ2FudmFz","a2V5ZG93bg==","RXNjYXBl","Lm15LXRvdXJuYW1lbnQtb3Blbi1idXR0b24=","57WC5LqG44GX44Gf5aSn5Lya44KS6Zqg44GZ","57WC5LqG44GX44Gf5aSn5Lya44KS6KGo56S6","eW91dHViZUFwaVRlc3RSZXN1bHQ=","5YWI44GrWW91VHViZeODj+ODs+ODieODq++8iEDjgYvjgonlp4vjgb7jgovlvaLlvI/vvInjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","5o6l57aa56K66KqN5LitLi4u","44Ot44Kw44Kk44Oz5oOF5aCx44GM44GC44KK44G+44Gb44KT44CC44Oa44O844K444KS5YaN6Kqt44G/6L6844G/44GX44Gm44GP44Gg44GV44GE44CC","eW91dHViZS1yZXNvbHZlLWNoYW5uZWw=","5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC","44OB44Oj44Oz44ON44OrSUTjgYzlj5blvpfjgafjgY3jgb7jgZvjgpPjgafjgZfjgZ/jgII=","44OB44Oj44Oz44ON44Or","WW91VHViZSBjb25uZWN0aW9uIHRlc3Q6","WW91VHViZeODgeODo+ODs+ODjeODq+aOpee2muODhuOCueODiA==","eW91dHViZUxpdmVUZXN0UmVzdWx0","WW91VHViZeODj+ODs+ODieODq+OCkuato+OBl+OBj+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgg==","TElWReOCkueiuuiqjeS4rS4uLg==","TElWReaDheWgseOCkuWPluW+l+OBl+OBpuOBhOOBvuOBmS4uLg==","6KqN6Ki85oOF5aCx44GM44GC44KK44G+44Gb44KT44CC44Oa44O844K444KS5pu05paw44GX44Gm44GP44Gg44GV44GE44CC","eW91dHViZS1kZXRlY3QtbGl2ZQ==","TElWReaknOWHuuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgg==","54++5ZyoTElWRemFjeS/oeOBr+OBguOCiuOBvuOBm+OCk+OAgg==","WW91VHViZSBMSVZFIGRldGVjdGlvbiB0ZXN0Og==","TElWReaOpee2muODhuOCueODiA==","5aSn5Lya5ZCN44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CC","WW91VHViZeODj+ODs+ODieODq+OBryBAIOOBi+OCieWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgg==","eW91dHViZS5jb20=","d3d3LnlvdXR1YmUuY29t","bS55b3V0dWJlLmNvbQ==","eW91dHUuYmU=","bm90LXlvdXR1YmU=","6YWN5L+hVVJM44Gr44GvWW91VHViZeOBrlVSTOOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgg==","5L2c5oiQ5LitLi4u","Y3JlYXRlX3lvdXR1YmVfdG91cm5hbWVudA==","WW91VHViZemAo+aQuuWkp+S8muOBruS9nOaIkOe1kOaenOOCkuWPluW+l+OBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn+OAgg==","WW91VHViZSBoYW5kbGUgbXVzdCBzdGFydCB3aXRoIEA=","VG91cm5hbWVudCBuYW1l","5aSn5Lya5ZCN44GvMe+9njEwMOaWh+Wtl+OBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgg==","WW91VHViZemAo+aQuuWkp+S8muOCkuS9nOaIkOOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn+OAguOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhOOAgg==","WW91VHViZemAo+aQuuWkp+S8muOCkuS9nOaIkOOBmeOCiw==","Y3JlYXRlX3RvdXJuYW1lbnQ=","5aSn5Lya44Gu5L2c5oiQ57WQ5p6c44KS5Y+W5b6X44Gn44GN44G+44Gb44KT44Gn44GX44Gf44CC","44OI44O844OK44Oh44Oz44OI44KS5L2c5oiQ44GX44G+44GX44Gf44CC","c3VjY2Vzcw==","dW5kZWZpbmVk","ZnVuY3Rpb24=","Z3JhcGhlbWU=","5Y+C5Yqg6ICF5ZCN44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CC","5Y+C5Yqg6ICF5ZCN44GvMzXmloflrZfku6XlhoXjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","5ryi5a2X44O744OP44Oz44Kw44Or44KS5ZCr44KA5Y+C5Yqg6ICF5ZCN44GvMTXmloflrZfku6XlhoXjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","44Gy44KJ44GM44Gq44O744Kr44K/44Kr44OK44KS5ZCr44KA5Y+C5Yqg6ICF5ZCN44GvMzDmloflrZfku6XlhoXjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","5aSn5Lya44Kz44O844OJ44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CC","5Y+C5Yqg5LitLi4u","dG91cm5hbWVudF9tb2Rl","dG91cm5hbWVudF9jb2Rl","44GT44Gu5aSn5Lya44GvWW91VHViZemAo+aQuuODiOODvOODiuODoeODs+ODiOOBp+OBmeOAgumAmuW4uOOBruWkp+S8muWPguWKoOODleOCqeODvOODoOOBi+OCieOBr+WPguWKoOOBp+OBjeOBvuOBm+OCk+OAgllvdVR1YmUgTElWReOBruODgeODo+ODg+ODiOOBi+OCieWPguWKoOOBl+OBpuOBj+OBoOOBleOBhOOAgg==","am9pbl90b3VybmFtZW50","WU9VVFVCRV9DSEFUX0pPSU5fT05MWQ==","5aSn5Lya44Gr5Y+C5Yqg44GX44G+44GX44Gf44CC","Z2V0X3RvdXJuYW1lbnRfYnlfYWNjZXNzX3Rva2Vu","44GT44Gu5aSn5Lya44KS6KGo56S644GZ44KL5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC","5aSn5Lya44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CC","YnJhY2tldF9vcmRlcg==","Y3JlYXRlZF9hdA==","cm91bmRfbnVtYmVy","bWF0Y2hfbnVtYmVy","YnJhY2tldF9zbG90cw==","Y2FyZF9vcmRlcg==","55uj6KaW5YGc5q2i5Lit","eW91dHViZV9jaGF0X3NldF9tb25pdG9yX2VuYWJsZWQ=","55uj6KaW5YGc5q2i44Gu5L+d5a2Y44Gr5aSx5pWXOg==","55uj6KaW5YGc5q2i44Gu5L+d5a2Y44Gr5aSx5pWX44GX44G+44GX44Gf44CC5YaN6Kmm6KGM44GX44Gm44GP44Gg44GV44GE44CC","eW91dHViZUNoYXRNb25pdG9yUGFuZWw=","eW91dHViZUNoYXRNb25pdG9yU3RhdHVz","LnBhbmVsLWhlYWRlciBoMg==","LnBhbmVsLWhlYWRlciAucGFuZWwtc3VidGl0bGU=","WW91VHViZSDli53liKnjg4Hjg6Pjg4Pjg4jnm6PoppY=","WW91VHViZSDjg4Hjg6Pjg4Pjg4jlj4LliqDlj5fku5g=","TElWRSBDSEFUIFZJQ1RPUlkgTU9OSVRPUg==","TElWRSBDSEFUIFJFR0lTVFJBVElPTiBNT05JVE9S","d2FpdGluZw==","5aSn5Lya44Gu54q25oWL44GM5aSJ44KP44Gj44Gf44Gf44KB55uj6KaW44KS5YGc5q2i44GX44G+44GX44Gf44CC","55uj6KaW44Ko44Op44O8","55uj6KaW5YGc5q2i44Gu5L+d5a2Y44Gr5aSx5pWX","44OB44Oj44OD44OI44KS56K66KqN5LitLi4u","eW91dHViZS1tb25pdG9yLWNoYXQ=","55uj6KaWQVBJ44Gu5ZG844Gz5Ye644GX44Gr5aSx5pWX44GX44G+44GX44Gf44CC","WW91VHViZSBMSVZF44Gu6YWN5L+h44GM57WC5LqG44GX44Gf44Gf44KB44CB44OB44Oj44OD44OI55uj6KaW44KS5YGc5q2i44GX44G+44GX44Gf44CC","bnVtYmVy","55uj6KaWQVBJ44Gu5b+c562U44GM5q2j44GX44GP44GC44KK44G+44Gb44KT44CC","55uj6KaW5rqW5YKZ5a6M5LqG44CC44GT44GT44GL44KJ44Gu5paw44GX44GE44Kz44Oh44Oz44OI44KS5Y+X44GR5LuY44GR44G+44GZ44CC","5qyh44Gu44OB44Oj44OD44OI5Y+W5b6X44KS5b6F5qmf5Lit","WW91VHViZSBjaGF0IG1vbml0b3I6","55uj6KaW44KS6ZaL5aeL44GX44Gm44GE44G+44GZLi4u","55uj6KaW6ZaL5aeL44Ko44Op44O877ya","eW91dHViZUxpdmVTYXZlUGFuZWw=","eW91dHViZUxpdmVTYXZlUmVzdWx0","TElWReaDheWgseOBr+Wkp+S8muOBq+S/neWtmOa4iOOBv+OBp+OBmeOAguW/heimgeOBq+W/nOOBmOOBpuWGjeaOpee2muOBp+OBjeOBvuOBmeOAgg==","TElWRemFjeS/oeS4reOBq+aOpee2muOBmeOCi+OBqOOAgeODgeODo+ODg+ODiElE44KS5aSn5Lya44Gr5L+d5a2Y44GX44G+44GZ44CC","TElWReaOpee2muS4rS4uLg==","WW91VHViZSBMSVZF44KS56K66KqN44GX44Gm44GE44G+44GZLi4u","TElWReaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgg==","TElWReOBr+aknOWHuuOBl+OBvuOBl+OBn+OBjOOAgeWkp+S8muOBuOOBruS/neWtmOOCkueiuuiqjeOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBn+OAgg==","eW91dHViZV9ob3N0X2NoYW5uZWxfaWQseW91dHViZV92aWRlb19pZCx5b3V0dWJlX2xpdmVfY2hhdF9pZA==","5L+d5a2Y44GX44GfTElWReODgeODo+ODg+ODiElE44KS56K66KqN44Gn44GN44G+44Gb44KT44Gn44GX44Gf44CC","WW91VHViZSBMSVZFIHNhdmU6","TElWReaOpee2muODu+Wkp+S8muOBuOS/neWtmA==","YmFubmVk","bWF0Y2h1cC1wYXJ0aWNpcGFudC1hc3NpZ25lZA==","c3VzcGVuZGVk","5Y+C5Yqg6ICF44KS44GT44GT44Gr44OJ44Op44OD44Kw77yG44OJ44Ot44OD44OX","cmVhZHk=","ZW1wdHk=","bWF0Y2h1cC1zbG90LWFzc2lnbmVk","W2RhdGEtZGVsZXRlLWJyYWNrZXQtc2xvdF0=","W2RhdGEtcGFydGljaXBhbnQtaWRd","cG9pbnRlcmRvd24=","Lm1hdGNodXAtc2xvdC1hc3NpZ25lZFtkYXRhLXBhcnRpY2lwYW50LWlkXQ==","Lm1hdGNodXAtZHJhZy1oYW5kbGVbZGF0YS1kcmFnLWJyYWNrZXQtc2xvdF0=","bW91c2U=","Lm1hdGNodXAtY2FyZA==","bWF0Y2h1cC1jYXJkLWRyYWctZ2hvc3Q=","bWF0Y2h1cC1jYXJkLWRyb3AtYXZhaWxhYmxl","cG9pbnRlcm1vdmU=","cG9pbnRlcnVw","cG9pbnRlcmNhbmNlbA==","bWF0Y2h1cC1jYXJkLWRyb3AtdGFyZ2V0","cmVvcmRlcl9icmFja2V0X3Nsb3Rz","TUFUQ0jkuKbjgbPmm7/jgYjjgqjjg6njg7w6","5a++5oim44Kr44O844OJ44Gu5Lim44Gz5pu/44GI44Gr5aSx5pWX44GX44G+44GX44Gf44CC","5a++5oim44Kr44O844OJ44KS5Lim44Gz5pu/44GI44G+44GX44Gf44CC","bWF0Y2h1cC1jYXJkLWRyb3AtYmVmb3Jl","bWF0Y2h1cC1jYXJkLWRyb3AtYWZ0ZXI=","bWF0Y2h1cC1kcmFnLWdob3N0","Lm1hdGNodXAtc2xvdA==","ZHJvcC1hdmFpbGFibGU=","bWF0Y2h1cC1yZXR1cm4tYXZhaWxhYmxl","bWF0Y2h1cC1kcmFnLWFjdGl2ZQ==","ZHJvcC10YXJnZXQ=","bWF0Y2h1cC1yZXR1cm4tdGFyZ2V0","Y2xlYXJfYnJhY2tldF9zbG90X3BsYXllcg==","TUFUQ0jphY3nva7op6PpmaTjgqjjg6njg7w6","5Y+C5Yqg6ICF44Gu6YWN572u6Kej6Zmk44Gr5aSx5pWX44GX44G+44GX44Gf44CC","5Y+C5Yqg6ICF44KS5a++5oim44Kr44O844OJ44GL44KJ5aSW44GX44G+44GX44Gf44CC","YXNzaWduX2JyYWNrZXRfc2xvdF9wbGF5ZXI=","5Y+C5Yqg6ICF44KS5a++5oim44Kr44O844OJ44Gr6YWN572u44GX44G+44GX44Gf44CC","ZGVsZXRlX2JyYWNrZXRfc2xvdA==","6L+95Yqg5LitLi4u","YWRkX2JyYWNrZXRfc2xvdA==","5a++5oim44Kr44O844OJ44KS6L+95Yqg44GX44G+44GX44Gf44CC","ZmEtcmVndWxhciBmYS1leWU=","ZmEtcmVndWxhciBmYS1leWUtc2xhc2g=","LnRvdXJuYW1lbnQtY29kZS1ibG9jaw==","aXMtaGlkZGVu","YXJpYS1sYWJlbA==","5aSn5Lya44Kz44O844OJ44KS6KGo56S6","c3RhdHVzLWJhZGdl","5Y+C5Yqg5Y+X5LuY5Lit","5aSn5Lya5LiA5pmC5Lit5pat5Lit","5aSn5Lya6YCy6KGM5Lit","77yI44GC44Gq44Gf77yJ","ZnVsbHNjcmVlbg==","dG91cm5hbWVudC1icmFja2V0LWZ1bGxzY3JlZW4=","W2RhdGEtaG9zdC13aW5uZXJd","YmVmb3JlZW5k","bWF0Y2gtcGxheWVy","d2lubmVy","6Kmm5ZCI44OH44O844K/44KS5Y+W5b6X44Gn44GN44G+44Gb44KT44Gn44GX44Gf44CC","5Yud6ICF44KS55m76Yyy","5Yud6ICF44Gr44GZ44KL","aG9zdF9zZXRfbWF0Y2hfd2lubmVy","5aSn5Lya44KS5YaN6ZaL","5aSn5Lya44KS5LiA5pmC5Lit5pat","aXMtcmVzdW1l","YnJhY2tldExpdmVQYXJ0aWNpcGFudFNlYXJjaElucHV0","5LiA6Ie044GZ44KL5Y+C5Yqg6ICF44GM6KaL44Gk44GL44KK44G+44Gb44KT44CC","44OI44O844OK44Oh44Oz44OI6KGo44GM6KaL44Gk44GL44KK44G+44Gb44KT44CC","LmJyYWNrZXQtc2V0dXAtcGxheWVyLCAuYnJhY2tldC1wbGF5ZXIsIC5hdXRvLWJyYWNrZXQtcGxheWVyLCAuYnJhY2tldC1zbG90LXBsYXllciwgLmJyYWNrZXQtbWF0Y2gtcGxheWVyLCBbY2xhc3MqPSdwbGF5ZXItbmFtZSddLCBbY2xhc3MqPSdwYXJ0aWNpcGFudC1uYW1lJ10=","44GT44Gu5Y+C5Yqg6ICF44Gv54++5Zyo44Gu44OI44O844OK44Oh44Oz44OI6KGo5LiK44Gr6KGo56S644GV44KM44Gm44GE44G+44Gb44KT44CC","LmJyYWNrZXQtc2V0dXAtcGxheWVyLCAuYnJhY2tldC1wbGF5ZXIsIC5hdXRvLWJyYWNrZXQtcGxheWVyLCAuYnJhY2tldC1zbG90LXBsYXllciwgLmJyYWNrZXQtbWF0Y2gtcGxheWVy","LmJyYWNrZXQtbGl2ZS1zZWFyY2gtaGlnaGxpZ2h0","YnJhY2tldC1saXZlLXNlYXJjaC1oaWdobGlnaHQ=","YXV0bw==","Y2VudGVy","cGFydGljaXBhbnRTZWFyY2hJbnB1dA==","5qSc57Si44GZ44KL5Y+C5Yqg6ICF5ZCN44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CC","Lmhvc3QtcGFydGljaXBhbnQtaXRlbS5zZWFyY2gtaGlnaGxpZ2h0","c2VhcmNoLWhpZ2hsaWdodA==","c21vb3Ro","IGRlbGV0ZS1kaXNhYmxlZC1hZnRlci1zdGFydA==","dHJ1ZQ==","ZmFsc2U=","W2RhdGEtYWN0aW9uXQ==","ZGVsZXRl","cGFydGljaXBhbnREZWxldGVEaXNhYmxlZFRvb2x0aXA=","cGFydGljaXBhbnQtZGVsZXRlLWRpc2FibGVkLXRvb2x0aXA=","5aSn5Lya5Lit44Gv5LiA5pmC5Lit5pat44Gn44KC5YmK6Zmk44Gv44Gn44GN44G+44Gb44KT44CCPGJyPuWkp+S8mumWi+Wni+WJjeOBq+OBlOeiuuiqjeOBj+OBoOOBleOBhOOAgg==","cG9pbnRlcm92ZXI=","LmJ1dHRvbi1kZWxldGUtcGFydGljaXBhbnQ=","ZGVsZXRlLWRpc2FibGVkLWFmdGVyLXN0YXJ0","5aSn5Lya6ZaL5aeL5b6M44Gv5YmK6Zmk44Gn44GN44G+44Gb44KT44CC","aXMtdmlzaWJsZQ==","cG9pbnRlcm91dA==","W2RhdGEtcmVvcmRlci1wYXJ0aWNpcGFudC1pZF0=","LnBhcnRpY2lwYW50LWRyYWctaGFuZGxl","cGFydGljaXBhbnQtZHJhZ2dpbmc=","cGFydGljaXBhbnQtbGlzdC1yZW9yZGVyaW5n","cGFydGljaXBhbnQtZHJhZy1hY3RpdmU=","LnBhcnRpY2lwYW50LW9yZGVyLW51bWJlcg==","5Y+C5Yqg6ICF44Gu5Lim44Gz6aCG44KS5Y+W5b6X44Gn44GN44G+44Gb44KT44Gn44GX44Gf44CC","5Y+C5Yqg6ICF44Gu5Lim44Gz6aCG44Gr5ZWP6aGM44GM44GC44KK44G+44GZ44CC","cGFydGljaXBhbnQtb3JkZXItc2F2aW5n","cmVvcmRlcl9wYXJ0aWNpcGFudHM=","5a++5oim6aCG44KS5L+d5a2Y44GX44G+44GX44Gf44CC","5aSn5Lya44KS6ZaL5aeL44GZ44KL44Gr44GvMuS6uuS7peS4iuOBruWPguWKoOiAheOBjOW/heimgeOBp+OBmeOAgg==","44OI44O844OK44Oh44Oz44OI6KGo44Gu5p6g5pWw44GM5Y+C5Yqg5Lq65pWw44Go5LiA6Ie044GX44Gm44GE44G+44Gb44KT44CC55S76Z2i44KS5pu05paw44GX44Gm44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GE44CC","44GZ44G544Gm44Gu5Y+C5Yqg6ICF44KS44OI44O844OK44Oh44Oz44OI6KGo44G46YWN572u44GX44Gm44GP44Gg44GV44GE44CC","5ZCM44GY5Y+C5Yqg6ICF44GM6KSH5pWw44Gu5p6g44Gr6YWN572u44GV44KM44Gm44GE44G+44GZ44CC6YWN572u44KS56K66KqN44GX44Gm44GP44Gg44GV44GE44CC","QkFO44GV44KM44Gf5Y+C5Yqg6ICF44CB44G+44Gf44Gv54Sh5Yq544Gq5Y+C5Yqg6ICF44GM44OI44O844OK44Oh44Oz44OI6KGo44Gr5ZCr44G+44KM44Gm44GE44G+44GZ44CC","5aSn5Lya44KS6ZaL5aeL","54++5Zyo44Gu44OI44O844OK44Oh44Oz44OI6KGo44Gu6YWN572u44KS5L+d5a2Y44GX44Gm5aSn5Lya44KS6ZaL5aeL44GX44G+44GZ44CC6ZaL5aeL5b6M44Gv5Y+C5Yqg6ICF44Gu6YWN572u44KS5aSJ5pu044Gn44GN44G+44Gb44KT44CC","6ZaL5aeL5LitLi4u","c2F2ZV9nZW5lcmF0ZWRfYnJhY2tldA==","c3RhcnRfdG91cm5hbWVudA==","YnJhY2tldFNldHVwUHJvdG90eXBl","c3RhcnQ=","44OI44O844OK44Oh44Oz44OI6KGo44Gu6YWN572u44KS5L+d5a2Y44GX44Gm5aSn5Lya44KS6ZaL5aeL44GX44G+44GX44Gf44CC","dG91cm5hbWVudCBzdGFydCBlcnJvcjo=","5aSn5Lya44KS5YaN6ZaL44GX44G+44GZ44CC","5Lit5pat5Lit44Gv5Y+C5Yqg6ICF44GM5Yud5Yip44Oc44K/44Oz44KS5oq844Gb44Gq44GP44Gq44KK44G+44GZ44CC5Li75YKs6ICF44Gu5Yud6ICF5oyH5a6a44Gv5byV44GN57aa44GN5L2/55So44Gn44GN44G+44GZ44CC","5LiA5pmC5Lit5pat","d2FybmluZw==","cmVzdW1lX3RvdXJuYW1lbnQ=","cGF1c2VfdG91cm5hbWVudA==","5aSn5Lya44KS5YaN6ZaL44GX44G+44GX44Gf44CC","5aSn5Lya44KS5LiA5pmC5Lit5pat44GX44G+44GX44Gf44CC","5Yud5Yip44KS55m76Yyy","44GT44Gu6Kmm5ZCI44Gu5Yud6ICF44Go44GX44Gm55m76Yyy44GX44G+44GZ44CC44KI44KN44GX44GE44Gn44GZ44GL77yf","55m76Yyy5LitLi4u","Y2xhaW1fdmljdG9yeQ==","5Yud5Yip44KS55m76Yyy44GX44G+44GX44Gf44CC","MeOBpOWJjeOBq+aIu+OBmQ==","5pyA5b6M44Gr55m76Yyy44GV44KM44Gf5Yud5Yip44KSMeOBpOWPluOCiua2iOOBl+OBvuOBmeOAgg==","5Yem55CG5LitLi4u","dW5kb19sYXN0X3ZpY3Rvcnk=","MeOBpOWJjeOBruWLneWIqeOCkuWPluOCiua2iOOBl+OBvuOBl+OBn+OAgg==","44OI44O844OK44Oh44Oz44OI44KS44Oq44K744OD44OI","5a++5oim6KGo44Go5Yud5pWX44OH44O844K/44KS44Oq44K744OD44OI44GX44G+44GZ44CC5Y+C5Yqg6ICF44Gv5q6L44KK44G+44GZ44CC","44Oq44K744OD44OI","44Oq44K744OD44OI5LitLi4u","cmVzZXRfdG91cm5hbWVudA==","44OI44O844OK44Oh44Oz44OI44KS44Oq44K744OD44OI44GX44G+44GX44Gf44CC","57WC5LqG5riI44G/5aSn5Lya44KS5YaN6ZaL","44GT44Gu5aSn5Lya44KS5YaN6ZaL44GX44G+44GZ44CC5Y+C5Yqg6ICF44O75a++5oim44Kr44O844OJ44O76Kmm5ZCI57WQ5p6c44O7QkFO44Gq44Gp44Gu54q25oWL44Gv44Gd44Gu44G+44G+5byV44GN57aZ44GM44KM44G+44GZ44CC","5aSn5Lya44KS5YaN6ZaL44GZ44KL","5YaN6ZaL5LitLi4u","cmVvcGVuX3RvdXJuYW1lbnQ=","5YWo6YOo44Gu5aSn5Lya44KS57WC5LqG","6Ieq5YiG44GM5Li75YKs44GX44Gm44GE44KL5pyq57WC5LqG44Gu5aSn5Lya44KS44GZ44G544Gm57WC5LqG44GX44G+44GZ44CC5aSn5Lya44OH44O844K/44Gv5YmK6Zmk44GV44KM44G+44Gb44KT44CC","5YWo6YOo57WC5LqG44GZ44KL","57WC5LqG5LitLi4u","YXJjaGl2ZV9hbGxfaG9zdF90b3VybmFtZW50cw==","57WC5LqG44GZ44KL5aSn5Lya44Gv44GC44KK44G+44Gb44KT44Gn44GX44Gf44CC","5YWo6YOo44Gu5aSn5Lya44KS5YmK6Zmk","6Ieq5YiG44GM5Li75YKs44GZ44KL44GZ44G544Gm44Gu5aSn5Lya44Go44CB5Y+C5Yqg6ICF44O75a++5oim44Kr44O844OJ44O76Kmm5ZCI57WQ5p6c44Gq44Gp44Gu6Zai6YCj44OH44O844K/44KS5a6M5YWo44Gr5YmK6Zmk44GX44G+44GZ44CC44GT44Gu5pON5L2c44Gv5Y+W44KK5raI44Gb44G+44Gb44KT44CC","44GZ44G544Gm5YmK6Zmk44GZ44KL","5YmK6Zmk5LitLi4u","ZGVsZXRlX2FsbF9ob3N0X3RvdXJuYW1lbnRz","5YmK6Zmk44GZ44KL5aSn5Lya44Gv44GC44KK44G+44Gb44KT44Gn44GX44Gf44CC","5aSn5Lya44KS57WC5LqG","44GT44Gu5aSn5Lya44KS57WC5LqG44GX44G+44GZ44CC5Y+C5Yqg6ICF44O75a++5oim44Kr44O844OJ44O76Kmm5ZCI57WQ5p6c44Gv5YmK6Zmk44GV44KM44G+44Gb44KT44CC","5aSn5Lya44KS57WC5LqG44GZ44KL","YXJjaGl2ZV90b3VybmFtZW50","5aSn5Lya44KS57WC5LqG44GX44G+44GX44Gf44CC","ZGFuZ2Vy","c3VzcGVuZA==","5LiA5pmC44OW44Ot44OD44Kv","QkFO44GZ44KL","5Y+C5Yqg6ICF44KS5YmK6Zmk","5YmK6Zmk44GZ44KL","aG9zdF9kZWxldGVfcGFydGljaXBhbnQ=","5Y+C5Yqg6ICF44KS5YmK6Zmk44GX44G+44GX44Gf44CC","44OW44Ot44OD44Kv6Kej6Zmk","6Kej6Zmk44GZ44KL","c2V0X3BhcnRpY2lwYW50X3N0YXR1cw==","cG9zdGdyZXNfY2hhbmdlcw==","cHVibGlj","REVMRVRF","VVBEQVRF","UmVhbHRpbWUgcmVmcmVzaCBlcnJvcjo=","dG91cm5hbWVudC1saXN0LXJlYWx0aW1l","VG91cm5hbWVudCBsaXN0IHJlYWx0aW1lIHJlZnJlc2ggZXJyb3I6","44GT44Gu5aSn5Lya44Gv5Li75YKs6ICF44Gr44KI44Gj44Gm5YmK6Zmk44GV44KM44G+44GX44Gf44CC","aW5mbw==","UmVhbHRpbWUgdW5zdWJzY3JpYmU6","VG91cm5hbWVudCByZWxvYWQgZXJyb3I6","5aSn5Lya44Kz44O844OJ44KS6Zqg44GZ","5aSn5Lya44Kz44O844OJ44KS44Kz44OU44O844GX44G+44GX44Gf44CC","aG9tZQ==","dG91cm5hbWVudC55b3V0dWJlSG9zdEhhbmRsZQ==","WW91VHViZeODj+ODs+ODieODq+OBruW+qeWFg+OCkuOCueOCreODg+ODl+OBl+OBvuOBl+OBnw==","aW5wdXQ=","WW91VHViZeODj+ODs+ODieODq+OCkuS/neWtmOOBp+OBjeOBvuOBm+OCk+OBp+OBl+OBnw==","eW91dHViZUNyZWF0ZVNjcmVlbg==","cGFnZQ==","dG91cm5hbWVudA==","5a6f6KGM44GZ44KL","ZGlhbG9nLXN1Y2Nlc3M=","ZGlhbG9nLWRhbmdlcg==","YnV0dG9uLWRhbmdlcg==","YnV0dG9uLXN1Y2Nlc3M=","RklOQUw=","U0VNSUZJTkFM","5Y+C5Yqg6ICF44KS5LiA5pmC44OW44Ot44OD44Kv44GX44G+44GX44Gf44CC","5Y+C5Yqg6ICF44KSQkFO44GX44G+44GX44Gf44CC","44OW44Ot44OD44Kv44KS6Kej6Zmk44GX44G+44GX44Gf44CC","VW5rbm93biBlcnJvcg==","YXV0aGVudGljYXRpb24gcmVxdWlyZWQ=","6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CC44Oa44O844K444KS5YaN6Kqt44G/6L6844G/44GX44Gm44GP44Gg44GV44GE44CC","dG91cm5hbWVudCBuYW1lIGlzIHJlcXVpcmVk","dG91cm5hbWVudCBuYW1lIGlzIHRvbyBsb25n","5aSn5Lya5ZCN44GM6ZW344GZ44GO44G+44GZ44CC","ZGlzcGxheSBuYW1lIGlzIHJlcXVpcmVk","ZGlzcGxheSBuYW1lIGlzIHRvbyBsb25n","5Y+C5Yqg6ICF5ZCN44GvMzDmloflrZfku6XlhoXjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","dG91cm5hbWVudCBub3QgZm91bmQgb3Igbm90IGFjY2VwdGluZyBwYXJ0aWNpcGFudHM=","5aSn5Lya44GM6KaL44Gk44GL44KJ44Gq44GE44GL44CB44GZ44Gn44Gr5Y+C5Yqg5Y+X5LuY44KS57WC5LqG44GX44Gm44GE44G+44GZ44CC","dG91cm5hbWVudCBub3QgZm91bmQ=","YWxyZWFkeSBqb2luZWQ=","44GT44Gu44OW44Op44Km44K244Gn44Gv44GZ44Gn44Gr5aSn5Lya44G45Y+C5Yqg44GX44Gm44GE44G+44GZ44CC","b25seSB0aGUgdG91cm5hbWVudCBob3N0IGNhbiBwZXJmb3JtIHRoaXMgYWN0aW9u","b25seSB0aGUgdG91cm5hbWVudCBob3N0IGNhbiByZW9yZGVyIHBhcnRpY2lwYW50cw==","44GT44Gu5pON5L2c44KS6KGM44GG5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC","cGFydGljaXBhbnRzIGNhbiBvbmx5IGJlIHJlb3JkZXJlZCBiZWZvcmUgdGhlIHRvdXJuYW1lbnQgc3RhcnRz","5Y+C5Yqg6ICF44Gu5Lim44Gz5pu/44GI44Gv5aSn5Lya6ZaL5aeL5YmN44Gu44G/6KGM44GI44G+44GZ44CC","cGFydGljaXBhbnQgbGlzdCBkb2VzIG5vdCBtYXRjaCB0b3VybmFtZW50IHBhcnRpY2lwYW50cw==","5Y+C5Yqg6ICF5oOF5aCx44GM5pu05paw44GV44KM44G+44GX44Gf44CC5pyA5paw44Gu5Y+C5Yqg6ICF5LiA6Kan44KS6Kqt44G/6L6844G/55u044GX44Gm44GP44Gg44GV44GE44CC","ZHVwbGljYXRlIHBhcnRpY2lwYW50IGRldGVjdGVk","5Y+C5Yqg6ICF44Gu5Lim44Gz6aCG44Gr6YeN6KSH44GM44GC44KK44G+44GZ44CC","aW52YWxpZCBwYXJ0aWNpcGFudCBkZXRlY3RlZA==","5Y+C5Yqg6ICF44Gu5Lim44Gz6aCG44Gr54Sh5Yq544Gq44OH44O844K/44GM44GC44KK44G+44GZ44CC","eW91IGFyZSB0ZW1wb3JhcmlseSBibG9ja2Vk","54++5Zyo44CB5LiA5pmC44OW44Ot44OD44Kv44GV44KM44Gm44GE44KL44Gf44KB5Yud5Yip44KS55m76Yyy44Gn44GN44G+44Gb44KT44CC","eW91IGFyZSBibG9ja2Vk","YmxvY2tlZCBwYXJ0aWNpcGFudCBjYW5ub3QgYWR2YW5jZQ==","44GT44Gu5aSn5Lya44G444Gu5Y+C5Yqg44GM44OW44Ot44OD44Kv44GV44KM44Gm44GE44G+44GZ44CC","eW91IGFyZSBub3QgYSBwYXJ0aWNpcGFudA==","44GC44Gq44Gf44Gv44GT44Gu5aSn5Lya44Gu5Y+C5Yqg6ICF44Gn44Gv44GC44KK44G+44Gb44KT44CC","cGFydGljaXBhbnQgbm90IGZvdW5k","5Y+C5Yqg6ICF44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CC","aW52YWxpZCBwYXJ0aWNpcGFudCBzdGF0dXM=","5Y+C5Yqg6ICF44Gu54q25oWL44GM5q2j44GX44GP44GC44KK44G+44Gb44KT44CC","eW91IGFyZSBub3QgYSBwbGF5ZXIgaW4gdGhpcyBtYXRjaA==","d2lubmVyIGlzIG5vdCBhIHBsYXllciBpbiB0aGlzIG1hdGNo","5oyH5a6a44GV44KM44Gf5Y+C5Yqg6ICF44Gv44GT44Gu6Kmm5ZCI44Gu6YG45omL44Gn44Gv44GC44KK44G+44Gb44KT44CC","bWF0Y2ggaXMgYWxyZWFkeSBmaW5pc2hlZA==","44GT44Gu6Kmm5ZCI44Gv44GZ44Gn44Gr57WC5LqG44GX44Gm44GE44G+44GZ44CC","bWF0Y2ggaXMgbm90IGFjdGl2ZQ==","44GT44Gu6Kmm5ZCI44Gv54++5Zyo6YCy6KGM5Lit44Gn44Gv44GC44KK44G+44Gb44KT44CC","bWF0Y2ggaXMgbm90IHJlYWR5","5a++5oim55u45omL44GM44G+44Gg5rG644G+44Gj44Gm44GE44G+44Gb44KT44CC","bWF0Y2ggbm90IGZvdW5k","6Kmm5ZCI44OH44O844K/44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CC","YXQgbGVhc3Q=","bm90IGVub3VnaA==","YWxyZWFkeSBzdGFydGVk","44GT44Gu5aSn5Lya44Gv44GZ44Gn44Gr6ZaL5aeL44GV44KM44Gm44GE44G+44GZ44CC","bm8gdmljdG9yeQ==","bm90aGluZyB0byB1bmRv","5Y+W44KK5raI44Gb44KL5Yud5Yip6KiY6Yyy44GM44GC44KK44G+44Gb44KT44CC","U3VwYWJhc2UgZXJyb3I6","5Yem55CG5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CC","44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GE44CC","dG9hc3QtaGlkaW5n","dG9hc3QtcHJlcGFyaW5n","dG9hc3QtY2xpY2stdG8tY2xvc2U=","44Kv44Oq44OD44Kv44GX44Gm6ZaJ44GY44KL","YmVmb3JldW5sb2Fk","Ymx1cg==","YnJhY2tldE1hbnVhbEJ1bGtCdXR0b24=","YnJhY2tldFJhbmRvbUJ1dHRvbg==","YnJhY2tldENvbmZpcm1CdXR0b24=","YnJhY2tldFNldHVwUGFydGljaXBhbnRQb29s","YnVsa1BhcnRpY2lwYW50VGV4dGFyZWE=","YnVsa1BhcnRpY2lwYW50QWRkQnV0dG9u","YnVsa1BhcnRpY2lwYW50VG9nZ2xlQnV0dG9u","W2RhdGEtYnJhY2tldC1wb29sLXRvZ2dsZV0=","W2RhdGEtYnJhY2tldC1wb29sLXNlYXJjaF0=","W2RhdGEtYnJhY2tldC1wb29sLXNlYXJjaC1pbnB1dF0=","I2JyYWNrZXRTZXR1cFBhcnRpY2lwYW50UG9vbCAuYnJhY2tldC1zZXR1cC1wbGF5ZXIuc2VhcmNoLWhpZ2hsaWdodA==","bmVhcmVzdA==","W2RhdGEtYnJhY2tldC1wb29sLXJlc2l6ZV0=","I2JyYWNrZXRTZXR1cFBhcnRpY2lwYW50UG9vbCAuYnJhY2tldC1zZXR1cC1wb29sLWxpc3Q=","bm9uZQ==","aXMtcmVzaXppbmctcGFydGljaXBhbnQtcG9vbA==","LmJyYWNrZXQtc2V0dXAtY29udHJvbHM=","YnJhY2tldExpdmVQYXJ0aWNpcGFudFNlYXJjaE1hcmtlcg==","c3Bhbg==","YWZ0ZXJlbmQ=","YnJhY2tldC1mdWxsc2NyZWVuLW1vZGU=","YnJhY2tldC1saXZlLW1vZGU=","YnJhY2tldC1lZGl0LW1vZGU=","LmJyYWNrZXQtc2V0dXAtcHJpbWFyeS1hY3Rpb25z","LmJ1bGstcGFydGljaXBhbnQtYm94","LmJyYWNrZXQtYXV0by1zdW1tYXJ5","LmJyYWNrZXQtc2V0dXAtbm90ZQ==","YnJhY2tldEF1dG9QbGF5ZXJDb3VudA==","YnJhY2tldEF1dG9NYXRjaENvdW50","YnJhY2tldEF1dG9TbG90Q291bnQ=","LmJyYWNrZXQtYXV0by1zdW1tYXJ5ID4gZGl2","aXMtcGFydGljaXBhbnQtbGltaXQ=","aXMtYXNzaWduZWQ=","aXMtc3VzcGVuZGVk","77yI5LiA5pmC44OW44Ot44OD44Kv77yJ","W2RhdGEtc2V0dXAtcGFydGljaXBhbnQtaWRd","aXMtbXktc2xvdA==","ZnVsbHNjcmVlbkJyYWNrZXRUb3BTY3JvbGxiYXI=","ZnVsbHNjcmVlbi1icmFja2V0LXRvcC1zY3JvbGxiYXI=","PGRpdiBjbGFzcz0iZnVsbHNjcmVlbi1icmFja2V0LXRvcC1zY3JvbGxiYXItaW5uZXIiPjwvZGl2Pg==","c2Nyb2xs","YnJhY2tldFBhbmVsVGl0bGU=","YnJhY2tldFBhbmVsU3VidGl0bGU=","YnJhY2tldFZpZXdlck5hbWU=","44OI44O844OK44Oh44Oz44OI6KGo","VE9VUk5BTUVOVCBCUkFDS0VU","44OI44O844OK44Oh44Oz44OI5L2c5oiQ","QVVUTyBCUkFDS0VUIFNFVFVQ","PGRpdiBjbGFzcz0iZnV0dXJlLXNsb3QiPuWLneiAheW+heOBoTwvZGl2Pg==","IGlzLW15LXNsb3Q=","aXMtd2lubmVy","PGIgY2xhc3M9Indpbm5lci1iYWRnZSI+5Yud5YipPC9iPg==","W2RhdGEtZ2VuZXJhdGVkLXNlbGYtd2luXSxbZGF0YS1nZW5lcmF0ZWQtaG9zdC13aW5d","ZGF0YS1nZW5lcmF0ZWQtaG9zdC13aW4=","44GT44Gu6YG45omL44KS5Yud6ICF44Go44GX44Gm55m76Yyy44GX44G+44GZ44CC44KI44KN44GX44GE44Gn44GZ44GL77yf","LmF1dG8tbWF0Y2gtZmlyc3Q=","LmJyYWNrZXQtaGFsZi1yaWdodA==","LmJyYWNrZXQtaGFsZi1yaWdodCAuYXV0by1tYXRjaC1maXJzdA==","LmJyYWNrZXQtaGFsZi1sZWZ0IC5hdXRvLW1hdGNoLWZpcnN0","aXMtbGl2ZS13aW5uZXI=","Lndpbm5lci1iYWRnZQ==","LmJyYWNrZXQtZmluYWwtbWF0Y2g=","LmJyYWNrZXQtY2hhbXBpb24tYm94","LmF1dG8tbWF0Y2g=","LmJyYWNrZXQtd2lubmVyLWJveA==","V0lOTkVS","5bem5Y+z44GL44KJ5Lit5aSu44G45Yud44Gh5LiK44GM44KL44OI44O844OK44Oh44Oz44OI6KGo","5bem44GL44KJ5Y+z44G45Yud44Gh5LiK44GM44KL44OI44O844OK44Oh44Oz44OI6KGo","bGVmdA==","5rqW44CF5rG65Yud","TEVGVCAx5Zue5oim","cmlnaHQ=","UklHSFQgMeWbnuaIpg==","bWlycm9y","YnVsa1BhcnRpY2lwYW50Qm9keQ==","c2hvd24=","I2JyYWNrZXRTZXR1cENhbnZhcyAuYXV0by1icmFja2V0","OnNjb3BlID4gLmJyYWNrZXQtcm91bmQtbWF0Y2hlcyA+IC5hdXRvLW1hdGNo","OnNjb3BlID4gLmJyYWNrZXQtcm91bmQtbWF0Y2hlcw==","YWJzb2x1dGU=","dHJhbnNsYXRlWSgtNTAlKQ==","YXV0by1icmFja2V0LXN0YW5kYXJk","OnNjb3BlID4gLmJyYWNrZXQtcm91bmQtY29sdW1uOm5vdCguYnJhY2tldC13aW5uZXItY29sdW1uKQ==","LmJyYWNrZXQtd2lubmVyLWNvbHVtbg==","LmJyYWNrZXQtaGFsZi1sZWZ0ID4gLmJyYWNrZXQtcm91bmQtY29sdW1u","LmJyYWNrZXQtaGFsZi1yaWdodCA+IC5icmFja2V0LXJvdW5kLWNvbHVtbg==","LmJyYWNrZXQtaGFsZi1sZWZ0ID4gLmJyYWNrZXQtcm91bmQtY29sdW1uOmxhc3QtY2hpbGQgLmF1dG8tbWF0Y2g=","LmJyYWNrZXQtaGFsZi1yaWdodCA+IC5icmFja2V0LXJvdW5kLWNvbHVtbjpmaXJzdC1jaGlsZCAuYXV0by1tYXRjaA==","LmJyYWNrZXQtY2VudGVyLWZpbmFs","LmF1dG8tYnJhY2tldA==","LmJyYWNrZXQtY29ubmVjdGlvbi1sYXllcg==","aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmc=","Y2xhc3M=","YnJhY2tldC1jb25uZWN0aW9uLWxheWVy","d2lkdGg=","aGVpZ2h0","dmlld0JveA==","cGF0aA==","YnJhY2tldC1jb25uZWN0aW9uLXBhdGg=","YnJhY2tldC1jb25uZWN0aW9uLXBhdGggYnJhY2tldC1maW5hbC1jb25uZWN0aW9u","bmFtZS1maXQtc21hbGxlcg==","bmFtZS1maXQtc21hbGw=","YnJhY2tldE5hbWVIb3ZlclRvb2x0aXA=","YnJhY2tldC1uYW1lLWhvdmVyLXRvb2x0aXA=","LmF1dG8tYnJhY2tldCAuYnJhY2tldC1wbGF5ZXItbmFtZVtkYXRhLWZ1bGwtbmFtZV0=","YmxvY2s=","aXMtYnll","aXMtc2VlZA==","aXMtZmlsbGVk","aXMtZW1wdHk=","PGIgY2xhc3M9InNlZWQtYmFkZ2UiPuOCt+ODvOODieaeoDwvYj4=","PHNwYW4gY2xhc3M9ImJ5ZS1leGVtcHRpb24iPjHlm57miKblhY3pmaQ8L3NwYW4+","bnVsbA==","5Y+C5Yqg6ICF44KSMuS6uuS7peS4iui/veWKoOOBl+OBpuOBj+OBoOOBleOBhOOAgg==","6YWN572u44KS56K65a6a44GX44G+44GX44Gf44CCQllF44Go44K344O844OJ5p6g44KS6KGo56S644GX44G+44GZ44CC","dG91cm5hbWVudE1hbnVhbEJ1bGtQbGFjZW1lbnQ=","5Yil44Km44Kj44Oz44OJ44Km44KS6ZaL44GR44G+44Gb44KT44Gn44GX44Gf44CC44OW44Op44Km44K244Gu44Od44OD44OX44Ki44OD44OX44KS6Kix5Y+v44GX44Gm44GP44Gg44GV44GE44CC","54++5Zyo44Gv44OI44O844OK44Oh44Oz44OI6KGo44KS57eo6ZuG44Gn44GN44G+44Gb44KT44CC","56m66KGM44Gv5L2/55So44Gn44GN44G+44Gb44KT44CC44K344O844OJ5p6g44Gv44CMKioq44CN44Go6KiY6LyJ44GX44Gm44GP44Gg44GV44GE44CC","5omL5YuV5LiA5ous6YWN572u44Gn44OI44O844OK44Oh44Oz44OI6KGo44Gu6YWN572u44KS56K65a6a44GX44G+44GX44Gf44CC","5Y+C5Yqg6ICF44KS44Op44Oz44OA44Og44Gr6YWN572u44GX44CB44K344O844OJ5p6g44KS5Z2H562J44Gr5YiG5pWj44GX44G+44GX44Gf44CC","YnV0dG9u","YnJhY2tldC1zZXR1cC1kcmFnLWdob3N0","YnJhY2tldC1zZXR1cC1kcmFnZ2luZw==","LmJyYWNrZXQtc2V0dXAtc2xvdC5pcy1kcm9wLXRhcmdldA==","aXMtZHJvcC10YXJnZXQ=","W2RhdGEtc2V0dXAtc2xvdC1pbmRleF0=","I2JyYWNrZXRTZXR1cFBhcnRpY2lwYW50UG9vbA==","YnVsa1BhcnRpY2lwYW50UHJldmlld0NvdW50","6L+95Yqg44GZ44KL5Y+C5Yqg6ICF5ZCN44KSMeihjOOBq+OBpOOBjTHkurrlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgII=","aG9zdF9hZGRfcGFydGljaXBhbnRzX2J1bGs=","YnVsayBwYXJ0aWNpcGFudCBhZGQgZXJyb3I6","5LiA5ous6L+95Yqg55So44Gu44OH44O844K/44OZ44O844K56Kit5a6a44GM44G+44Gg5b+F6KaB44Gn44GZ44CC","eW91dHViZS1jcmVhdGU=","aW5zdGFudA==","eW91dHViZUNyZWF0ZVRvZ2dsZQ==","eW91dHViZUNyZWF0ZUJhY2tCdXR0b24="];const __to_cache=[];const __to_text_decoder=new TextDecoder();function __to_decode(i){return __to_cache[i]??(__to_cache[i]=__to_text_decoder.decode(Uint8Array.from(atob(__to_strings[i]),c=>c.charCodeAt(0))))}
const SUPABASE_URL = __to_decode(0);
const SUPABASE_KEY = __to_decode(1);
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
let currentUser = null;
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
const messageElement = document.getElementById(__to_decode(2));
const homeScreen = document.getElementById(__to_decode(3));
const tournamentScreen = document.getElementById(__to_decode(4));
const tournamentModeSelection = document.getElementById(__to_decode(5));
const normalTournamentMode = document.getElementById(__to_decode(6));
const youtubeTournamentMode = document.getElementById(__to_decode(7));
const normalTournamentModeButton = document.getElementById(__to_decode(8));
const youtubeTournamentModeButton = document.getElementById(__to_decode(9));
const normalTournamentModeBackButton = document.getElementById(__to_decode(10));
const youtubeTournamentModeBackButton = document.getElementById(__to_decode(11));
const createYoutubeTournamentForm = document.getElementById(__to_decode(12));
const youtubeTournamentName = document.getElementById(__to_decode(13));
const youtubeHostHandle = document.getElementById(__to_decode(14));
const youtubeStreamUrl = document.getElementById(__to_decode(15));
const youtubeCreateError = document.getElementById(__to_decode(16));
const createYoutubeTournamentButton = document.getElementById(__to_decode(17));
const createTournamentForm = document.getElementById(__to_decode(18));
const tournamentNameInput = document.getElementById(__to_decode(19));
const createTournamentButton = document.getElementById(__to_decode(20));
const joinTournamentForm = document.getElementById(__to_decode(21));
const tournamentCodeInput = document.getElementById(__to_decode(22));
const displayNameInput = document.getElementById(__to_decode(23));
const joinTournamentButton = document.getElementById(__to_decode(24));
const myTournamentList = document.getElementById(__to_decode(25));
const showArchivedTournamentsButton = document.getElementById(__to_decode(26));
const archivedTournamentList = document.getElementById(__to_decode(27));
const archiveAllHostTournamentsButton = document.getElementById(__to_decode(28));
const deleteAllHostTournamentsButton = document.getElementById(__to_decode(29));
const currentTournamentName = document.getElementById(__to_decode(30));
const currentTournamentCode = document.getElementById(__to_decode(31));
const copyTournamentCodeButton = document.getElementById(__to_decode(32));
const toggleTournamentCodeButton = document.getElementById(__to_decode(33));
let isTournamentCodeVisible = false;
const matchupParticipantCount = document.getElementById(__to_decode(34));
const hostParticipantCount = document.getElementById(__to_decode(35));
const tournamentStatus = document.getElementById(__to_decode(36));
const fullscreenBracketButton = document.getElementById(__to_decode(37));
const pauseTournamentButton = document.getElementById(__to_decode(38));
const bracket = document.getElementById(__to_decode(39));
const myMatchArea = document.getElementById(__to_decode(40));
const myMatchInfo = document.getElementById(__to_decode(41));
const victoryButton = document.getElementById(__to_decode(42));
const hostControls = document.getElementById(__to_decode(43));
const startTournamentButton = document.getElementById(__to_decode(44));
const undoButton = document.getElementById(__to_decode(45));
const resetTournamentButton = document.getElementById(__to_decode(46));
const reopenTournamentButton = document.getElementById(__to_decode(47));
const archiveTournamentButton = document.getElementById(__to_decode(48));
const hostParticipantList = document.getElementById(__to_decode(49));
const matchupBuilder = document.getElementById(__to_decode(50));
const matchupParticipantList = document.getElementById(__to_decode(51));
const addMatchupButton = document.getElementById(__to_decode(52));
const matchupCardList = document.getElementById(__to_decode(53));
const leaveTournamentButton = document.getElementById(__to_decode(54));
const dialogOverlay = document.getElementById(__to_decode(55));
const dialogTitle = document.getElementById(__to_decode(56));
const dialogMessage = document.getElementById(__to_decode(57));
const dialogConfirm = document.getElementById(__to_decode(58));
const dialogCancel = document.getElementById(__to_decode(59));
let youtubeLinkCheckTimer = null;
let youtubeLinkCountdownTimer = null;
let youtubeLinkExpiresAt = 0;
let youtubeLinkBusy = false;
let youtubeLinkDetailsHidden = false;
let youtubeLinkHasCode = false;
function updateYoutubeLinkView() {
    const challenge = document.getElementById(__to_decode(60));
    const button = document.getElementById(__to_decode(61));
    const reissue = document.getElementById(__to_decode(62));
    const visible = youtubeLinkHasCode && !youtubeLinkDetailsHidden;
    challenge?.classList.toggle(__to_decode(63), !visible);
    if (button) {
        button.innerHTML = youtubeLinkHasCode
            ? `YouTube 連携型の<br>大会閲覧コード${visible ? "非表示" : "表示"}`
            : __to_decode(64);
        button.setAttribute(__to_decode(65), String(visible));
    }
    reissue?.classList.toggle(__to_decode(63), !visible);
}
function updateYoutubeLinkCountdown() {
    const element = document.getElementById(__to_decode(66));
    if (!element || !youtubeLinkExpiresAt)
        return;
    const seconds = Math.max(0, Math.ceil((youtubeLinkExpiresAt - Date.now()) / 1000));
    element.textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    if (seconds === 0) {
        clearInterval(youtubeLinkCountdownTimer);
        youtubeLinkCountdownTimer = null;
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        const status = document.getElementById(__to_decode(67));
        if (status && status.textContent === __to_decode(68)) {
            status.textContent = __to_decode(69);
        }
    }
}
async function checkYoutubeLinkStatus() {
    const status = document.getElementById(__to_decode(67));
    const { data, error } = await supabaseClient.rpc(__to_decode(70));
    if (error) {
        if (status)
            status.textContent = __to_decode(71);
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        return;
    }
    if (data?.linked) {
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        if (status)
            status.textContent = __to_decode(72);
        await loadMyTournaments();
    }
    else if (!data?.pending) {
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = null;
        if (status)
            status.textContent = __to_decode(69);
    }
}
async function startYoutubeLink() {
    if (youtubeLinkBusy || !currentUser)
        return;
    if (youtubeLinkHasCode) {
        youtubeLinkDetailsHidden = !youtubeLinkDetailsHidden;
        updateYoutubeLinkView();
        return;
    }
    await issueYoutubeLinkCode();
}
async function issueYoutubeLinkCode() {
    if (youtubeLinkBusy || !currentUser)
        return;
    youtubeLinkBusy = true;
    const button = document.getElementById(__to_decode(61));
    const reissue = document.getElementById(__to_decode(62));
    const status = document.getElementById(__to_decode(67));
    if (button)
        button.disabled = true;
    if (reissue)
        reissue.disabled = true;
    try {
        const { data, error } = await supabaseClient.rpc(__to_decode(73));
        if (error)
            throw error;
        document.getElementById(__to_decode(74)).textContent = data;
        youtubeLinkHasCode = true;
        youtubeLinkDetailsHidden = false;
        youtubeLinkExpiresAt = Date.now() + 10 * 60 * 1000;
        clearInterval(youtubeLinkCountdownTimer);
        updateYoutubeLinkCountdown();
        youtubeLinkCountdownTimer = setInterval(updateYoutubeLinkCountdown, 1000);
        if (status)
            status.textContent = __to_decode(68);
        clearInterval(youtubeLinkCheckTimer);
        youtubeLinkCheckTimer = setInterval(checkYoutubeLinkStatus, 4000);
        updateYoutubeLinkView();
    }
    catch (error) {
        const raw = error?.message || __to_decode(75);
        const message = /Please wait before requesting another code/i.test(raw)
            ? __to_decode(76) : __to_decode(77) + raw;
        if (youtubeLinkHasCode) {
            if (status)
                status.textContent = message;
            youtubeLinkDetailsHidden = false;
            updateYoutubeLinkView();
        }
        else {
            showMessage(message, __to_decode(78));
        }
    }
    finally {
        youtubeLinkBusy = false;
        if (button)
            button.disabled = false;
        if (reissue)
            reissue.disabled = false;
    }
}
document.addEventListener(__to_decode(79), initializeApp);
async function initializeApp() {
    try {
        setGlobalLoading(true);
        await ensureAnonymousSession();
        restoreYoutubeHostHandle();
        registerEvents();
        document.getElementById(__to_decode(61))?.addEventListener(__to_decode(80), startYoutubeLink);
        document.getElementById(__to_decode(62))?.addEventListener(__to_decode(80), issueYoutubeLinkCode);
        subscribeTournamentListRealtime();
        window.addEventListener(__to_decode(81), handleBrowserHistoryNavigation);
        const tournamentAccessToken = getTournamentAccessTokenFromURL();
        if (tournamentAccessToken) {
            await openTournamentByAccessToken(tournamentAccessToken, { updateHistory: false });
        }
        else {
            showHome();
            restoreHomeModeAfterReload();
            await loadMyTournaments();
            renderYoutubeCreatePage();
        }
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setGlobalLoading(false);
    }
}
async function loadMyTournaments() {
    if (!currentUser) {
        return;
    }
    const { data: hostedTournaments, error: hostedError } = await supabaseClient
        .from(__to_decode(82))
        .select(__to_decode(83))
        .eq(__to_decode(84), currentUser.id);
    if (hostedError) {
        throw hostedError;
    }
    const { data: participationRows, error: participationError } = await supabaseClient
        .from(__to_decode(85))
        .select(`
            tournament_id,
            tournaments (
                id,
                tournament_code,
                name,
                tournament_mode,
                status,
                archived_at,
                created_at
            )
            `)
        .eq(__to_decode(86), currentUser.id);
    if (participationError) {
        throw participationError;
    }
    const tournamentMap = new Map();
    for (const tournament of hostedTournaments || []) {
        tournamentMap.set(tournament.id, {
            ...tournament,
            role: __to_decode(87)
        });
    }
    for (const row of participationRows || []) {
        const tournament = row.tournaments;
        if (!tournament) {
            continue;
        }
        if (tournamentMap.has(tournament.id)) {
            continue;
        }
        tournamentMap.set(tournament.id, {
            ...tournament,
            role: __to_decode(88)
        });
    }
    const tournaments = Array.from(tournamentMap.values());
    const tournamentIds = tournaments.map(tournament => tournament.id);
    if (tournamentIds.length > 0) {
        const { data: winnerMatches, error: winnerMatchesError } = await supabaseClient
            .from(__to_decode(89))
            .select(__to_decode(90))
            .in(__to_decode(91), tournamentIds)
            .not(__to_decode(92), "is", null);
        if (winnerMatchesError) {
            throw winnerMatchesError;
        }
        const championIdByTournament = new Map();
        for (const match of winnerMatches || []) {
            const current = championIdByTournament.get(match.tournament_id);
            if (!current
                ||
                    Number(match.round_number) >
                        Number(current.round_number)) {
                championIdByTournament.set(match.tournament_id, match);
            }
        }
        const championIds = [
            ...new Set([...championIdByTournament.values()]
                .map(match => match.winner_id)
                .filter(Boolean))
        ];
        const championNameById = new Map();
        if (championIds.length > 0) {
            const { data: championParticipants, error: championParticipantsError } = await supabaseClient
                .from(__to_decode(85))
                .select(__to_decode(93))
                .in("id", championIds);
            if (championParticipantsError) {
                throw championParticipantsError;
            }
            for (const participant of championParticipants || []) {
                championNameById.set(participant.id, participant.display_name);
            }
        }
        for (const tournament of tournaments) {
            if (tournament.status !== __to_decode(94)) {
                continue;
            }
            const finalWinner = championIdByTournament.get(tournament.id);
            if (finalWinner?.winner_id) {
                tournament.champion_name =
                    championNameById.get(finalWinner.winner_id) || "";
            }
        }
    }
    tournaments.sort((a, b) => new Date(b.created_at) -
        new Date(a.created_at));
    renderMyTournaments(tournaments);
}
function renderMyTournaments(tournaments) {
    const activeTournaments = tournaments.filter(tournament => !tournament.archived_at);
    const archivedTournaments = tournaments.filter(tournament => tournament.archived_at);
    if (activeTournaments.length === 0) {
        myTournamentList.innerHTML = `
            <div class="empty-state">
                参加中の大会はありません。
            </div>
        `;
    }
    else {
        myTournamentList.innerHTML =
            activeTournaments
                .map(tournament => createMyTournamentHTML(tournament))
                .join("");
    }
    if (archivedTournaments.length === 0) {
        showArchivedTournamentsButton
            .classList
            .add(__to_decode(63));
        archivedTournamentList
            .classList
            .add(__to_decode(63));
        archivedTournamentList
            .innerHTML = "";
    }
    else {
        showArchivedTournamentsButton
            .classList
            .remove(__to_decode(63));
        archivedTournamentList.innerHTML =
            archivedTournaments
                .map(tournament => createMyTournamentHTML(tournament))
                .join("");
    }
}
function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", __to_decode(95))
        .replaceAll("<", __to_decode(96))
        .replaceAll(">", __to_decode(97))
        .replaceAll('"', __to_decode(98))
        .replaceAll("'", __to_decode(99));
}
function createMyTournamentHTML(tournament) {
    const roleText = tournament.role === __to_decode(87)
        ? "主催者"
        : "参加者";
    let statusText = "開催前";
    if (tournament.status === __to_decode(100)) {
        statusText =
            "開催中";
    }
    else if (tournament.status === __to_decode(94)) {
        statusText = __to_decode(101);
    }
    if (tournament.archived_at) {
        statusText = __to_decode(102);
    }
    return `
        <div class="my-tournament-item">

            <div class="my-tournament-info">

                <div class="my-tournament-type">
                    トーナメント種類：「${tournament.tournament_mode === __to_decode(103) ? __to_decode(104) : __to_decode(105)}」
                </div>

                <strong class="my-tournament-name">
                    ${escapeHtml(tournament.name)}
                </strong>

                <div class="my-tournament-meta">
                    ${roleText}
                    ・
                    ${statusText}
                </div>

                ${tournament.champion_name
        ? `
                        <div class="my-tournament-champion">
                            優勝者：${escapeHtml(tournament.champion_name)}
                        </div>
                        `
        : ""}

            </div>

            <button
                class="button button-secondary my-tournament-open-button"
                type="button"
                data-tournament-code="${escapeHtml(tournament.tournament_code)}"
            >
                大会ページへ
            </button>

        </div>
    `;
}
async function ensureAnonymousSession() {
    const { data: sessionData, error: sessionError } = await supabaseClient
        .auth
        .getSession();
    if (sessionError) {
        throw sessionError;
    }
    if (sessionData.session) {
        currentUser =
            sessionData
                .session
                .user;
        return;
    }
    const { data, error } = await supabaseClient
        .auth
        .signInAnonymously();
    if (error) {
        throw error;
    }
    currentUser =
        data.user;
}
function registerEvents() {
    normalTournamentModeButton?.addEventListener(__to_decode(80), () => openTournamentMode(__to_decode(106)));
    youtubeTournamentModeButton?.addEventListener(__to_decode(80), () => openTournamentMode(__to_decode(103)));
    normalTournamentModeBackButton?.addEventListener(__to_decode(80), () => window.history.back());
    youtubeTournamentModeBackButton?.addEventListener(__to_decode(80), () => window.history.back());
    createYoutubeTournamentForm?.addEventListener(__to_decode(107), handleCreateYoutubeTournament);
    document.getElementById(__to_decode(108))?.addEventListener(__to_decode(80), handleYoutubeApiConnectionTest);
    document.getElementById(__to_decode(109))?.addEventListener(__to_decode(80), handleYoutubeLiveTest);
    document.getElementById(__to_decode(110))?.addEventListener(__to_decode(80), handleYoutubeLiveSave);
    document.getElementById(__to_decode(111))?.addEventListener(__to_decode(80), startYoutubeChatMonitor);
    document.getElementById(__to_decode(112))?.addEventListener(__to_decode(80), () => stopYoutubeChatMonitor());
    createTournamentForm
        .addEventListener(__to_decode(107), handleCreateTournament);
    joinTournamentForm
        .addEventListener(__to_decode(107), handleJoinTournament);
    myTournamentList
        .addEventListener(__to_decode(80), handleMyTournamentClick);
    archivedTournamentList
        .addEventListener(__to_decode(80), handleMyTournamentClick);
    showArchivedTournamentsButton
        .addEventListener(__to_decode(80), handleShowArchivedTournaments);
    archiveAllHostTournamentsButton?.addEventListener(__to_decode(80), handleArchiveAllHostTournaments);
    deleteAllHostTournamentsButton?.addEventListener(__to_decode(80), handleDeleteAllHostTournaments);
    copyTournamentCodeButton
        .addEventListener(__to_decode(80), copyTournamentCode);
    toggleTournamentCodeButton
        .addEventListener(__to_decode(80), toggleTournamentCodeVisibility);
    addMatchupButton
        .addEventListener(__to_decode(80), handleAddMatchup);
    startTournamentButton
        .addEventListener(__to_decode(80), handleStartTournament);
    pauseTournamentButton?.addEventListener(__to_decode(80), handlePauseTournament);
    fullscreenBracketButton?.addEventListener(__to_decode(80), openFullscreenBracket);
    document.getElementById(__to_decode(113))?.addEventListener(__to_decode(80), openFullscreenBracket);
    document.getElementById(__to_decode(114))?.addEventListener(__to_decode(107), handleBracketLiveParticipantSearch);
    document.getElementById(__to_decode(115))?.addEventListener(__to_decode(107), handleParticipantSearch);
    document.getElementById(__to_decode(116))?.addEventListener(__to_decode(80), handleGeneratedBracketAction);
    victoryButton
        .addEventListener(__to_decode(80), handleVictory);
    undoButton
        .addEventListener(__to_decode(80), handleUndo);
    resetTournamentButton
        .addEventListener(__to_decode(80), handleResetTournament);
    reopenTournamentButton
        .addEventListener(__to_decode(80), handleReopenTournament);
    archiveTournamentButton
        .addEventListener(__to_decode(80), handleArchiveTournament);
    leaveTournamentButton
        .addEventListener(__to_decode(80), handleLeaveTournament);
    dialogConfirm
        .addEventListener(__to_decode(80), () => {
        closeDialog(true);
    });
    dialogCancel
        .addEventListener(__to_decode(80), () => {
        closeDialog(false);
    });
    dialogOverlay
        .addEventListener(__to_decode(80), event => {
        if (event.target ===
            dialogOverlay) {
            closeDialog(false);
        }
    });
    document
        .addEventListener(__to_decode(117), event => {
        if (event.key === __to_decode(118)
            &&
                !dialogOverlay
                    .classList
                    .contains(__to_decode(63))) {
            closeDialog(false);
        }
    });
}
async function handleMyTournamentClick(event) {
    const button = event.target.closest(__to_decode(119));
    if (!button) {
        return;
    }
    const tournamentCode = button.dataset.tournamentCode;
    if (!tournamentCode) {
        return;
    }
    try {
        setButtonLoading(button, true);
        await openTournament(tournamentCode);
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(button, false);
    }
}
function handleShowArchivedTournaments() {
    const isHidden = archivedTournamentList
        .classList
        .contains(__to_decode(63));
    if (isHidden) {
        archivedTournamentList
            .classList
            .remove(__to_decode(63));
        showArchivedTournamentsButton
            .textContent = __to_decode(120);
    }
    else {
        archivedTournamentList
            .classList
            .add(__to_decode(63));
        showArchivedTournamentsButton
            .textContent = __to_decode(121);
    }
}
async function handleYoutubeApiConnectionTest() {
    const button = document.getElementById(__to_decode(108));
    const result = document.getElementById(__to_decode(122));
    const handle = youtubeHostHandle?.value.trim() || "";
    result.classList.remove(__to_decode(63));
    result.textContent = "";
    if (!/^@[A-Za-z0-9._-]{1,30}$/.test(handle)) {
        result.textContent = __to_decode(123);
        return;
    }
    button.disabled = true;
    button.textContent = __to_decode(124);
    try {
        const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
        if (sessionError)
            throw sessionError;
        if (!sessionData?.session?.access_token) {
            throw new Error(__to_decode(125));
        }
        const { data, error } = await supabaseClient.functions.invoke(__to_decode(126), { body: { handle } });
        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            }
            catch (_) { }
            throw new Error(detail || error.message || __to_decode(127));
        }
        if (!data?.channelId) {
            throw new Error(data?.error || __to_decode(128));
        }
        result.textContent =
            `接続成功：${data.title || __to_decode(129)} / Channel ID：${data.channelId}`;
    }
    catch (error) {
        console.error(__to_decode(130), error);
        result.textContent = `接続失敗：${error.message || __to_decode(75)}`;
    }
    finally {
        button.disabled = false;
        button.textContent = __to_decode(131);
    }
}
async function handleYoutubeLiveTest() {
    const button = document.getElementById(__to_decode(109));
    const result = document.getElementById(__to_decode(132));
    const handle = youtubeHostHandle?.value.trim() || "";
    const streamUrl = youtubeStreamUrl?.value.trim() || "";
    result.classList.remove(__to_decode(63));
    if (!/^@[A-Za-z0-9._-]{1,30}$/.test(handle)) {
        result.textContent = __to_decode(133);
        return;
    }
    button.disabled = true;
    button.textContent = __to_decode(134);
    result.textContent = __to_decode(135);
    try {
        const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
        if (sessionError)
            throw sessionError;
        if (!sessionData?.session?.access_token) {
            throw new Error(__to_decode(136));
        }
        const { data, error } = await supabaseClient.functions.invoke(__to_decode(137), { body: { handle, streamUrl } });
        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            }
            catch (_) { }
            throw new Error(detail || error.message || __to_decode(138));
        }
        if (data?.error)
            throw new Error(data.error);
        if (data?.live) {
            result.textContent = `LIVE検出成功：${data.title || "配信中"} / Video ID：${data.videoId} / Live Chat ID：${data.liveChatId}`;
        }
        else {
            result.textContent = data?.message || __to_decode(139);
        }
    }
    catch (error) {
        console.error(__to_decode(140), error);
        result.textContent = `LIVE検出失敗：${error.message || __to_decode(75)}`;
    }
    finally {
        button.disabled = false;
        button.textContent = __to_decode(141);
    }
}
async function handleCreateYoutubeTournament(event) {
    event.preventDefault();
    youtubeCreateError?.classList.add(__to_decode(63));
    const name = youtubeTournamentName?.value.trim() || "";
    const handle = youtubeHostHandle?.value.trim() || "";
    const streamUrl = youtubeStreamUrl?.value.trim() || "";
    if (!name) {
        showYoutubeCreateError(__to_decode(142));
        return;
    }
    if (!handle || !handle.startsWith("@") || handle.length < 2) {
        showYoutubeCreateError(__to_decode(143));
        return;
    }
    if (streamUrl) {
        try {
            const url = new URL(streamUrl);
            const host = url.hostname.toLowerCase();
            if (![__to_decode(144), __to_decode(145), __to_decode(146), __to_decode(147)].includes(host)) {
                throw new Error(__to_decode(148));
            }
        }
        catch {
            showYoutubeCreateError(__to_decode(149));
            return;
        }
    }
    createYoutubeTournamentButton.disabled = true;
    createYoutubeTournamentButton.textContent = __to_decode(150);
    try {
        const { data, error } = await supabaseClient.rpc(__to_decode(151), {
            p_name: name,
            p_youtube_host_handle: handle,
            p_youtube_stream_url: streamUrl || null
        });
        if (error)
            throw error;
        const tournament = Array.isArray(data) ? data[0] : data;
        if (!tournament?.id) {
            throw new Error(__to_decode(152));
        }
        await openTournament(tournament.tournament_code);
    }
    catch (error) {
        console.error(error);
        const message = error?.message?.includes(__to_decode(153))
            ? __to_decode(143) : error?.message?.includes(__to_decode(154))
            ? __to_decode(155) : __to_decode(156);
        showYoutubeCreateError(message);
    }
    finally {
        createYoutubeTournamentButton.disabled = false;
        createYoutubeTournamentButton.textContent = __to_decode(157);
    }
}
function showYoutubeCreateError(message) {
    if (!youtubeCreateError)
        return;
    youtubeCreateError.textContent = message;
    youtubeCreateError.classList.remove(__to_decode(63));
}
async function handleCreateTournament(event) {
    event.preventDefault();
    const name = tournamentNameInput
        .value
        .trim();
    if (!name) {
        showMessage(__to_decode(142), __to_decode(78));
        return;
    }
    try {
        setButtonLoading(createTournamentButton, true, __to_decode(150));
        const { data, error } = await supabaseClient.rpc(__to_decode(158), {
            p_name: name
        });
        if (error) {
            throw error;
        }
        if (!data ||
            data.length === 0) {
            throw new Error(__to_decode(159));
        }
        const tournament = data[0];
        tournamentNameInput.value =
            "";
        await openTournament(tournament
            .tournament_code);
        showMessage(__to_decode(160), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(createTournamentButton, false);
    }
}
function trimParticipantName(name) {
    return String(name ?? "").replace(/^[\p{White_Space}\u3000]+|[\p{White_Space}\u3000]+$/gu, "");
}
function countParticipantNameCharacters(name) {
    if (typeof Intl !== __to_decode(162) && typeof Intl.Segmenter === __to_decode(163)) {
        const segmenter = new Intl.Segmenter(undefined, { granularity: __to_decode(164) });
        return Array.from(segmenter.segment(name)).length;
    }
    return Array.from(name).length;
}
function validateParticipantName(name) {
    const normalizedName = trimParticipantName(name);
    if (!normalizedName || /^[\p{White_Space}\u3000]+$/u.test(normalizedName)) {
        return { valid: false, name: "", message: __to_decode(165) };
    }
    const hasHan = /\p{Script=Han}/u.test(normalizedName);
    const hasHangul = /\p{Script=Hangul}/u.test(normalizedName);
    const hasHiragana = /\p{Script=Hiragana}/u.test(normalizedName);
    const hasKatakana = /\p{Script=Katakana}/u.test(normalizedName);
    let limit = 35;
    let message = __to_decode(166);
    if (hasHan || hasHangul) {
        limit = 15;
        message = __to_decode(167);
    }
    else if (hasHiragana || hasKatakana) {
        limit = 30;
        message = __to_decode(168);
    }
    const length = countParticipantNameCharacters(normalizedName);
    if (length > limit) {
        return { valid: false, name: normalizedName, message, length, limit };
    }
    return { valid: true, name: normalizedName, length, limit };
}
async function handleJoinTournament(event) {
    event.preventDefault();
    const code = tournamentCodeInput
        .value
        .trim()
        .toUpperCase();
    const nameCheck = validateParticipantName(displayNameInput.value);
    const name = nameCheck.name;
    if (!code) {
        showMessage(__to_decode(169), __to_decode(78));
        return;
    }
    if (!nameCheck.valid) {
        showMessage(nameCheck.message, __to_decode(78));
        return;
    }
    try {
        setButtonLoading(joinTournamentButton, true, __to_decode(170));
        const { data: joinTarget, error: joinLookupError } = await supabaseClient
            .from(__to_decode(82))
            .select(__to_decode(171))
            .eq(__to_decode(172), code)
            .maybeSingle();
        if (!joinLookupError && joinTarget?.tournament_mode === __to_decode(103)) {
            throw new Error(__to_decode(173));
        }
        const { error } = await supabaseClient.rpc(__to_decode(174), {
            p_tournament_code: code,
            p_display_name: name
        });
        if (error) {
            if (String(error.message || "").includes(__to_decode(175))) {
                throw new Error(__to_decode(173));
            }
            throw error;
        }
        tournamentCodeInput.value =
            "";
        displayNameInput.value =
            "";
        setTournamentURL(code);
        await openTournament(code);
        showMessage(__to_decode(176), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(joinTournamentButton, false);
    }
}
async function openTournamentByAccessToken(accessToken, options = {}) {
    const { updateHistory = true } = options;
    if (isLoadingTournament)
        return;
    isLoadingTournament = true;
    try {
        const { data, error } = await supabaseClient.rpc(__to_decode(177), { p_access_token: accessToken });
        if (error)
            throw error;
        const tournament = Array.isArray(data) ? data[0] : data;
        if (!tournament) {
            currentTournament = null;
            clearTournamentURL();
            showHome();
            await loadMyTournaments();
            showMessage(__to_decode(178), __to_decode(78));
            return;
        }
        currentTournament = tournament;
        if (updateHistory) {
            setTournamentURL(tournament.access_token);
        }
        await loadTournamentData();
        archivedTournamentList.classList.add(__to_decode(63));
        showArchivedTournamentsButton.textContent = __to_decode(121);
        showTournament();
        await subscribeRealtime();
    }
    finally {
        isLoadingTournament = false;
    }
}
async function openTournament(code) {
    if (isLoadingTournament) {
        return;
    }
    isLoadingTournament =
        true;
    try {
        const normalizedCode = String(code)
            .trim()
            .toUpperCase();
        const { data: tournament, error: tournamentError } = await supabaseClient
            .from(__to_decode(82))
            .select("*")
            .eq(__to_decode(172), normalizedCode)
            .maybeSingle();
        if (tournamentError) {
            throw tournamentError;
        }
        if (!tournament) {
            clearTournamentURL();
            showHome();
            showMessage(__to_decode(179), __to_decode(78));
            return;
        }
        currentTournament =
            tournament;
        if (tournament.access_token) {
            setTournamentURL(tournament.access_token);
        }
        await loadTournamentData();
        archivedTournamentList
            .classList
            .add(__to_decode(63));
        showArchivedTournamentsButton
            .textContent = __to_decode(121);
        showTournament();
        await subscribeRealtime();
    }
    finally {
        isLoadingTournament =
            false;
    }
}
async function loadTournamentData() {
    if (!currentTournament) {
        return;
    }
    const tournamentId = currentTournament.id;
    const [tournamentResult, participantsResult, matchesResult, bracketSlotsResult] = await Promise.all([
        supabaseClient
            .from(__to_decode(82))
            .select("*")
            .eq("id", tournamentId)
            .single(),
        supabaseClient
            .from(__to_decode(85))
            .select("*")
            .eq(__to_decode(91), tournamentId)
            .order(__to_decode(180), {
            ascending: true,
            nullsFirst: false
        })
            .order(__to_decode(181), {
            ascending: true
        }),
        supabaseClient
            .from(__to_decode(89))
            .select("*")
            .eq(__to_decode(91), tournamentId)
            .order(__to_decode(182), {
            ascending: true
        })
            .order(__to_decode(183), {
            ascending: true
        }),
        supabaseClient
            .from(__to_decode(184))
            .select("*")
            .eq(__to_decode(91), tournamentId)
            .order(__to_decode(185), {
            ascending: true
        })
    ]);
    if (tournamentResult.error) {
        throw tournamentResult.error;
    }
    if (participantsResult.error) {
        throw participantsResult.error;
    }
    if (matchesResult.error) {
        throw matchesResult.error;
    }
    if (bracketSlotsResult.error) {
        throw bracketSlotsResult.error;
    }
    currentTournament =
        tournamentResult.data;
    currentParticipants =
        participantsResult.data || [];
    currentParticipants.sort(compareParticipantsByBracketOrder);
    currentMatches =
        matchesResult.data || [];
    currentBracketSlots =
        bracketSlotsResult.data || [];
    currentParticipant =
        currentParticipants.find(participant => participant.user_id ===
            currentUser.id) || null;
    isHost =
        currentTournament
            .host_user_id ===
            currentUser.id;
    renderTournament();
}
function compareParticipantsByBracketOrder(a, b) {
    const aOrder = Number.isFinite(Number(a.bracket_order))
        ? Number(a.bracket_order)
        : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isFinite(Number(b.bracket_order))
        ? Number(b.bracket_order)
        : Number.MAX_SAFE_INTEGER;
    if (aOrder !==
        bOrder) {
        return (aOrder -
            bOrder);
    }
    const aCreated = String(a.created_at || "");
    const bCreated = String(b.created_at || "");
    const createdComparison = aCreated.localeCompare(bCreated);
    if (createdComparison !== 0) {
        return createdComparison;
    }
    return String(a.id).localeCompare(String(b.id));
}
let youtubeMonitorActive = false;
let youtubeMonitorBusy = false;
let youtubeMonitorTimer = null;
let youtubeMonitorTournamentId = null;
let youtubeMonitorGeneration = 0;
let youtubeMonitorRegisteredTotal = 0;
let youtubeMonitorStatusText = __to_decode(186);
async function stopYoutubeChatMonitor(message = __to_decode(186)) {
    const stoppedTournamentId = youtubeMonitorTournamentId || (currentTournament?.tournament_mode === __to_decode(103) ? currentTournament.id : null);
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
            const { error } = await supabaseClient.rpc(__to_decode(187), { p_tournament_id: stoppedTournamentId, p_enabled: false });
            if (error)
                throw error;
        }
        catch (error) {
            console.error(__to_decode(188), error);
            youtubeMonitorStatusText = __to_decode(189);
            renderYoutubeChatMonitorPanel();
        }
    }
}
function renderYoutubeChatMonitorPanel() {
    const panel = document.getElementById(__to_decode(190));
    const start = document.getElementById(__to_decode(111));
    const stop = document.getElementById(__to_decode(112));
    const status = document.getElementById(__to_decode(191));
    if (!panel || !start || !stop || !status)
        return;
    const isVictoryPhase = currentTournament?.status === __to_decode(100);
    const monitorTitle = panel.querySelector(__to_decode(192));
    const monitorSubtitle = panel.querySelector(__to_decode(193));
    if (monitorTitle)
        monitorTitle.textContent = isVictoryPhase
            ? __to_decode(194) : __to_decode(195);
    if (monitorSubtitle)
        monitorSubtitle.textContent = isVictoryPhase
            ? __to_decode(196) : __to_decode(197);
    const allowed = Boolean(currentTournament && isHost &&
        currentTournament.tournament_mode === __to_decode(103) &&
        [__to_decode(198), __to_decode(100)].includes(currentTournament.status) &&
        !currentTournament.archived_at);
    const hasChat = Boolean(currentTournament?.youtube_live_chat_id);
    panel.classList.toggle(__to_decode(63), !allowed);
    if (youtubeMonitorActive && (!allowed ||
        currentTournament?.id !== youtubeMonitorTournamentId || !hasChat)) {
        stopYoutubeChatMonitor(__to_decode(199));
        return;
    }
    start.disabled = !allowed || !hasChat || youtubeMonitorActive || youtubeMonitorBusy;
    stop.disabled = !allowed || (!youtubeMonitorActive && !youtubeMonitorStatusText.startsWith(__to_decode(200)) && !youtubeMonitorStatusText.startsWith(__to_decode(201)));
    status.textContent = youtubeMonitorStatusText +
        (currentTournament?.status === __to_decode(198) && youtubeMonitorRegisteredTotal ? `（今回の新規登録：${youtubeMonitorRegisteredTotal}人）` : "");
}
async function pollYoutubeChatMonitor(generation, tournamentId) {
    if (!youtubeMonitorActive || generation !== youtubeMonitorGeneration ||
        currentTournament?.id !== tournamentId)
        return;
    if (youtubeMonitorBusy)
        return;
    youtubeMonitorBusy = true;
    youtubeMonitorStatusText = __to_decode(202);
    renderYoutubeChatMonitorPanel();
    let nextDelay = 5000;
    try {
        const { data, error } = await supabaseClient.functions.invoke(__to_decode(203), { body: { tournamentId } });
        if (generation !== youtubeMonitorGeneration || !youtubeMonitorActive)
            return;
        if (error) {
            let detail = "";
            try {
                detail = (await error.context?.json())?.error || "";
            }
            catch (_) { }
            throw new Error(detail || error.message || __to_decode(204));
        }
        if (data?.liveEnded === true) {
            await stopYoutubeChatMonitor(__to_decode(205));
            return;
        }
        if (data?.error)
            throw new Error(data.error);
        if (!data || typeof data.registered !== __to_decode(206)) {
            throw new Error(__to_decode(207));
        }
        youtubeMonitorRegisteredTotal += data.registered;
        const victories = Number(data.victories) || 0;
        nextDelay = Math.max(5000, Math.min(120000, Number(data.pollingIntervalMillis) || 5000));
        youtubeMonitorStatusText = data.initialized
            ? __to_decode(208) : data.waiting
            ? __to_decode(209) : currentTournament?.status === __to_decode(100)
            ? `勝利報告を監視中（直近の勝利登録：${victories}件）`
            : `参加希望を監視中（直近の新規登録：${data.registered}人）`;
        if ((data.registered > 0 || victories > 0) && currentTournament?.id === tournamentId) {
            await loadTournamentData();
        }
    }
    catch (error) {
        if (generation === youtubeMonitorGeneration && youtubeMonitorActive) {
            console.error(__to_decode(210), error);
            await stopYoutubeChatMonitor(`監視エラー：${error.message || __to_decode(75)}`);
        }
        return;
    }
    finally {
        youtubeMonitorBusy = false;
        renderYoutubeChatMonitorPanel();
    }
    if (youtubeMonitorActive && generation === youtubeMonitorGeneration &&
        currentTournament?.id === tournamentId) {
        youtubeMonitorTimer = setTimeout(() => pollYoutubeChatMonitor(generation, tournamentId), nextDelay);
    }
}
async function startYoutubeChatMonitor() {
    if (youtubeMonitorActive || youtubeMonitorBusy || !currentTournament || !isHost ||
        currentTournament.tournament_mode !== __to_decode(103) ||
        ![__to_decode(198), __to_decode(100)].includes(currentTournament.status) || currentTournament.archived_at ||
        !currentTournament.youtube_live_chat_id)
        return;
    youtubeMonitorGeneration++;
    youtubeMonitorActive = true;
    youtubeMonitorTournamentId = currentTournament.id;
    youtubeMonitorRegisteredTotal = 0;
    youtubeMonitorStatusText = __to_decode(211);
    renderYoutubeChatMonitorPanel();
    const generation = youtubeMonitorGeneration;
    const tournamentId = youtubeMonitorTournamentId;
    try {
        const { error } = await supabaseClient.rpc(__to_decode(187), { p_tournament_id: tournamentId, p_enabled: true });
        if (error)
            throw error;
        if (generation === youtubeMonitorGeneration && youtubeMonitorActive) {
            void pollYoutubeChatMonitor(generation, tournamentId);
        }
    }
    catch (error) {
        console.error(error);
        await stopYoutubeChatMonitor(__to_decode(212) + (error.message || __to_decode(75)));
    }
}
function renderYoutubeLiveSavePanel() {
    const panel = document.getElementById(__to_decode(213));
    const button = document.getElementById(__to_decode(110));
    const result = document.getElementById(__to_decode(214));
    if (!panel || !button || !result)
        return;
    const allowed = Boolean(currentTournament && isHost &&
        currentTournament.tournament_mode === __to_decode(103) &&
        !currentTournament.archived_at &&
        currentTournament.status !== __to_decode(94));
    panel.classList.toggle(__to_decode(63), !allowed);
    if (!allowed)
        return;
    const saved = Boolean(currentTournament.youtube_live_chat_id);
    if (saved && !button.disabled) {
        result.textContent = __to_decode(215);
    }
    else if (!saved && !button.disabled) {
        result.textContent = __to_decode(216);
    }
}
async function handleYoutubeLiveSave() {
    const button = document.getElementById(__to_decode(110));
    const result = document.getElementById(__to_decode(214));
    if (!button || !result)
        return;
    if (!currentTournament || !isHost ||
        currentTournament.tournament_mode !== __to_decode(103) ||
        currentTournament.archived_at ||
        currentTournament.status === __to_decode(94))
        return;
    const tournamentId = currentTournament.id;
    button.disabled = true;
    button.textContent = __to_decode(217);
    result.textContent = __to_decode(218);
    try {
        const { data, error } = await supabaseClient.functions.invoke(__to_decode(137), { body: { tournamentId } });
        if (error) {
            let detail = "";
            try {
                const payload = await error.context?.json();
                detail = payload?.error || "";
            }
            catch (_) { }
            throw new Error(detail || error.message || __to_decode(219));
        }
        if (data?.error)
            throw new Error(data.error);
        if (!data?.live) {
            result.textContent = data?.message || __to_decode(139);
            return;
        }
        if (data.saved !== true) {
            throw new Error(__to_decode(220));
        }
        if (currentTournament?.id === tournamentId) {
            const { data: updated, error: refreshError } = await supabaseClient
                .from(__to_decode(82))
                .select(__to_decode(221))
                .eq("id", tournamentId)
                .single();
            if (refreshError)
                throw refreshError;
            if (updated?.youtube_live_chat_id !== data.liveChatId) {
                throw new Error(__to_decode(222));
            }
            Object.assign(currentTournament, updated);
            renderYoutubeChatMonitorPanel();
        }
        result.textContent = `LIVE接続・保存成功：${data.title || "配信中"} / Video ID：${data.videoId} / Live Chat ID：${data.liveChatId}`;
    }
    catch (error) {
        console.error(__to_decode(223), error);
        result.textContent = `LIVE接続・保存失敗：${error.message || __to_decode(75)}`;
    }
    finally {
        button.disabled = false;
        button.textContent = __to_decode(224);
    }
}
function renderTournament() {
    if (!currentTournament) {
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
function renderMatchupBuilder() {
    if (!matchupBuilder ||
        !currentTournament) {
        return;
    }
    const shouldShow = isHost &&
        !currentTournament.archived_at &&
        currentTournament.status === __to_decode(198);
    if (!shouldShow) {
        matchupBuilder
            .classList
            .add(__to_decode(63));
        return;
    }
    matchupBuilder
        .classList
        .remove(__to_decode(63));
    const assignedParticipantIds = new Set();
    currentBracketSlots
        .forEach(slot => {
        if (slot.player1_id) {
            assignedParticipantIds
                .add(slot.player1_id);
        }
        if (slot.player2_id) {
            assignedParticipantIds
                .add(slot.player2_id);
        }
    });
    if (!matchupParticipantList) {
        return;
    }
    const availableParticipants = currentParticipants.filter(participant => participant.status !== __to_decode(225));
    if (availableParticipants.length === 0) {
        matchupParticipantList.innerHTML =
            `
                <div class="empty-state">
                    配置できる参加者がいません。
                </div>
            `;
    }
    else {
        matchupParticipantList.innerHTML =
            availableParticipants
                .map(participant => {
                const status = getParticipantStatus(participant.status);
                return `
                            <div
                                class="matchup-participant ${assignedParticipantIds.has(participant.id)
                    ? __to_decode(226) : ""}"
                                data-participant-id="${escapeHTML(participant.id)}"
                            >

                                <span class="matchup-participant-grip">
                                    ☰
                                </span>


                                <span class="matchup-participant-name">
                                    ${escapeHTML(participant.display_name)}
                                </span>


                                ${participant.status === __to_decode(227)
                    ? `
                                            <span class="participant-status ${status.className}">
                                                ${status.text}
                                            </span>
                                        `
                    : ""}

                            </div>
                        `;
            })
                .join("");
    }
    if (!matchupCardList) {
        return;
    }
    if (currentBracketSlots.length === 0) {
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
            .map(slot => {
            const player1 = getParticipant(slot.player1_id);
            const player2 = getParticipant(slot.player2_id);
            const player1Name = player1
                ? escapeHTML(player1.display_name)
                : __to_decode(228);
            const player2Name = player2
                ? escapeHTML(player2.display_name)
                : __to_decode(228);
            const matchupState = player1 && player2
                ? __to_decode(229) : player1 || player2
                ? "bye"
                : __to_decode(230);
            return `
                        <div
                            class="matchup-card matchup-card-${matchupState}"
                            data-bracket-slot-id="${escapeHTML(slot.id)}"
                        >

                            <div class="matchup-card-header">

                                <div class="matchup-card-title">

                                    <button
                                        type="button"
                                        class="matchup-drag-handle"
                                        data-drag-bracket-slot="${escapeHTML(slot.id)}"
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
                                    data-delete-bracket-slot="${escapeHTML(slot.id)}"
                                    aria-label="MATCH ${slot.card_order}を削除"
                                    title="対戦カードを削除"
                                >
                                    ×
                                </button>

                            </div>


                            <div class="matchup-card-players">

                                <div
                                    class="matchup-slot ${player1
                ? __to_decode(231) : ""}"
                                    data-bracket-slot-id="${escapeHTML(slot.id)}"
                                    data-bracket-side="1"
                                    ${player1
                ? `data-participant-id="${escapeHTML(player1.id)}"`
                : ""}
                                >
                                    <span class="matchup-slot-name">
                                        ${player1Name}
                                    </span>
                                </div>

                                <div class="matchup-vs">
                                    VS
                                </div>

                                <div
                                    class="matchup-slot ${player2
                ? __to_decode(231) : ""}"
                                    data-bracket-slot-id="${escapeHTML(slot.id)}"
                                    data-bracket-side="2"
                                    ${player2
                ? `data-participant-id="${escapeHTML(player2.id)}"`
                : ""}
                                >
                                    <span class="matchup-slot-name">
                                        ${player2Name}
                                    </span>
                                </div>

                            </div>

                        </div>
                    `;
        })
            .join("");
    matchupCardList
        .querySelectorAll(__to_decode(232))
        .forEach(button => {
        button.addEventListener(__to_decode(80), handleDeleteMatchup);
    });
    matchupParticipantList
        .querySelectorAll(__to_decode(233))
        .forEach(participantElement => {
        participantElement
            .addEventListener(__to_decode(234), beginMatchupParticipantDrag);
    });
    matchupCardList
        .querySelectorAll(__to_decode(235))
        .forEach(slotElement => {
        slotElement
            .addEventListener(__to_decode(234), beginMatchupParticipantDrag);
    });
    matchupCardList
        .querySelectorAll(__to_decode(236))
        .forEach(handle => {
        handle
            .addEventListener(__to_decode(234), beginMatchupCardDrag);
    });
}
function beginMatchupCardDrag(event) {
    if (!isHost ||
        !currentTournament ||
        currentTournament.status !== __to_decode(198)) {
        return;
    }
    if (event.pointerType === __to_decode(237) &&
        event.button !== 0) {
        return;
    }
    const handle = event.currentTarget;
    const slotId = handle.dataset
        .dragBracketSlot;
    if (!slotId) {
        return;
    }
    const card = handle.closest(__to_decode(238));
    if (!card) {
        return;
    }
    event.preventDefault();
    matchupDraggedSlotId =
        slotId;
    matchupCardDragGhost =
        card.cloneNode(true);
    matchupCardDragGhost
        .classList
        .add(__to_decode(239));
    document.body
        .appendChild(matchupCardDragGhost);
    moveMatchupCardDragGhost(event);
    matchupCardList
        .querySelectorAll(__to_decode(238))
        .forEach(targetCard => {
        if (targetCard.dataset
            .bracketSlotId !==
            slotId) {
            targetCard
                .classList
                .add(__to_decode(240));
        }
    });
    document
        .addEventListener(__to_decode(241), handleMatchupCardDrag);
    document
        .addEventListener(__to_decode(242), finishMatchupCardDrag);
    document
        .addEventListener(__to_decode(243), finishMatchupCardDrag);
}
function moveMatchupCardDragGhost(event) {
    if (!matchupCardDragGhost) {
        return;
    }
    matchupCardDragGhost
        .style.left =
        `${event.clientX + 14}px`;
    matchupCardDragGhost
        .style.top =
        `${event.clientY + 14}px`;
}
function handleMatchupCardDrag(event) {
    if (!matchupDraggedSlotId) {
        return;
    }
    moveMatchupCardDragGhost(event);
    if (matchupCardCurrentDropTarget) {
        matchupCardCurrentDropTarget
            .classList
            .remove(__to_decode(244));
    }
    matchupCardCurrentDropTarget =
        null;
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) {
        return;
    }
    const targetCard = element.closest(__to_decode(238));
    if (!targetCard ||
        !matchupCardList.contains(targetCard)) {
        return;
    }
    if (targetCard.dataset
        .bracketSlotId ===
        matchupDraggedSlotId) {
        return;
    }
    matchupCardCurrentDropTarget =
        targetCard;
    targetCard
        .classList
        .add(__to_decode(244));
}
async function finishMatchupCardDrag() {
    const draggedSlotId = matchupDraggedSlotId;
    const targetSlotId = matchupCardCurrentDropTarget
        ?.dataset
        ?.bracketSlotId ||
        null;
    const orderedSlotIds = [...currentBracketSlots]
        .sort((a, b) => a.card_order -
        b.card_order)
        .map(slot => slot.id);
    const draggedIndex = orderedSlotIds.indexOf(draggedSlotId);
    const targetIndex = orderedSlotIds.indexOf(targetSlotId);
    cleanupMatchupCardDrag();
    if (!draggedSlotId ||
        !targetSlotId ||
        draggedSlotId ===
            targetSlotId ||
        draggedIndex === -1 ||
        targetIndex === -1) {
        return;
    }
    const newOrder = [...orderedSlotIds];
    const [movedSlotId] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, movedSlotId);
    const { error } = await supabaseClient.rpc(__to_decode(245), {
        p_tournament_id: currentTournament.id,
        p_bracket_slot_ids: newOrder
    });
    if (error) {
        console.error(__to_decode(246), error);
        showMessage(__to_decode(247), __to_decode(78));
        return;
    }
    await loadTournamentData();
    showMessage(__to_decode(248), __to_decode(161));
}
function cleanupMatchupCardDrag() {
    document
        .removeEventListener(__to_decode(241), handleMatchupCardDrag);
    document
        .removeEventListener(__to_decode(242), finishMatchupCardDrag);
    document
        .removeEventListener(__to_decode(243), finishMatchupCardDrag);
    if (matchupCardCurrentDropTarget) {
        matchupCardCurrentDropTarget
            .classList
            .remove(__to_decode(244));
    }
    matchupCardList
        ?.querySelectorAll(__to_decode(238))
        .forEach(card => {
        card.classList.remove(__to_decode(240), __to_decode(244), __to_decode(249), __to_decode(250));
    });
    if (matchupCardDragGhost) {
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
function beginMatchupParticipantDrag(event) {
    if (!currentTournament ||
        !isHost ||
        currentTournament.status !== __to_decode(198)) {
        return;
    }
    if (event.pointerType === __to_decode(237) &&
        event.button !== 0) {
        return;
    }
    const source = event.currentTarget;
    const participantId = source.dataset
        .participantId;
    const participant = getParticipant(participantId);
    if (!participant ||
        participant.status === __to_decode(225)) {
        return;
    }
    event.preventDefault();
    matchupDraggedParticipantId =
        participantId;
    matchupDragGhost =
        source.cloneNode(true);
    matchupDragGhost
        .classList
        .add(__to_decode(251));
    document.body.appendChild(matchupDragGhost);
    moveMatchupDragGhost(event.clientX, event.clientY);
    document
        .querySelectorAll(__to_decode(252))
        .forEach(slot => {
        slot.classList.add(__to_decode(253));
    });
    const sourceIsMatchSlot = source.classList.contains(__to_decode(231));
    if (sourceIsMatchSlot) {
        matchupDraggedSourceSlotId =
            source.dataset
                .bracketSlotId ||
                null;
        matchupDraggedSourceSide =
            Number(source.dataset
                .bracketSide);
        if (matchupParticipantList) {
            matchupParticipantList
                .classList
                .add(__to_decode(254));
        }
    }
    document.body
        .classList
        .add(__to_decode(255));
    document.addEventListener(__to_decode(241), handleMatchupParticipantDrag);
    document.addEventListener(__to_decode(242), finishMatchupParticipantDrag);
    document.addEventListener(__to_decode(243), finishMatchupParticipantDrag);
}
function handleMatchupParticipantDrag(event) {
    if (!matchupDraggedParticipantId ||
        !matchupDragGhost) {
        return;
    }
    event.preventDefault();
    moveMatchupDragGhost(event.clientX, event.clientY);
    if (matchupCurrentDropTarget) {
        matchupCurrentDropTarget
            .classList
            .remove(__to_decode(256));
        matchupCurrentDropTarget =
            null;
    }
    if (matchupParticipantList) {
        matchupParticipantList
            .classList
            .remove(__to_decode(257));
    }
    matchupReturnTargetActive =
        false;
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) {
        return;
    }
    if (matchupParticipantList &&
        matchupParticipantList
            .classList
            .contains(__to_decode(254)) &&
        (element ===
            matchupParticipantList ||
            matchupParticipantList
                .contains(element))) {
        matchupParticipantList
            .classList
            .add(__to_decode(257));
        matchupReturnTargetActive =
            true;
        return;
    }
    const dropTarget = element.closest(__to_decode(252));
    if (!dropTarget ||
        !matchupCardList.contains(dropTarget)) {
        return;
    }
    matchupCurrentDropTarget =
        dropTarget;
    dropTarget
        .classList
        .add(__to_decode(256));
}
function moveMatchupDragGhost(x, y) {
    if (!matchupDragGhost) {
        return;
    }
    matchupDragGhost.style.left =
        `${x}px`;
    matchupDragGhost.style.top =
        `${y}px`;
}
async function finishMatchupParticipantDrag(event) {
    if (matchupReturnTargetActive &&
        matchupDraggedSourceSlotId &&
        (matchupDraggedSourceSide === 1 ||
            matchupDraggedSourceSide === 2)) {
        const sourceSlotId = matchupDraggedSourceSlotId;
        const sourceSide = matchupDraggedSourceSide;
        const participantId = matchupDraggedParticipantId;
        cleanupMatchupParticipantDrag();
        const { error } = await supabaseClient.rpc(__to_decode(258), {
            p_bracket_slot_id: sourceSlotId,
            p_side: sourceSide
        });
        if (error) {
            console.error(__to_decode(259), error);
            showMessage(__to_decode(260), __to_decode(78));
            return;
        }
        await loadTournamentData();
        const participant = getParticipant(participantId);
        showMessage(participant
            ? `${participant.display_name} さんを対戦カードから外しました。`
            : __to_decode(261), __to_decode(161));
        return;
    }
    if (!matchupDraggedParticipantId) {
        return;
    }
    event.preventDefault();
    const participantId = matchupDraggedParticipantId;
    const dropTarget = matchupCurrentDropTarget;
    if (!dropTarget) {
        cleanupMatchupParticipantDrag();
        return;
    }
    const bracketSlotId = dropTarget.dataset
        .bracketSlotId;
    const side = Number(dropTarget.dataset
        .bracketSide);
    if (!bracketSlotId ||
        (side !== 1 &&
            side !== 2)) {
        cleanupMatchupParticipantDrag();
        return;
    }
    cleanupMatchupParticipantDrag();
    try {
        const { error } = await supabaseClient.rpc(__to_decode(262), {
            p_bracket_slot_id: bracketSlotId,
            p_side: side,
            p_participant_id: participantId
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        const participant = getParticipant(participantId);
        if (participant) {
            showMessage(`${participant.display_name} さんを対戦カードに配置しました。`, __to_decode(161));
        }
        else {
            showMessage(__to_decode(263), __to_decode(161));
        }
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
}
function cleanupMatchupParticipantDrag() {
    document.removeEventListener(__to_decode(241), handleMatchupParticipantDrag);
    document.removeEventListener(__to_decode(242), finishMatchupParticipantDrag);
    document.removeEventListener(__to_decode(243), finishMatchupParticipantDrag);
    document
        .querySelectorAll(__to_decode(252))
        .forEach(slot => {
        slot.classList.remove(__to_decode(253), __to_decode(256));
    });
    if (matchupDragGhost) {
        matchupDragGhost.remove();
    }
    document.body
        .classList
        .remove(__to_decode(255));
    if (matchupParticipantList) {
        matchupParticipantList
            .classList
            .remove(__to_decode(254), __to_decode(257));
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
async function handleDeleteMatchup(event) {
    const button = event.currentTarget;
    const bracketSlotId = button.dataset
        .deleteBracketSlot;
    const slot = currentBracketSlots.find(item => item.id ===
        bracketSlotId);
    if (!slot ||
        !currentTournament ||
        !isHost ||
        currentTournament.status !== __to_decode(198)) {
        return;
    }
    try {
        button.disabled =
            true;
        const { error } = await supabaseClient.rpc(__to_decode(264), {
            p_bracket_slot_id: bracketSlotId
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(`MATCH ${slot.card_order} を削除しました。`, __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
}
async function handleAddMatchup() {
    if (!currentTournament ||
        !isHost ||
        currentTournament.status !== __to_decode(198)) {
        return;
    }
    try {
        setButtonLoading(addMatchupButton, true, __to_decode(265));
        const { error } = await supabaseClient.rpc(__to_decode(266), {
            p_tournament_id: currentTournament.id
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(__to_decode(267), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(addMatchupButton, false);
    }
}
function getTournamentCodeMask() {
    const code = currentTournament?.tournament_code || "";
    return "●".repeat(code.length);
}
function updateTournamentCodeEyeIcon() {
    if (!toggleTournamentCodeButton)
        return;
    const icon = toggleTournamentCodeButton.querySelector("i");
    if (!icon)
        return;
    icon.className = isTournamentCodeVisible
        ? __to_decode(268) : __to_decode(269);
}
function renderTournamentHeader() {
    const tournamentCodeBlock = currentTournamentCode?.closest(__to_decode(270));
    tournamentCodeBlock?.classList.toggle(__to_decode(63), currentTournament?.tournament_mode === __to_decode(103));
    currentTournamentName
        .textContent =
        currentTournament.name;
    isTournamentCodeVisible = false;
    currentTournamentCode.textContent = getTournamentCodeMask();
    toggleTournamentCodeButton.classList.add(__to_decode(271));
    updateTournamentCodeEyeIcon();
    toggleTournamentCodeButton.setAttribute(__to_decode(272), __to_decode(273));
    toggleTournamentCodeButton.title = __to_decode(273);
    const status = currentTournament.status;
    tournamentStatus.className = __to_decode(274);
    if (status === __to_decode(198)) {
        tournamentStatus
            .classList
            .add(__to_decode(198));
        tournamentStatus
            .textContent = __to_decode(275);
    }
    else if (status === __to_decode(100)) {
        tournamentStatus.classList.add(__to_decode(100));
        tournamentStatus.textContent = currentTournament.paused_at ? __to_decode(276) : __to_decode(277);
    }
    else {
        tournamentStatus
            .classList
            .add(__to_decode(94));
        tournamentStatus
            .textContent = __to_decode(101);
    }
}
function renderParticipants() {
    participantCount
        .textContent =
        `${currentParticipants.length} PLAYERS`;
    if (currentParticipants.length === 0) {
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
            .map(participant => {
            const mine = currentParticipant &&
                currentParticipant.id ===
                    participant.id;
            const status = getParticipantStatus(participant.status);
            return `
                        <div class="participant-item">

                            <div class="participant-name">

                                ${escapeHTML(participant.display_name)}

                                ${mine
                ? __to_decode(278) : ""}

                            </div>


                            <div
                                class="participant-status ${status.className}"
                            >
                                ${status.text}
                            </div>

                        </div>
                    `;
        })
            .join("");
    if (fullscreenBracketButton) {
        fullscreenBracketButton.classList.toggle(__to_decode(63), Boolean(currentTournament.archived_at) || (status === __to_decode(198) && !bracketSetupConfirmed));
    }
}
function isBracketFullscreenMode() {
    return new URLSearchParams(window.location.search).get(__to_decode(39)) === __to_decode(279);
}
function openFullscreenBracket() {
    if (!currentTournament)
        return;
    const url = new URL(window.location.href);
    url.searchParams.set("t", currentTournament.access_token);
    url.searchParams.set(__to_decode(39), __to_decode(279));
    window.open(url.toString(), __to_decode(280));
}
function renderBracket() {
    if (currentMatches.length === 0) {
        if (currentBracketSlots.length === 0) {
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
        const orderedSlots = [...currentBracketSlots]
            .sort((a, b) => a.card_order -
            b.card_order);
        const previewRounds = {};
        previewRounds[1] =
            orderedSlots.map((slot, index) => {
                return {
                    id: `preview-${slot.id}`,
                    round_number: 1,
                    match_number: index + 1,
                    player1_id: slot.player1_id,
                    player2_id: slot.player2_id,
                    winner_id: null,
                    status: __to_decode(198),
                    preview: true,
                    bracket_slot_id: slot.id
                };
            });
        let previousMatchCount = orderedSlots.length;
        let roundNumber = 2;
        while (previousMatchCount > 1) {
            const matchCount = Math.ceil(previousMatchCount / 2);
            previewRounds[roundNumber] =
                [];
            for (let index = 0; index < matchCount; index++) {
                previewRounds[roundNumber].push({
                    id: `preview-round-${roundNumber}-${index}`,
                    round_number: roundNumber,
                    match_number: index + 1,
                    player1_id: null,
                    player2_id: null,
                    winner_id: null,
                    status: __to_decode(198),
                    preview: true
                });
            }
            previousMatchCount =
                matchCount;
            roundNumber++;
        }
        const maxRound = Math.max(...Object
            .keys(previewRounds)
            .map(Number));
        const previewHTML = Object
            .keys(previewRounds)
            .map(Number)
            .sort((a, b) => a - b)
            .map(currentRoundNumber => {
            const roundMatches = previewRounds[currentRoundNumber];
            const roundTitle = getRoundTitle(currentRoundNumber, maxRound);
            return `
                            <div
                                class="bracket-round"
                                data-preview-round="${currentRoundNumber}"
                            >

                                <div class="bracket-round-title">
                                    ${roundTitle}
                                </div>

                                ${roundMatches
                .map(renderMatchCard)
                .join("")}

                            </div>
                        `;
        })
            .join("");
        bracket.innerHTML =
            `
            <div class="bracket-inner bracket-preview">
                ${previewHTML}
            </div>
            `;
        return;
    }
    const rounds = groupMatchesByRound();
    const maxRound = Math.max(...Object
        .keys(rounds)
        .map(Number));
    const html = Object
        .keys(rounds)
        .map(Number)
        .sort((a, b) => a - b)
        .map(roundNumber => {
        const roundMatches = rounds[roundNumber];
        const roundTitle = getRoundTitle(roundNumber, maxRound);
        return `
                        <div class="bracket-round">

                            <div class="bracket-round-title">
                                ${roundTitle}
                            </div>

                            ${roundMatches
            .map(renderMatchCard)
            .join("")}

                        </div>
                    `;
    })
        .join("");
    bracket.innerHTML =
        `
        <div class="bracket-inner">
            ${html}
        </div>
        `;
    if (isHost) {
        bracket
            .querySelectorAll(__to_decode(281))
            .forEach(button => {
            button
                .addEventListener(__to_decode(80), handleHostWinner);
        });
    }
    if (currentTournament.status === __to_decode(94)) {
        const finalMatch = currentMatches.find(match => match.round_number ===
            maxRound);
        if (finalMatch &&
            finalMatch.winner_id) {
            const champion = getParticipant(finalMatch.winner_id);
            if (champion) {
                bracket
                    .insertAdjacentHTML(__to_decode(282), `
                        <div class="champion-card">

                            <div class="champion-label">
                                CHAMPION
                            </div>

                            <div class="champion-name">

                                ★ ${escapeHTML(champion.display_name)}

                            </div>

                        </div>
                        `);
            }
        }
    }
}
function renderMatchCard(match) {
    const player1 = getParticipant(match.player1_id);
    const player2 = getParticipant(match.player2_id);
    const canHostChoose = isHost &&
        !currentTournament.archived_at &&
        currentTournament.status === __to_decode(100) &&
        match.status === __to_decode(100) &&
        !match.winner_id &&
        player1 &&
        player2;
    return `
        <div class="match-card">

            ${renderMatchPlayer(player1, match, canHostChoose)}

            ${renderMatchPlayer(player2, match, canHostChoose)}

        </div>
    `;
}
function renderMatchPlayer(participant, match, canHostChoose) {
    if (!participant) {
        return `
            <div class="match-player">

                <span>
                    ---
                </span>

            </div>
        `;
    }
    const winner = participant.id ===
        match.winner_id;
    const banned = participant.status === __to_decode(225);
    const classes = [
        __to_decode(283)
    ];
    if (winner) {
        classes.push(__to_decode(284));
    }
    if (banned) {
        classes.push(__to_decode(225));
    }
    let rightSide = "";
    if (winner) {
        rightSide =
            `
            <span class="match-win-label">
                WIN
            </span>
            `;
    }
    else if (canHostChoose &&
        !banned) {
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

                ${escapeHTML(participant.display_name)}

            </span>

            ${rightSide}

        </div>
    `;
}
async function handleHostWinner(event) {
    const button = event.currentTarget;
    const matchId = button.dataset.matchId;
    const winnerId = button.dataset.winnerId;
    const winner = getParticipant(winnerId);
    const match = currentMatches.find(item => item.id ===
        matchId);
    if (!winner ||
        !match) {
        showMessage(__to_decode(285), __to_decode(78));
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(286), `${winner.display_name} さんをこの試合の勝者として登録しますか？`, __to_decode(287), __to_decode(161));
    if (!confirmed) {
        return;
    }
    try {
        disableHostWinnerButtons(matchId, true);
        const { error } = await supabaseClient.rpc(__to_decode(288), {
            p_match_id: matchId,
            p_winner_id: winnerId
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(`${winner.display_name} さんを勝者として登録しました。`, __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
}
function disableHostWinnerButtons(matchId, disabled) {
    bracket
        .querySelectorAll(`[data-host-winner][data-match-id="${matchId}"]`)
        .forEach(button => {
        button.disabled =
            disabled;
    });
}
function renderMyMatch() {
    myMatchArea
        .classList
        .add(__to_decode(63));
    victoryButton.dataset.matchId =
        "";
    return;
    if (!currentParticipant) {
        return;
    }
    if (currentTournament.archived_at) {
        return;
    }
    if (currentTournament.status !== __to_decode(100)) {
        return;
    }
    const myMatch = currentMatches.find(match => match.status === __to_decode(100)
        &&
            !match.winner_id
        &&
            (match.player1_id ===
                currentParticipant.id
                ||
                    match.player2_id ===
                        currentParticipant.id));
    if (!myMatch) {
        return;
    }
    const opponentId = myMatch.player1_id ===
        currentParticipant.id
        ? myMatch.player2_id
        : myMatch.player1_id;
    const opponent = getParticipant(opponentId);
    if (!opponent) {
        return;
    }
    myMatchInfo.innerHTML =
        `
        <div>

            ${escapeHTML(currentParticipant.display_name)}

            <span class="my-match-vs">
                VS
            </span>

            ${escapeHTML(opponent.display_name)}

        </div>
        `;
    victoryButton.dataset.matchId =
        myMatch.id;
    victoryButton.disabled =
        false;
    myMatchArea
        .classList
        .remove(__to_decode(63));
}
function renderHostControls() {
    if (!isHost) {
        hostControls
            .classList
            .add(__to_decode(63));
        return;
    }
    hostControls
        .classList
        .remove(__to_decode(63));
    startTournamentButton.disabled =
        currentTournament.status !== __to_decode(198);
    if (pauseTournamentButton) {
        const tournamentIsActive = currentTournament.status === __to_decode(100) &&
            !currentTournament.archived_at;
        pauseTournamentButton.classList.remove(__to_decode(63));
        pauseTournamentButton.textContent = currentTournament.paused_at ? __to_decode(289) : __to_decode(290);
        pauseTournamentButton.classList.toggle(__to_decode(291), Boolean(currentTournament.paused_at));
        pauseTournamentButton.disabled = !tournamentIsActive;
    }
    undoButton.disabled =
        currentTournament.status === __to_decode(198);
    resetTournamentButton.disabled =
        currentTournament.status === __to_decode(198)
            &&
                currentMatches.length === 0;
    const isArchived = Boolean(currentTournament.archived_at);
    if (isArchived) {
        startTournamentButton.disabled =
            true;
        undoButton.disabled =
            true;
        resetTournamentButton.disabled =
            true;
    }
    reopenTournamentButton.disabled =
        !isArchived;
    archiveTournamentButton.disabled =
        isArchived;
    renderHostParticipants();
}
function handleBracketLiveParticipantSearch(event) {
    event.preventDefault();
    const input = document.getElementById(__to_decode(292));
    const query = String(input?.value ?? "").trim();
    if (!query) {
        showMessage(__to_decode(165), __to_decode(78));
        input?.focus();
        return;
    }
    const participant = currentParticipants.find(item => item.status !== __to_decode(225) &&
        String(item.display_name ?? "").trim() === query);
    if (!participant) {
        showMessage(__to_decode(293), __to_decode(78));
        input?.focus();
        input?.select();
        return;
    }
    const canvas = document.getElementById(__to_decode(116));
    if (!canvas) {
        showMessage(__to_decode(294), __to_decode(78));
        return;
    }
    const participantId = String(participant.id);
    const escapedId = window.CSS?.escape
        ? CSS.escape(participantId)
        : participantId.replace(/["\\]/g, "\\$&");
    let target = canvas.querySelector(`[data-participant-id="${escapedId}"]`) ||
        canvas.querySelector(`[data-player-id="${escapedId}"]`) ||
        canvas.querySelector(`[data-setup-participant-id="${escapedId}"]`);
    if (!target) {
        target = Array.from(canvas.querySelectorAll(__to_decode(295))).find(element => String(element.textContent ?? "").trim() === query) || null;
    }
    if (!target) {
        showMessage(__to_decode(296), __to_decode(78));
        return;
    }
    const highlightTarget = target.closest(__to_decode(297)) || target;
    document.querySelectorAll(__to_decode(298))
        .forEach(element => element.classList.remove(__to_decode(299)));
    highlightTarget.scrollIntoView({
        behavior: __to_decode(300),
        block: __to_decode(301),
        inline: __to_decode(301)
    });
    highlightTarget.classList.add(__to_decode(299));
    window.setTimeout(() => {
        highlightTarget.classList.remove(__to_decode(299));
    }, 2600);
}
function handleParticipantSearch(event) {
    event.preventDefault();
    const input = document.getElementById(__to_decode(302));
    const name = (input?.value || "").trim();
    if (!name) {
        showMessage(__to_decode(303), __to_decode(78));
        return;
    }
    const participant = currentParticipants.find((p) => (p.display_name || "").trim() === name);
    if (!participant) {
        showMessage(`「${name}」と完全一致する参加者はいません。`, __to_decode(78));
        return;
    }
    const item = document.querySelector(`[data-host-participant-id="${CSS.escape(participant.id)}"]`);
    if (!item)
        return;
    document.querySelectorAll(__to_decode(304)).forEach((el) => el.classList.remove(__to_decode(305)));
    item.classList.add(__to_decode(305));
    item.scrollIntoView({ behavior: __to_decode(306), block: __to_decode(301) });
    window.setTimeout(() => item.classList.remove(__to_decode(305)), 3500);
}
function renderHostParticipants() {
    if (currentParticipants.length === 0) {
        hostParticipantList.innerHTML =
            `
            <div class="empty-state">
                参加者はいません。
            </div>
            `;
        return;
    }
    const orderedParticipants = [
        ...currentParticipants
    ].sort(compareParticipantsByBracketOrder);
    hostParticipantList.innerHTML =
        orderedParticipants
            .map((participant, index) => {
            const status = getParticipantStatus(participant.status);
            let buttons = "";
            if (participant.status === __to_decode(100)) {
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
            }
            else {
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
                if (participant.status === __to_decode(227)) {
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
                            class="button button-delete-participant${currentTournament.status !== __to_decode(198) ? __to_decode(307) : ""}"
                            data-action="delete"
                            data-participant-id="${participant.id}"
                            data-delete-disabled-message="${currentTournament.status !== __to_decode(198) ? "1" : "0"}"
                            type="button"
                            aria-disabled="${currentTournament.status !== __to_decode(198) ? __to_decode(308) : __to_decode(309)}"
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

                                            ${escapeHTML(participant.display_name)}

                                            ${participant.user_id === currentUser.id
                ? __to_decode(278) : ""}

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
        })
            .join("");
    hostParticipantList
        .querySelectorAll(__to_decode(310))
        .forEach(button => {
        if (currentTournament.archived_at) {
            button.disabled =
                true;
            return;
        }
        if (button.dataset.action === __to_decode(311)
            && currentTournament.status !== __to_decode(198)) {
            return;
        }
        button
            .addEventListener(__to_decode(80), handleParticipantAction);
    });
}
function initializeParticipantDeleteDisabledTooltip() {
    if (document.getElementById(__to_decode(312))) {
        return;
    }
    const tooltip = document.createElement("div");
    tooltip.id = __to_decode(312);
    tooltip.className = __to_decode(313);
    tooltip.innerHTML = __to_decode(314);
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
    document.addEventListener(__to_decode(315), event => {
        const button = event.target.closest?.(__to_decode(316));
        if (!button) {
            return;
        }
        if (button.classList.contains(__to_decode(317))) {
            tooltip.innerHTML = __to_decode(314);
        }
        else {
            tooltip.textContent = __to_decode(318);
        }
        tooltip.classList.add(__to_decode(319));
        moveTooltip(event);
    });
    document.addEventListener(__to_decode(241), event => {
        if (!tooltip.classList.contains(__to_decode(319))) {
            return;
        }
        const button = event.target.closest?.(__to_decode(316));
        if (!button) {
            tooltip.classList.remove(__to_decode(319));
            return;
        }
        moveTooltip(event);
    });
    document.addEventListener(__to_decode(320), event => {
        const button = event.target.closest?.(__to_decode(316));
        if (button) {
            tooltip.classList.remove(__to_decode(319));
        }
    });
}
initializeParticipantDeleteDisabledTooltip();
function initializeParticipantReordering() {
    const items = hostParticipantList
        .querySelectorAll(__to_decode(321));
    items.forEach(item => {
        const handle = item.querySelector(__to_decode(322));
        if (!handle) {
            return;
        }
        handle.addEventListener(__to_decode(234), event => {
            beginParticipantDrag(event, item, handle);
        });
    });
}
function beginParticipantDrag(event, item, handle) {
    if (!isHost
        ||
            !currentTournament
        ||
            currentTournament.status !== __to_decode(198)
        ||
            participantOrderSaving) {
        return;
    }
    if (event.pointerType === __to_decode(237)
        &&
            event.button !== 0) {
        return;
    }
    event.preventDefault();
    draggedParticipantId =
        item.dataset
            .reorderParticipantId;
    draggedParticipantElement =
        item;
    try {
        handle.setPointerCapture(event.pointerId);
    }
    catch (error) {
    }
    item.classList.add(__to_decode(323));
    hostParticipantList
        .classList
        .add(__to_decode(324));
    document.body
        .classList
        .add(__to_decode(325));
    const pointerMoveHandler = moveEvent => {
        handleParticipantPointerMove(moveEvent);
    };
    const pointerEndHandler = endEvent => {
        finishParticipantDrag(endEvent, handle, pointerMoveHandler, pointerEndHandler);
    };
    handle.addEventListener(__to_decode(241), pointerMoveHandler);
    handle.addEventListener(__to_decode(242), pointerEndHandler);
    handle.addEventListener(__to_decode(243), pointerEndHandler);
}
function handleParticipantPointerMove(event) {
    if (!draggedParticipantElement) {
        return;
    }
    event.preventDefault();
    const clientY = event.clientY;
    const otherItems = [
        ...hostParticipantList
            .querySelectorAll(__to_decode(321))
    ].filter(item => item !==
        draggedParticipantElement);
    if (otherItems.length === 0) {
        return;
    }
    let insertBeforeElement = null;
    for (const item of otherItems) {
        const rect = item.getBoundingClientRect();
        const middleY = rect.top +
            (rect.height /
                2);
        if (clientY <
            middleY) {
            insertBeforeElement =
                item;
            break;
        }
    }
    if (insertBeforeElement) {
        if (draggedParticipantElement
            .nextElementSibling !==
            insertBeforeElement) {
            hostParticipantList
                .insertBefore(draggedParticipantElement, insertBeforeElement);
        }
    }
    else {
        hostParticipantList
            .appendChild(draggedParticipantElement);
    }
    updateParticipantOrderNumbers();
}
async function finishParticipantDrag(event, handle, pointerMoveHandler, pointerEndHandler) {
    if (!draggedParticipantElement) {
        return;
    }
    handle.removeEventListener(__to_decode(241), pointerMoveHandler);
    handle.removeEventListener(__to_decode(242), pointerEndHandler);
    handle.removeEventListener(__to_decode(243), pointerEndHandler);
    try {
        if (handle.hasPointerCapture(event.pointerId)) {
            handle.releasePointerCapture(event.pointerId);
        }
    }
    catch (error) {
    }
    draggedParticipantElement
        .classList
        .remove(__to_decode(323));
    hostParticipantList
        .classList
        .remove(__to_decode(324));
    document.body
        .classList
        .remove(__to_decode(325));
    draggedParticipantId =
        null;
    draggedParticipantElement =
        null;
    await scheduleParticipantOrderSave();
}
function updateParticipantOrderNumbers() {
    const items = hostParticipantList
        .querySelectorAll(__to_decode(321));
    items.forEach((item, index) => {
        const number = item.querySelector(__to_decode(326));
        if (number) {
            number.textContent =
                String(index + 1);
        }
    });
}
async function scheduleParticipantOrderSave() {
    clearTimeout(participantOrderSaveTimer);
    return new Promise(resolve => {
        participantOrderSaveTimer =
            setTimeout(async () => {
                try {
                    await saveParticipantOrder();
                }
                finally {
                    resolve();
                }
            }, 80);
    });
}
async function saveParticipantOrder() {
    if (!currentTournament
        ||
            !isHost
        ||
            currentTournament.status !== __to_decode(198)) {
        return;
    }
    if (participantOrderSaving) {
        return;
    }
    const items = [
        ...hostParticipantList
            .querySelectorAll(__to_decode(321))
    ];
    const orderedIds = items
        .map(item => item.dataset
        .reorderParticipantId)
        .filter(Boolean);
    if (orderedIds.length !==
        currentParticipants.length) {
        showMessage(__to_decode(327), __to_decode(78));
        await safeReloadTournamentData();
        return;
    }
    if (new Set(orderedIds).size !==
        orderedIds.length) {
        showMessage(__to_decode(328), __to_decode(78));
        await safeReloadTournamentData();
        return;
    }
    participantOrderSaving =
        true;
    hostParticipantList
        .classList
        .add(__to_decode(329));
    try {
        const { error } = await supabaseClient.rpc(__to_decode(330), {
            p_tournament_id: currentTournament.id,
            p_participant_ids: orderedIds
        });
        if (error) {
            throw error;
        }
        const participantMap = new Map(currentParticipants.map(participant => [
            participant.id,
            participant
        ]));
        currentParticipants =
            orderedIds
                .map((participantId, index) => {
                const participant = participantMap.get(participantId);
                if (!participant) {
                    return null;
                }
                return {
                    ...participant,
                    bracket_order: index + 1
                };
            })
                .filter(Boolean);
        currentParticipant =
            currentParticipants.find(participant => participant.user_id ===
                currentUser.id) || null;
        showMessage(__to_decode(331), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
    finally {
        participantOrderSaving =
            false;
        hostParticipantList
            .classList
            .remove(__to_decode(329));
    }
}
async function handleStartTournament() {
    if (!currentTournament) {
        return;
    }
    syncBracketSetupState();
    const activeParticipants = currentParticipants.filter(participant => participant.status !== __to_decode(225));
    if (activeParticipants.length < 2) {
        showMessage(__to_decode(332), __to_decode(78));
        return;
    }
    const expectedSlotCount = nextPowerOfTwoForSetup(activeParticipants.length);
    if (bracketSetupAssignments.length !== expectedSlotCount) {
        showMessage(__to_decode(333), __to_decode(78));
        return;
    }
    const assignedIds = bracketSetupAssignments.filter(Boolean);
    if (assignedIds.length !== activeParticipants.length) {
        const assignedSet = new Set(assignedIds);
        const names = activeParticipants
            .filter(participant => !assignedSet.has(participant.id))
            .map(participant => participant.display_name)
            .join("、");
        showMessage(names
            ? `トーナメント表に配置されていない参加者がいます：${names}`
            : __to_decode(334), __to_decode(78));
        return;
    }
    if (new Set(assignedIds).size !== assignedIds.length) {
        showMessage(__to_decode(335), __to_decode(78));
        return;
    }
    const validParticipantIds = new Set(activeParticipants.map(participant => participant.id));
    if (assignedIds.some(id => !validParticipantIds.has(id))) {
        showMessage(__to_decode(336), __to_decode(78));
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(337), __to_decode(338), __to_decode(337), __to_decode(161));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(startTournamentButton, true, __to_decode(339));
        const { error: saveBracketError } = await supabaseClient.rpc(__to_decode(340), {
            p_tournament_id: currentTournament.id,
            p_player_ids: bracketSetupAssignments.map(participantId => participantId || null)
        });
        if (saveBracketError) {
            throw saveBracketError;
        }
        const { error: startError } = await supabaseClient.rpc(__to_decode(341), {
            p_tournament_id: currentTournament.id
        });
        if (startError) {
            throw startError;
        }
        bracketSetupConfirmed = true;
        await loadTournamentData();
        if (currentTournament?.tournament_mode === __to_decode(103) &&
            currentTournament.status === __to_decode(100) &&
            !youtubeMonitorActive) {
            await startYoutubeChatMonitor();
        }
        requestAnimationFrame(() => {
            document.getElementById(__to_decode(342))?.scrollIntoView({ behavior: __to_decode(306), block: __to_decode(343) });
        });
        showMessage(__to_decode(344), __to_decode(161));
    }
    catch (error) {
        console.error(__to_decode(345), error);
        await safeReloadTournamentData();
        if (currentTournament &&
            (currentTournament.status === __to_decode(100) ||
                currentTournament.status === __to_decode(94))) {
            bracketSetupConfirmed = true;
            if (currentTournament.tournament_mode === __to_decode(103) &&
                currentTournament.status === __to_decode(100) &&
                !youtubeMonitorActive) {
                await startYoutubeChatMonitor();
            }
            requestAnimationFrame(() => {
                document.getElementById(__to_decode(342))?.scrollIntoView({
                    behavior: __to_decode(306),
                    block: __to_decode(343)
                });
            });
            showMessage(__to_decode(344), __to_decode(161));
        }
        else {
            showMessage(translateError(error), __to_decode(78));
        }
    }
    finally {
        setButtonLoading(startTournamentButton, false);
        if (currentTournament) {
            startTournamentButton.disabled =
                currentTournament.status !== __to_decode(198);
        }
    }
}
async function handlePauseTournament() {
    if (!currentTournament || !isHost || currentTournament.status !== __to_decode(100))
        return;
    const paused = Boolean(currentTournament.paused_at);
    const ok = await showConfirmDialog(paused ? __to_decode(289) : __to_decode(290), paused ? __to_decode(346) : __to_decode(347), paused ? __to_decode(289) : __to_decode(348), paused ? __to_decode(161) : __to_decode(349));
    if (!ok)
        return;
    try {
        pauseTournamentButton.disabled = true;
        const { error } = await supabaseClient.rpc(paused ? __to_decode(350) : __to_decode(351), { p_tournament_id: currentTournament.id });
        if (error)
            throw error;
        await loadTournamentData();
        showMessage(paused ? __to_decode(352) : __to_decode(353), paused ? __to_decode(161) : __to_decode(349));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        if (pauseTournamentButton)
            pauseTournamentButton.disabled = false;
    }
}
async function handleVictory() {
    const matchId = victoryButton
        .dataset
        .matchId;
    if (!matchId) {
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(354), __to_decode(355), __to_decode(354), __to_decode(161));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(victoryButton, true, __to_decode(356));
        const { error } = await supabaseClient.rpc(__to_decode(357), {
            p_match_id: matchId
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(__to_decode(358), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
    finally {
        setButtonLoading(victoryButton, false);
        if (myMatchArea
            .classList
            .contains(__to_decode(63))) {
            victoryButton.disabled =
                true;
        }
    }
}
async function handleUndo() {
    if (!currentTournament) {
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(359), __to_decode(360), "戻す");
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(undoButton, true, __to_decode(361));
        const { error } = await supabaseClient.rpc(__to_decode(362), {
            p_tournament_id: currentTournament.id
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(__to_decode(363), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
    finally {
        setButtonLoading(undoButton, false);
        if (currentTournament) {
            undoButton.disabled =
                currentTournament.status === __to_decode(198);
        }
    }
}
async function handleResetTournament() {
    if (!currentTournament) {
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(364), __to_decode(365), __to_decode(366));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(resetTournamentButton, true, __to_decode(367));
        const { error } = await supabaseClient.rpc(__to_decode(368), {
            p_tournament_id: currentTournament.id
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(__to_decode(369), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
    finally {
        setButtonLoading(resetTournamentButton, false);
        if (currentTournament) {
            resetTournamentButton.disabled =
                currentTournament.status === __to_decode(198)
                    &&
                        currentMatches.length ===
                            0;
        }
    }
}
async function handleReopenTournament() {
    if (!currentTournament
        ||
            !isHost
        ||
            !currentTournament.archived_at) {
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(370), __to_decode(371), __to_decode(372));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(reopenTournamentButton, true, __to_decode(373));
        const { error } = await supabaseClient.rpc(__to_decode(374), {
            p_tournament_id: currentTournament.id
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        await loadMyTournaments();
        showMessage(__to_decode(352), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
    finally {
        setButtonLoading(reopenTournamentButton, false);
    }
}
async function handleArchiveAllHostTournaments() {
    const confirmed = await showConfirmDialog(__to_decode(375), __to_decode(376), __to_decode(377));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(archiveAllHostTournamentsButton, true, __to_decode(378));
        const { data, error } = await supabaseClient.rpc(__to_decode(379));
        if (error) {
            throw error;
        }
        await loadMyTournaments();
        const count = Number(data ?? 0);
        showMessage(count > 0
            ? `${count}件の大会を終了しました。`
            : __to_decode(380), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(archiveAllHostTournamentsButton, false);
    }
}
async function handleDeleteAllHostTournaments() {
    const confirmed = await showConfirmDialog(__to_decode(381), __to_decode(382), __to_decode(383));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(deleteAllHostTournamentsButton, true, __to_decode(384));
        const { error: archiveError } = await supabaseClient.rpc(__to_decode(379));
        if (archiveError) {
            throw archiveError;
        }
        await new Promise(resolve => setTimeout(resolve, 350));
        const { data, error } = await supabaseClient.rpc(__to_decode(385));
        if (error) {
            throw error;
        }
        await loadMyTournaments();
        const count = Number(data ?? 0);
        showMessage(count > 0
            ? `${count}件の大会を完全に削除しました。`
            : __to_decode(386), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(deleteAllHostTournamentsButton, false);
    }
}
async function handleArchiveTournament() {
    if (!currentTournament
        ||
            !isHost) {
        return;
    }
    const confirmed = await showConfirmDialog(__to_decode(387), __to_decode(388), __to_decode(389));
    if (!confirmed) {
        return;
    }
    try {
        setButtonLoading(archiveTournamentButton, true, __to_decode(378));
        const { error } = await supabaseClient.rpc(__to_decode(390), {
            p_tournament_id: currentTournament.id
        });
        if (error) {
            throw error;
        }
        showMessage(__to_decode(391), __to_decode(161));
        await handleLeaveTournament();
        await loadMyTournaments();
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
    finally {
        setButtonLoading(archiveTournamentButton, false);
    }
}
async function handleParticipantAction(event) {
    const button = event.currentTarget;
    const participantId = button.dataset
        .participantId;
    const action = button.dataset
        .action;
    const participant = getParticipant(participantId);
    if (!participant) {
        return;
    }
    let newStatus;
    let title;
    let message;
    let confirmText;
    let dialogType = __to_decode(392);
    if (action === __to_decode(393)) {
        newStatus = __to_decode(227);
        title = __to_decode(394);
        message =
            `${participant.display_name} さんを一時ブロックします。参加者は大会に残りますが、勝利ボタンを押せなくなります。`;
        confirmText = __to_decode(394);
    }
    else if (action ===
        "ban") {
        newStatus = __to_decode(225);
        title =
            "BAN";
        message =
            `${participant.display_name} さんをBANします。進行中の対戦に相手がいる場合、相手が自動的に勝ち上がります。`;
        confirmText = __to_decode(395);
    }
    else if (action === __to_decode(311)) {
        title = __to_decode(396);
        message =
            `${participant.display_name} さんを参加者一覧とトーナメント配置から削除します。BANではないため、削除後は同じブラウザから再参加できます。`;
        confirmText = __to_decode(397);
        const confirmed = await showConfirmDialog(title, message, confirmText, __to_decode(392));
        if (!confirmed) {
            return;
        }
        try {
            button.disabled =
                true;
            const { error } = await supabaseClient.rpc(__to_decode(398), {
                p_participant_id: participantId
            });
            if (error) {
                throw error;
            }
            await loadTournamentData();
            showMessage(__to_decode(399), __to_decode(161));
        }
        catch (error) {
            console.error(error);
            showMessage(translateError(error), __to_decode(78));
            await safeReloadTournamentData();
        }
        return;
    }
    else {
        newStatus = __to_decode(100);
        title = __to_decode(400);
        message =
            `${participant.display_name} さんのブロックを解除します。`;
        confirmText = __to_decode(401);
        dialogType = __to_decode(161);
    }
    const confirmed = await showConfirmDialog(title, message, confirmText, dialogType);
    if (!confirmed) {
        return;
    }
    try {
        button.disabled =
            true;
        const { error } = await supabaseClient.rpc(__to_decode(402), {
            p_participant_id: participantId,
            p_status: newStatus
        });
        if (error) {
            throw error;
        }
        await loadTournamentData();
        showMessage(getParticipantActionSuccessMessage(newStatus), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
}
async function subscribeRealtime() {
    await unsubscribeRealtime();
    if (!currentTournament) {
        return;
    }
    const tournamentId = currentTournament.id;
    realtimeChannel =
        supabaseClient
            .channel(`tournament-${tournamentId}`)
            .on(__to_decode(403), {
            event: "*",
            schema: __to_decode(404),
            table: __to_decode(82),
            filter: `id=eq.${tournamentId}`
        }, handleRealtimeChange)
            .on(__to_decode(403), {
            event: "*",
            schema: __to_decode(404),
            table: __to_decode(85),
            filter: `tournament_id=eq.${tournamentId}`
        }, handleRealtimeChange)
            .on(__to_decode(403), {
            event: "*",
            schema: __to_decode(404),
            table: __to_decode(89),
            filter: `tournament_id=eq.${tournamentId}`
        }, handleRealtimeChange)
            .subscribe();
}
function handleRealtimeChange(payload) {
    if (payload?.table === __to_decode(82) && payload?.eventType === __to_decode(405)) {
        void handleDeletedTournamentRealtime();
        return;
    }
    if (payload?.table === __to_decode(82) && payload?.eventType === __to_decode(406) && payload?.new?.id === currentTournament?.id) {
        currentTournament = { ...currentTournament, ...payload.new };
        renderTournament();
    }
    if (draggedParticipantElement
        ||
            participantOrderSaving) {
        clearTimeout(realtimeRefreshTimer);
        realtimeRefreshTimer =
            setTimeout(() => {
                handleRealtimeChange();
            }, 250);
        return;
    }
    clearTimeout(realtimeRefreshTimer);
    realtimeRefreshTimer =
        setTimeout(async () => {
            try {
                await loadTournamentData();
            }
            catch (error) {
                console.error(__to_decode(407), error);
            }
        }, 120);
}
function subscribeTournamentListRealtime() {
    if (tournamentListRealtimeChannel)
        return;
    tournamentListRealtimeChannel = supabaseClient
        .channel(__to_decode(408))
        .on(__to_decode(403), { event: "*", schema: __to_decode(404), table: __to_decode(82) }, () => {
        clearTimeout(tournamentListRealtimeTimer);
        tournamentListRealtimeTimer = setTimeout(async () => {
            if (!homeScreen.classList.contains(__to_decode(63))) {
                try {
                    await loadMyTournaments();
                }
                catch (error) {
                    console.error(__to_decode(409), error);
                }
            }
        }, 80);
    })
        .subscribe();
}
async function handleDeletedTournamentRealtime() {
    if (!currentTournament)
        return;
    clearTimeout(participantOrderSaveTimer);
    participantOrderSaveTimer = null;
    draggedParticipantId = null;
    draggedParticipantElement = null;
    participantOrderSaving = false;
    document.body.classList.remove(__to_decode(325));
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
    showMessage(__to_decode(410), __to_decode(411));
}
async function unsubscribeRealtime() {
    clearTimeout(realtimeRefreshTimer);
    realtimeRefreshTimer =
        null;
    if (!realtimeChannel) {
        return;
    }
    try {
        await supabaseClient
            .removeChannel(realtimeChannel);
    }
    catch (error) {
        console.warn(__to_decode(412), error);
    }
    realtimeChannel =
        null;
}
async function safeReloadTournamentData() {
    if (!currentTournament) {
        return;
    }
    if (draggedParticipantElement) {
        return;
    }
    try {
        await loadTournamentData();
    }
    catch (error) {
        console.error(__to_decode(413), error);
    }
}
function toggleTournamentCodeVisibility() {
    if (!currentTournament)
        return;
    isTournamentCodeVisible = !isTournamentCodeVisible;
    currentTournamentCode.textContent = isTournamentCodeVisible
        ? currentTournament.tournament_code
        : getTournamentCodeMask();
    toggleTournamentCodeButton.classList.toggle(__to_decode(271), !isTournamentCodeVisible);
    updateTournamentCodeEyeIcon();
    const label = isTournamentCodeVisible ? __to_decode(414) : __to_decode(273);
    toggleTournamentCodeButton.setAttribute(__to_decode(272), label);
    toggleTournamentCodeButton.title = label;
}
async function copyTournamentCode() {
    if (!currentTournament) {
        return;
    }
    const code = currentTournament
        .tournament_code;
    try {
        await navigator
            .clipboard
            .writeText(code);
        showMessage(__to_decode(415), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(`大会コード：${code}`, __to_decode(411));
    }
}
async function handleLeaveTournament() {
    clearTimeout(participantOrderSaveTimer);
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
        .remove(__to_decode(325));
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
    showTournamentMode(__to_decode(106));
    window.history.replaceState({ screen: __to_decode(416), mode: __to_decode(106) }, "", window.location.pathname);
    await loadMyTournaments();
}
const YOUTUBE_HANDLE_STORAGE_KEY = __to_decode(417);
function restoreYoutubeHostHandle() {
    try {
        const saved = localStorage.getItem(YOUTUBE_HANDLE_STORAGE_KEY);
        if (saved && youtubeHostHandle)
            youtubeHostHandle.value = saved;
    }
    catch (error) {
        console.warn(__to_decode(418), error);
    }
    youtubeHostHandle?.addEventListener(__to_decode(419), () => {
        try {
            localStorage.setItem(YOUTUBE_HANDLE_STORAGE_KEY, youtubeHostHandle.value.trim());
        }
        catch (error) {
            console.warn(__to_decode(420), error);
        }
    });
}
function restoreHomeModeAfterReload() {
    showTournamentMode(__to_decode(106));
}
function openTournamentMode(mode) {
    showTournamentMode(__to_decode(106));
}
function showTournamentMode(mode) {
    tournamentModeSelection?.classList.add(__to_decode(63));
    normalTournamentMode?.classList.remove(__to_decode(63));
    youtubeTournamentMode?.classList.add(__to_decode(63));
    window.scrollTo({ top: 0, behavior: __to_decode(306) });
}
function showHome() {
    stopYoutubeChatMonitor();
    homeScreen
        .classList
        .remove(__to_decode(63));
    showTournamentMode(__to_decode(106));
    tournamentScreen
        .classList
        .add(__to_decode(63));
    archivedTournamentList
        .classList
        .add(__to_decode(63));
    showArchivedTournamentsButton
        .textContent = __to_decode(121);
}
function showTournament() {
    document.getElementById(__to_decode(421))?.classList.add(__to_decode(63));
    homeScreen
        .classList
        .add(__to_decode(63));
    tournamentScreen
        .classList
        .remove(__to_decode(63));
    window.scrollTo({
        top: 0,
        behavior: __to_decode(306)
    });
}
async function handleBrowserHistoryNavigation() {
    const accessToken = getTournamentAccessTokenFromURL();
    try {
        if (accessToken) {
            await openTournamentByAccessToken(accessToken, { updateHistory: false });
            return;
        }
        clearTimeout(participantOrderSaveTimer);
        participantOrderSaveTimer = null;
        draggedParticipantId = null;
        draggedParticipantElement = null;
        participantOrderSaving = false;
        document.body.classList.remove(__to_decode(325));
        await unsubscribeRealtime();
        currentTournament = null;
        currentParticipants = [];
        currentMatches = [];
        currentParticipant = null;
        isHost = false;
        showHome();
        renderYoutubeCreatePage();
        const mode = window.history.state?.mode;
        if (mode === __to_decode(106) || mode === __to_decode(103)) {
            showTournamentMode(mode);
        }
        await loadMyTournaments();
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
    }
}
function getTournamentAccessTokenFromURL() {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("t");
    return token ? token.trim() : null;
}
function setTournamentURL(accessToken) {
    const url = new URL(window.location.href);
    url.searchParams.set("t", accessToken);
    url.searchParams.delete(__to_decode(422));
    const nextUrl = url.pathname + url.search + url.hash;
    const currentUrl = window.location.pathname + window.location.search + window.location.hash;
    if (nextUrl !== currentUrl) {
        window.history.pushState({ screen: __to_decode(423), accessToken }, "", nextUrl);
    }
}
function clearTournamentURL() {
    const url = new URL(window.location.href);
    url.searchParams.delete("t");
    url.searchParams.delete(__to_decode(422));
    window.history
        .pushState({}, "", url.pathname);
}
function showConfirmDialog(title, message, confirmText = __to_decode(424), type = __to_decode(392)) {
    return new Promise(resolve => {
        dialogResolve =
            resolve;
        dialogTitle.textContent =
            title;
        dialogMessage.textContent =
            message;
        dialogConfirm.textContent =
            confirmText;
        dialogOverlay
            .classList
            .remove(__to_decode(425), __to_decode(426));
        dialogConfirm
            .classList
            .remove(__to_decode(427), __to_decode(428));
        if (type === __to_decode(161)) {
            dialogOverlay
                .classList
                .add(__to_decode(425));
            dialogConfirm
                .classList
                .add(__to_decode(428));
        }
        else {
            dialogOverlay
                .classList
                .add(__to_decode(426));
            dialogConfirm
                .classList
                .add(__to_decode(427));
        }
        dialogOverlay
            .classList
            .remove(__to_decode(63));
    });
}
function closeDialog(result) {
    if (dialogOverlay
        .classList
        .contains(__to_decode(63))) {
        return;
    }
    dialogOverlay
        .classList
        .add(__to_decode(63));
    if (dialogResolve) {
        const resolve = dialogResolve;
        dialogResolve =
            null;
        resolve(result);
    }
}
function getParticipant(id) {
    if (!id) {
        return null;
    }
    return (currentParticipants.find(participant => participant.id ===
        id)
        ||
            null);
}
function groupMatchesByRound() {
    const rounds = {};
    for (const match of currentMatches) {
        if (!rounds[match.round_number]) {
            rounds[match.round_number] =
                [];
        }
        rounds[match.round_number].push(match);
    }
    return rounds;
}
function getRoundTitle(roundNumber, maxRound) {
    if (roundNumber ===
        maxRound) {
        return __to_decode(429);
    }
    if (roundNumber ===
        maxRound - 1) {
        return __to_decode(430);
    }
    return `ROUND ${roundNumber}`;
}
function getParticipantStatus(status) {
    if (status === __to_decode(227)) {
        return {
            text: __to_decode(394),
            className: __to_decode(227)
        };
    }
    if (status === __to_decode(225)) {
        return {
            text: "BAN",
            className: __to_decode(225)
        };
    }
    return {
        text: "参加中",
        className: __to_decode(100)
    };
}
function getParticipantActionSuccessMessage(status) {
    if (status === __to_decode(227)) {
        return __to_decode(431);
    }
    if (status === __to_decode(225)) {
        return __to_decode(432);
    }
    return __to_decode(433);
}
function translateError(error) {
    const rawMessage = error?.message
        ||
            String(error)
        || __to_decode(434);
    const message = rawMessage
        .toLowerCase();
    if (message.includes(__to_decode(435))) {
        return __to_decode(436);
    }
    if (message.includes(__to_decode(437))) {
        return __to_decode(142);
    }
    if (message.includes(__to_decode(438))) {
        return __to_decode(439);
    }
    if (message.includes(__to_decode(440))) {
        return __to_decode(165);
    }
    if (message.includes(__to_decode(441))) {
        return __to_decode(442);
    }
    if (message.includes(__to_decode(443))) {
        return __to_decode(444);
    }
    if (message.includes(__to_decode(445))) {
        return __to_decode(179);
    }
    if (message.includes(__to_decode(446))) {
        return __to_decode(447);
    }
    if (message.includes(__to_decode(448))
        ||
            message.includes(__to_decode(449))) {
        return __to_decode(450);
    }
    if (message.includes(__to_decode(451))) {
        return __to_decode(452);
    }
    if (message.includes(__to_decode(453))) {
        return __to_decode(454);
    }
    if (message.includes(__to_decode(455))) {
        return __to_decode(456);
    }
    if (message.includes(__to_decode(457))) {
        return __to_decode(458);
    }
    if (message.includes(__to_decode(459))) {
        return __to_decode(460);
    }
    if (message.includes(__to_decode(461))
        ||
            message.includes(__to_decode(462))) {
        return __to_decode(463);
    }
    if (message.includes(__to_decode(464))) {
        return __to_decode(465);
    }
    if (message.includes(__to_decode(466))) {
        return __to_decode(467);
    }
    if (message.includes(__to_decode(468))) {
        return __to_decode(469);
    }
    if (message.includes(__to_decode(470))
        ||
            message.includes(__to_decode(471))) {
        return __to_decode(472);
    }
    if (message.includes(__to_decode(473))) {
        return __to_decode(474);
    }
    if (message.includes(__to_decode(475))) {
        return __to_decode(476);
    }
    if (message.includes(__to_decode(477))) {
        return __to_decode(478);
    }
    if (message.includes(__to_decode(479))) {
        return __to_decode(480);
    }
    if (message.includes(__to_decode(481))
        &&
            message.includes(__to_decode(88))) {
        return __to_decode(332);
    }
    if (message.includes(__to_decode(482))
        &&
            message.includes(__to_decode(88))) {
        return __to_decode(332);
    }
    if (message.includes(__to_decode(483))) {
        return __to_decode(484);
    }
    if (message.includes(__to_decode(485))
        ||
            message.includes(__to_decode(486))) {
        return __to_decode(487);
    }
    console.error(__to_decode(488), rawMessage);
    return (__to_decode(489) + __to_decode(490));
}
let messageTimer = null;
function showMessage(text, type = __to_decode(411), requireClick = false) {
    clearTimeout(messageTimer);
    messageElement
        .classList
        .remove(__to_decode(491));
    messageElement
        .textContent =
        text;
    messageElement
        .className =
        `message ${type}`;
    messageElement
        .classList
        .add(__to_decode(492));
    messageElement
        .classList
        .remove(__to_decode(63));
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            messageElement
                .classList
                .remove(__to_decode(492));
        });
    });
    messageElement.onclick = null;
    messageElement.classList.remove(__to_decode(493));
    if (requireClick) {
        messageElement.classList.add(__to_decode(493));
        messageElement.title = __to_decode(494);
        messageElement.onclick = () => {
            clearTimeout(messageTimer);
            messageElement.classList.add(__to_decode(491));
            setTimeout(() => {
                messageElement.classList.add(__to_decode(63));
                messageElement.classList.remove(__to_decode(491), __to_decode(493));
                messageElement.onclick = null;
                messageElement.title = "";
            }, 300);
        };
        return;
    }
    messageElement.title = "";
    messageTimer =
        setTimeout(() => {
            messageElement
                .classList
                .add(__to_decode(491));
            setTimeout(() => {
                messageElement
                    .classList
                    .add(__to_decode(63));
                messageElement
                    .classList
                    .remove(__to_decode(491));
            }, 300);
        }, 3000);
}
function setButtonLoading(button, loading, loadingText = __to_decode(361)) {
    if (!button) {
        return;
    }
    if (loading) {
        if (!button.dataset
            .originalText) {
            button.dataset
                .originalText =
                button.textContent;
        }
        button.disabled =
            true;
        button.textContent =
            loadingText;
    }
    else {
        if (button.dataset
            .originalText) {
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
function setGlobalLoading(loading) {
    createTournamentButton.disabled =
        loading;
    joinTournamentButton.disabled =
        loading;
}
function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", __to_decode(95))
        .replaceAll("<", __to_decode(96))
        .replaceAll(">", __to_decode(97))
        .replaceAll('"', __to_decode(98))
        .replaceAll("'", __to_decode(99));
}
window.addEventListener(__to_decode(495), () => {
    clearTimeout(realtimeRefreshTimer);
    clearTimeout(participantOrderSaveTimer);
});
window.addEventListener(__to_decode(496), () => {
    if (draggedParticipantElement) {
        draggedParticipantElement
            .classList
            .remove(__to_decode(323));
        draggedParticipantElement =
            null;
        draggedParticipantId =
            null;
        hostParticipantList
            .classList
            .remove(__to_decode(324));
        document.body
            .classList
            .remove(__to_decode(325));
    }
});
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
    const manualBulkButton = document.getElementById(__to_decode(497));
    const randomButton = document.getElementById(__to_decode(498));
    const confirmButton = document.getElementById(__to_decode(499));
    const previewFullscreenButton = document.getElementById(__to_decode(113));
    const pool = document.getElementById(__to_decode(500));
    const canvas = document.getElementById(__to_decode(116));
    const bulkTextarea = document.getElementById(__to_decode(501));
    const bulkButton = document.getElementById(__to_decode(502));
    const bulkToggleButton = document.getElementById(__to_decode(503));
    if (!randomButton || randomButton.dataset.ready === "1")
        return;
    randomButton.dataset.ready = "1";
    manualBulkButton?.addEventListener(__to_decode(80), openManualBulkPlacementWindow);
    randomButton.addEventListener(__to_decode(80), randomizeBracketSetup);
    confirmButton.addEventListener(__to_decode(80), confirmBracketSetup);
    pool?.addEventListener(__to_decode(234), beginBracketSetupDrag);
    pool?.addEventListener(__to_decode(80), (event) => {
        if (event.target.closest(__to_decode(504))) {
            toggleBracketSetupParticipantPool();
        }
    });
    pool?.addEventListener(__to_decode(107), handleBracketPoolParticipantSearch);
    pool?.addEventListener(__to_decode(234), beginBracketPoolResize);
    canvas?.addEventListener(__to_decode(234), beginBracketSetupDrag);
    window.addEventListener(__to_decode(241), moveBracketSetupDrag, { passive: false });
    window.addEventListener(__to_decode(242), finishBracketSetupDrag);
    window.addEventListener(__to_decode(243), cancelBracketSetupDrag);
    bulkTextarea?.addEventListener(__to_decode(419), updateBulkParticipantPreview);
    bulkButton?.addEventListener(__to_decode(80), addBulkParticipants);
    bulkToggleButton?.addEventListener(__to_decode(80), toggleBulkParticipantBox);
    applyBulkParticipantVisibility();
}
function nextPowerOfTwoForSetup(n) {
    if (n <= 1)
        return n;
    let p = 1;
    while (p < n)
        p *= 2;
    return p;
}
function getBracketSetupUsableParticipants() {
    return currentParticipants.filter((p) => p.status !== __to_decode(225));
}
function getSeedMatchPriority(pairCount, centered) {
    if (pairCount <= 0)
        return [];
    const result = [];
    const add = (matchNumber) => {
        const n = Math.round(matchNumber);
        if (n >= 1 && n <= pairCount && !result.includes(n))
            result.push(n);
    };
    add(1);
    if (pairCount > 1)
        add(pairCount);
    if (pairCount > 2) {
        add(pairCount / 2);
        add(pairCount / 2 + 1);
    }
    if (centered) {
        for (let divisor = 4; divisor <= pairCount; divisor *= 2) {
            const step = pairCount / divisor;
            if (step < 1)
                break;
            for (let k = 1; k < divisor; k += 2)
                add(k * step);
        }
    }
    else {
        let left = 2;
        let right = pairCount - 1;
        while (result.length < pairCount) {
            add(left++);
            add(right--);
            if (left > right + 1)
                break;
        }
    }
    while (result.length < pairCount) {
        let best = null;
        let bestDistance = -1;
        for (let n = 1; n <= pairCount; n++) {
            if (result.includes(n))
                continue;
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
        if (ids[0])
            assignments[0] = ids[0];
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
            const playerSide = randomizePlayers && Math.random() < 0.5 ? 1 : 0;
            assignments[base + playerSide] = ids[playerIndex++] || null;
        }
        else {
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
        bracketSetupAssignments = buildSeedDistributedAssignments([...previous, ...missing].slice(0, slotCount), false);
        bracketSetupKnownParticipantKey = participantKey;
        bracketSetupConfirmed = false;
    }
}
function hydrateBracketSetupFromSavedSlots() {
    if (!currentBracketSlots.length)
        return;
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
    const form = event.target.closest(__to_decode(505));
    if (!form)
        return;
    event.preventDefault();
    const input = form.querySelector(__to_decode(506));
    const name = (input?.value || "").trim();
    if (!name) {
        showMessage(__to_decode(303), __to_decode(78));
        return;
    }
    const participant = getBracketSetupUsableParticipants()
        .find((p) => (p.display_name || "").trim() === name);
    if (!participant) {
        showMessage(`「${name}」と完全一致する参加者はいません。`, __to_decode(78));
        return;
    }
    if (!bracketSetupParticipantPoolVisible) {
        bracketSetupParticipantPoolVisible = true;
        renderBracketSetupPrototype();
    }
    const item = document.querySelector(`#bracketSetupParticipantPool [data-setup-participant-id="${CSS.escape(participant.id)}"]`);
    if (!item)
        return;
    document.querySelectorAll(__to_decode(507))
        .forEach((el) => el.classList.remove(__to_decode(305)));
    item.classList.add(__to_decode(305));
    item.scrollIntoView({ behavior: __to_decode(306), block: __to_decode(301), inline: __to_decode(508) });
    window.setTimeout(() => item.classList.remove(__to_decode(305)), 2200);
}
function beginBracketPoolResize(event) {
    const handle = event.target.closest(__to_decode(509));
    if (!handle || event.button !== 0)
        return;
    const list = document.querySelector(__to_decode(510));
    if (!list || list.classList.contains(__to_decode(63)))
        return;
    event.preventDefault();
    event.stopPropagation();
    const startY = event.clientY;
    const startHeight = list.getBoundingClientRect().height;
    const minHeight = 84;
    const maxHeight = Math.max(220, Math.min(720, window.innerHeight * 0.72));
    const move = (moveEvent) => {
        bracketSetupParticipantPoolHeight = Math.round(Math.max(minHeight, Math.min(maxHeight, startHeight + moveEvent.clientY - startY)));
        list.style.height = `${bracketSetupParticipantPoolHeight}px`;
        list.style.maxHeight = __to_decode(511);
    };
    const end = () => {
        window.removeEventListener(__to_decode(241), move);
        window.removeEventListener(__to_decode(242), end);
        window.removeEventListener(__to_decode(243), end);
        document.body.classList.remove(__to_decode(512));
    };
    document.body.classList.add(__to_decode(512));
    window.addEventListener(__to_decode(241), move);
    window.addEventListener(__to_decode(242), end);
    window.addEventListener(__to_decode(243), end);
}
function placeLiveParticipantSearchForCurrentMode() {
    const form = document.getElementById(__to_decode(114));
    const prototype = document.getElementById(__to_decode(342));
    const controls = prototype?.querySelector(__to_decode(513));
    const canvas = document.getElementById(__to_decode(116));
    if (!form || !prototype || !controls || !canvas)
        return;
    let marker = document.getElementById(__to_decode(514));
    if (!marker) {
        marker = document.createElement(__to_decode(515));
        marker.id = __to_decode(514);
        marker.hidden = true;
        controls.insertBefore(marker, form);
    }
    if (isBracketFullscreenMode()) {
        if (form.parentElement !== prototype) {
            prototype.insertBefore(form, canvas);
        }
    }
    else if (form.parentElement !== controls) {
        marker.insertAdjacentElement(__to_decode(516), form);
    }
}
function renderBracketSetupPrototype() {
    const section = document.getElementById(__to_decode(342));
    if (!section || !currentTournament)
        return;
    const show = isHost || currentTournament.status !== __to_decode(198);
    section.classList.toggle(__to_decode(63), !show);
    if (!show)
        return;
    document.body.classList.toggle(__to_decode(517), isBracketFullscreenMode());
    updateBracketViewerHeader();
    const isWaiting = currentTournament.status === __to_decode(198) && !currentTournament.archived_at;
    section.classList.toggle(__to_decode(518), !isWaiting);
    section.classList.toggle(__to_decode(519), isWaiting);
    const bracketSetupPrimaryActions = document.querySelector(__to_decode(520));
    if (bracketSetupPrimaryActions) {
        bracketSetupPrimaryActions.classList.toggle(__to_decode(63), !isWaiting);
    }
    const previewFullscreenButton = document.getElementById(__to_decode(113));
    if (previewFullscreenButton) {
        previewFullscreenButton.classList.toggle(__to_decode(63), isWaiting && !bracketSetupConfirmed);
    }
    placeLiveParticipantSearchForCurrentMode();
    const bracketLiveParticipantSearchForm = document.getElementById(__to_decode(114));
    if (bracketLiveParticipantSearchForm) {
        bracketLiveParticipantSearchForm.classList.toggle(__to_decode(63), isWaiting);
    }
    if (fullscreenBracketButton)
        fullscreenBracketButton.classList.toggle(__to_decode(63), Boolean(currentTournament.archived_at) || (isWaiting && !bracketSetupConfirmed));
    const bulkBox = section.querySelector(__to_decode(521));
    const summary = section.querySelector(__to_decode(522));
    const controls = section.querySelector(__to_decode(513));
    const note = section.querySelector(__to_decode(523));
    const poolWrap = document.getElementById(__to_decode(500));
    [bulkBox, summary, controls, note, poolWrap].forEach(el => { if (el)
        el.classList.toggle(__to_decode(63), !isWaiting); });
    if (isWaiting) {
        applyBulkParticipantVisibility();
        if (!(isBracketFullscreenMode() && loadBracketSetupPreview()))
            syncBracketSetupState();
    }
    else {
        hydrateBracketSetupFromSavedSlots();
        bracketSetupConfirmed = true;
    }
    const usable = getBracketSetupUsableParticipants();
    const count = usable.length;
    const firstRoundMatches = count >= 2 ? Math.ceil(count / 2) : 0;
    const slotCount = count >= 2 ? nextPowerOfTwoForSetup(count) : count;
    const pool = document.getElementById(__to_decode(500));
    const canvas = document.getElementById(__to_decode(116));
    const playerCount = document.getElementById(__to_decode(524));
    const matchCount = document.getElementById(__to_decode(525));
    const autoSlotCount = document.getElementById(__to_decode(526));
    if (!pool || !canvas)
        return;
    if (playerCount) {
        playerCount.textContent = `${count}人`;
        playerCount.closest(__to_decode(527))?.classList.toggle(__to_decode(528), count >= 256);
    }
    if (matchCount)
        matchCount.textContent = `${firstRoundMatches} MATCH`;
    if (autoSlotCount)
        autoSlotCount.textContent = `${Math.max(0, slotCount - count)}枠`;
    const assignedIds = new Set(bracketSetupAssignments.filter(Boolean));
    pool.innerHTML = `<div class="bracket-setup-pool-head"><div class="bracket-setup-pool-title"><strong>参加者</strong><span class="count-badge">${count} PLAYERS</span></div><button type="button" class="button button-secondary bracket-pool-toggle-button" data-bracket-pool-toggle>${bracketSetupParticipantPoolVisible ? "非表示" : "表示"}</button></div><form class="bracket-pool-search-form ${bracketSetupParticipantPoolVisible ? "" : __to_decode(63)}" data-bracket-pool-search><label for="bracketPoolParticipantSearchInput">参加者の検索</label><div class="bracket-pool-search-row"><input id="bracketPoolParticipantSearchInput" data-bracket-pool-search-input type="text" maxlength="30" placeholder="参加者名を完全一致で検索" autocomplete="off"><button class="button button-secondary" type="submit">検索</button></div></form><div class="bracket-setup-pool-list ${bracketSetupParticipantPoolVisible ? "" : __to_decode(63)}" style="height:${bracketSetupParticipantPoolHeight}px;max-height:none">${usable.map((p) => `<div class="bracket-setup-player ${assignedIds.has(p.id) ? __to_decode(529) : ""} ${p.status === __to_decode(227) ? __to_decode(530) : ""}" data-setup-participant-id="${escapeHTML(p.id)}">☰ ${escapeHTML(p.display_name)}${p.status === __to_decode(227) ? __to_decode(531) : ""}</div>`).join("")}</div><div class="bracket-pool-resize-handle ${bracketSetupParticipantPoolVisible ? "" : __to_decode(63)}" data-bracket-pool-resize title="ドラッグして参加者一覧の高さを変更" aria-label="参加者一覧の高さを変更"><span></span></div>`;
    canvas.innerHTML = createBracketSetupHTML();
    if (!isWaiting) {
        applyLiveResultsToGeneratedBracket(canvas);
    }
    else {
    }
    canvas.querySelectorAll(__to_decode(532)).forEach((slot) => {
        slot.classList.toggle(__to_decode(533), isCurrentUsersParticipant(slot.dataset.setupParticipantId));
    });
    requestAnimationFrame(() => {
        layoutBracketSetupMatches();
        drawBracketSetupConnections();
        setupFullscreenTopScrollbar(canvas);
    });
}
function setupFullscreenTopScrollbar(canvas) {
    const existing = document.getElementById(__to_decode(534));
    if (!isBracketFullscreenMode()) {
        existing?.remove();
        return;
    }
    let topBar = existing;
    if (!topBar) {
        topBar = document.createElement("div");
        topBar.id = __to_decode(534);
        topBar.className = __to_decode(535);
        topBar.innerHTML = __to_decode(536);
        canvas.parentNode.insertBefore(topBar, canvas);
        let syncing = false;
        topBar.addEventListener(__to_decode(537), () => {
            if (syncing)
                return;
            syncing = true;
            canvas.scrollLeft = topBar.scrollLeft;
            syncing = false;
        });
        canvas.addEventListener(__to_decode(537), () => {
            if (syncing)
                return;
            syncing = true;
            topBar.scrollLeft = canvas.scrollLeft;
            syncing = false;
        });
    }
    const inner = topBar.firstElementChild;
    if (inner)
        inner.style.width = `${canvas.scrollWidth}px`;
    topBar.scrollLeft = canvas.scrollLeft;
}
function isCurrentUsersParticipant(participantId) {
    if (!participantId || !currentUser)
        return false;
    const participant = getParticipant(participantId);
    return Boolean(participant && participant.user_id === currentUser.id);
}
function updateBracketViewerHeader() {
    const title = document.getElementById(__to_decode(538));
    const subtitle = document.getElementById(__to_decode(539));
    const viewerName = document.getElementById(__to_decode(540));
    if (!title || !subtitle || !viewerName)
        return;
    if (!isHost && currentParticipant) {
        title.textContent = __to_decode(541);
        subtitle.textContent = __to_decode(542);
        viewerName.textContent = currentParticipant.display_name || "";
        viewerName.classList.remove(__to_decode(63));
    }
    else {
        title.textContent = __to_decode(543);
        subtitle.textContent = __to_decode(544);
        viewerName.textContent = "";
        viewerName.classList.add(__to_decode(63));
    }
}
function liveActionButton(participantId, match) {
    if (!participantId || !match || match.status !== __to_decode(100) || match.winner_id || currentTournament.archived_at)
        return "";
    const participant = getParticipant(participantId);
    if (!participant || participant.status === __to_decode(225))
        return "";
    if (isHost) {
        return `<button type="button" class="generated-win-button host" data-generated-host-win="1" data-match-id="${match.id}" data-winner-id="${participantId}">勝者にする</button>`;
    }
    const mine = isCurrentUsersParticipant(participantId);
    const blocked = currentParticipant && currentParticipant.status !== __to_decode(100);
    if (mine && !blocked && !currentTournament.paused_at) {
        return `<button type="button" class="generated-win-button" data-generated-self-win="1" data-match-id="${match.id}">★ 勝利</button>`;
    }
    return "";
}
function livePlayerSlot(participantId, winnerId, match) {
    const participant = participantId ? getParticipant(participantId) : null;
    if (!participant)
        return __to_decode(545);
    const won = winnerId && winnerId === participantId;
    const mineClass = isCurrentUsersParticipant(participantId) ? __to_decode(546) : "";
    return `<div class="future-slot live-player ${won ? __to_decode(547) : ""}${mineClass}"><span class="bracket-player-name ${getBracketNameFitClass(participant.display_name)}" data-full-name="${escapeHTML(participant.display_name)}">${escapeHTML(participant.display_name)}</span>${won ? __to_decode(548) : liveActionButton(participantId, match)}</div>`;
}
async function handleGeneratedBracketAction(event) {
    const button = event.target.closest(__to_decode(549));
    if (!button || button.disabled)
        return;
    const matchId = button.dataset.matchId;
    const winnerId = button.dataset.winnerId;
    const isHostAction = button.hasAttribute(__to_decode(550));
    const ok = await showConfirmDialog(__to_decode(354), isHostAction ? __to_decode(551) : __to_decode(355), __to_decode(354), __to_decode(161));
    if (!ok)
        return;
    try {
        button.disabled = true;
        const result = isHostAction
            ? await supabaseClient.rpc(__to_decode(288), { p_match_id: matchId, p_winner_id: winnerId })
            : await supabaseClient.rpc(__to_decode(357), { p_match_id: matchId });
        if (result.error)
            throw result.error;
        await loadTournamentData();
        showMessage(__to_decode(358), __to_decode(161));
    }
    catch (error) {
        console.error(error);
        showMessage(translateError(error), __to_decode(78));
        await safeReloadTournamentData();
    }
}
function applyLiveResultsToGeneratedBracket(canvas) {
    if (!currentMatches.length)
        return;
    const rounds = [...new Set(currentMatches.map(m => Number(m.round_number)))].sort((a, b) => a - b);
    const maxRound = Math.max(...rounds);
    const firstRound = currentMatches.filter(m => Number(m.round_number) === 1).sort((a, b) => Number(a.match_number) - Number(b.match_number));
    const centered = getBracketSetupUsableParticipants().length >= 16;
    canvas.querySelectorAll(__to_decode(552)).forEach((el, visualIndex) => {
        let matchIndex = visualIndex;
        if (centered) {
            const leftCount = firstRound.length / 2;
            const inRight = el.closest(__to_decode(553));
            if (inRight) {
                const rightMatches = [...canvas.querySelectorAll(__to_decode(554))];
                matchIndex = leftCount + rightMatches.indexOf(el);
            }
            else {
                const leftMatches = [...canvas.querySelectorAll(__to_decode(555))];
                matchIndex = leftMatches.indexOf(el);
            }
        }
        const visualParticipantIds = [...el.querySelectorAll(__to_decode(532))]
            .map(slot => slot.dataset.setupParticipantId)
            .filter(Boolean);
        let match = null;
        if (visualParticipantIds.length === 2) {
            const wanted = new Set(visualParticipantIds);
            match = firstRound.find(candidate => {
                const ids = [candidate.player1_id, candidate.player2_id].filter(Boolean);
                return ids.length === 2 && ids.every(id => wanted.has(id));
            }) || null;
        }
        else if (visualParticipantIds.length === 1) {
            match = firstRound.find(candidate => candidate.player1_id === visualParticipantIds[0] ||
                candidate.player2_id === visualParticipantIds[0]) || null;
        }
        if (!match && visualParticipantIds.length === 2) {
            match = firstRound[matchIndex] || null;
        }
        if (!match)
            return;
        el.querySelectorAll(__to_decode(532)).forEach(slot => {
            const participantId = slot.dataset.setupParticipantId;
            if (match.winner_id && participantId === match.winner_id) {
                slot.classList.add(__to_decode(556));
                if (!slot.querySelector(__to_decode(557)))
                    slot.insertAdjacentHTML(__to_decode(282), __to_decode(548));
            }
            else {
                const action = liveActionButton(participantId, match);
                if (action)
                    slot.insertAdjacentHTML(__to_decode(282), action);
            }
        });
    });
    for (let round = 2; round <= maxRound; round++) {
        const matches = currentMatches.filter(m => Number(m.round_number) === round).sort((a, b) => Number(a.match_number) - Number(b.match_number));
        if (round === maxRound && centered) {
            const final = matches[0];
            const box = canvas.querySelector(__to_decode(558));
            if (box && final)
                box.innerHTML = `${livePlayerSlot(final.player1_id, final.winner_id, final)}<span>VS</span>${livePlayerSlot(final.player2_id, final.winner_id, final)}`;
            const champ = canvas.querySelector(__to_decode(559));
            if (champ && final?.winner_id) {
                const p = getParticipant(final.winner_id);
                champ.textContent = p ? `優勝：${p.display_name}` : '優勝';
            }
            continue;
        }
        if (!centered) {
            matches.forEach((m) => {
                const matchNumber = Number(m.match_number);
                const el = canvas.querySelector(`.auto-bracket-standard .future-match[data-live-round="${round}"][data-live-match-number="${matchNumber}"]`);
                if (!el)
                    return;
                el.innerHTML = `${livePlayerSlot(m.player1_id, m.winner_id, m)}${livePlayerSlot(m.player2_id, m.winner_id, m)}`;
            });
        }
        else {
            const half = matches.length / 2;
            const leftCol = canvas.querySelector(`.bracket-half-left .future-round-column.round-${round}`);
            const rightCol = canvas.querySelector(`.bracket-half-right .future-round-column.round-${round}`);
            const leftEls = leftCol ? [...leftCol.querySelectorAll(__to_decode(560))] : [];
            const rightEls = rightCol ? [...rightCol.querySelectorAll(__to_decode(560))] : [];
            leftEls.forEach((el, i) => { const m = matches[i]; if (m)
                el.innerHTML = `${livePlayerSlot(m.player1_id, m.winner_id, m)}${livePlayerSlot(m.player2_id, m.winner_id, m)}`; });
            rightEls.forEach((el, i) => { const m = matches[half + i]; if (m)
                el.innerHTML = `${livePlayerSlot(m.player1_id, m.winner_id, m)}${livePlayerSlot(m.player2_id, m.winner_id, m)}`; });
        }
    }
    if (!centered && currentTournament.status === __to_decode(94)) {
        const final = currentMatches.find(m => m.round_number === maxRound && m.match_number === 1);
        const winner = canvas.querySelector(__to_decode(561));
        if (winner && final?.winner_id) {
            const p = getParticipant(final.winner_id);
            winner.textContent = p ? `優勝：${p.display_name}` : __to_decode(562);
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
    const mode = centered ? __to_decode(563) : __to_decode(564);
    return `<div class="bracket-setup-mode-label">${mode}</div>${centered ? createCenteredBracketHTML(rounds) : createStandardBracketHTML(rounds)}`;
}
function createStandardBracketHTML(rounds) {
    const columns = [];
    columns.push(createFirstRoundColumn(0, bracketSetupAssignments.length, __to_decode(565)));
    for (let round = 2; round <= rounds; round++) {
        const matchCount = Math.pow(2, rounds - round);
        const label = matchCount === 1 ? "決勝" : matchCount === 2 ? "準決勝" : matchCount === 4 ? __to_decode(566) : `${round}回戦`;
        columns.push(createFutureRoundColumn(round, matchCount, __to_decode(565), label));
    }
    columns.push(`<div class="bracket-round-column bracket-winner-column"><div class="bracket-round-title">優勝</div><div class="bracket-winner-box">WINNER</div></div>`);
    return `<div class="auto-bracket auto-bracket-standard">${columns.join("")}</div>`;
}
function createCenteredBracketHTML(rounds) {
    const halfSlots = bracketSetupAssignments.length / 2;
    const sideRounds = rounds - 1;
    const left = [];
    const right = [];
    left.push(createFirstRoundColumn(0, halfSlots, __to_decode(565), __to_decode(567)));
    right.push(createFirstRoundColumn(halfSlots, halfSlots, __to_decode(568), __to_decode(569)));
    for (let r = 2; r <= sideRounds; r++) {
        const matchCount = Math.pow(2, sideRounds - r);
        const label = matchCount === 1 ? "準決勝" : matchCount === 2 ? __to_decode(566) : `${r}回戦`;
        left.push(createFutureRoundColumn(r, matchCount, __to_decode(565), label));
        right.unshift(createFutureRoundColumn(r, matchCount, __to_decode(568), label));
    }
    return `<div class="auto-bracket auto-bracket-centered"><div class="bracket-half bracket-half-left">${left.join("")}</div><div class="bracket-center-final"><div class="bracket-round-title bracket-final-title">決勝</div><div class="bracket-champion-box">優勝</div><div class="bracket-final-match"><div>LEFT WINNER</div><span>VS</span><div>RIGHT WINNER</div></div></div><div class="bracket-half bracket-half-right">${right.join("")}</div></div>`;
}
function createFirstRoundColumn(start, slotCount, side, title = "1回戦") {
    const pairs = [];
    for (let i = 0; i < slotCount; i += 2) {
        const absolute = start + i;
        pairs.push(`<div class="auto-match auto-match-first ${side === __to_decode(568) ? __to_decode(570) : ""}" data-bracket-match-index="${pairs.length}">${createBracketSetupSlot(absolute)}${createBracketSetupSlot(absolute + 1)}</div>`);
    }
    return `<div class="bracket-round-column first-round-column" data-side="${side}"><div class="bracket-round-title">${title}</div><div class="bracket-round-matches">${pairs.join("")}</div></div>`;
}
function createFutureRoundColumn(round, matchCount, side, customLabel = null) {
    const matches = Array.from({ length: matchCount }, (_, i) => `<div class="auto-match future-match ${side === __to_decode(568) ? __to_decode(570) : ""}" data-bracket-match-index="${i}" data-live-round="${round}" data-live-match-number="${i + 1}"><div class="future-slot">勝者</div><div class="future-slot">勝者</div></div>`).join("");
    const label = customLabel || (round === 2 ? "2回戦" : `${round}回戦`);
    return `<div class="bracket-round-column future-round-column round-${round}" data-side="${side}"><div class="bracket-round-title">${label}</div><div class="bracket-round-matches">${matches}</div></div>`;
}
function getBulkParticipantStorageKey() {
    return currentTournament?.id ? `tournament:${currentTournament.id}:bulk-participants-visible` : null;
}
function applyBulkParticipantVisibility() {
    const body = document.getElementById(__to_decode(571));
    const button = document.getElementById(__to_decode(503));
    const key = getBulkParticipantStorageKey();
    if (!body || !button || !key)
        return;
    const visible = localStorage.getItem(key) !== __to_decode(63);
    body.classList.toggle(__to_decode(63), !visible);
    button.textContent = visible ? "非表示" : "表示";
    button.setAttribute(__to_decode(65), visible ? __to_decode(308) : __to_decode(309));
}
function toggleBulkParticipantBox() {
    const body = document.getElementById(__to_decode(571));
    const key = getBulkParticipantStorageKey();
    if (!body || !key)
        return;
    localStorage.setItem(key, body.classList.contains(__to_decode(63)) ? __to_decode(572) : __to_decode(63));
    applyBulkParticipantVisibility();
}
function layoutBracketSetupMatches() {
    const bracket = document.querySelector(__to_decode(573));
    if (!bracket)
        return;
    const ROW = 112;
    const layoutColumns = (columns) => {
        if (!columns.length)
            return;
        const first = [...columns[0].querySelectorAll(__to_decode(574))];
        if (!first.length)
            return;
        const height = first.length * ROW;
        columns.forEach(col => {
            const wrap = col.querySelector(__to_decode(575));
            if (wrap)
                wrap.style.height = `${height}px`;
        });
        let centers = first.map((_, i) => (i + 0.5) * ROW);
        columns.forEach((col, ci) => {
            const matches = [...col.querySelectorAll(__to_decode(574))];
            const useCenters = ci === 0 ? centers : matches.map((_, i) => {
                const a = centers[i * 2];
                const b = centers[i * 2 + 1];
                return b == null ? a : (a + b) / 2;
            });
            matches.forEach((match, i) => {
                match.style.position = __to_decode(576);
                match.style.top = `${useCenters[i]}px`;
                match.style.transform = __to_decode(577);
                match.style.left = "0";
                match.style.right = "0";
            });
            centers = useCenters;
        });
    };
    if (bracket.classList.contains(__to_decode(578))) {
        const standardColumns = [...bracket.querySelectorAll(__to_decode(579))];
        layoutColumns(standardColumns);
        const finalMatch = standardColumns.at(-1)?.querySelector(__to_decode(560));
        const winnerColumn = bracket.querySelector(__to_decode(580));
        const winnerBox = bracket.querySelector(__to_decode(561));
        if (finalMatch && winnerColumn && winnerBox) {
            const finalRect = finalMatch.getBoundingClientRect();
            const columnRect = winnerColumn.getBoundingClientRect();
            const centerY = finalRect.top + finalRect.height / 2 - columnRect.top;
            winnerBox.style.position = __to_decode(576);
            winnerBox.style.left = "0";
            winnerBox.style.right = "0";
            winnerBox.style.top = `${centerY}px`;
            winnerBox.style.transform = __to_decode(577);
            winnerBox.style.margin = "0";
        }
    }
    else {
        layoutColumns([...bracket.querySelectorAll(__to_decode(581))]);
        layoutColumns([...bracket.querySelectorAll(__to_decode(582))].reverse());
        const leftLast = bracket.querySelector(__to_decode(583));
        const rightLast = bracket.querySelector(__to_decode(584));
        const finalArea = bracket.querySelector(__to_decode(585));
        const finalBox = bracket.querySelector(__to_decode(558));
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
function drawBracketSetupConnections() {
    const canvas = document.getElementById(__to_decode(116));
    if (!canvas)
        return;
    const bracket = canvas.querySelector(__to_decode(586));
    if (!bracket)
        return;
    bracket.querySelectorAll(__to_decode(587)).forEach((el) => el.remove());
    const ns = __to_decode(588);
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute(__to_decode(589), __to_decode(590));
    svg.setAttribute(__to_decode(591), String(bracket.scrollWidth));
    svg.setAttribute(__to_decode(592), String(bracket.scrollHeight));
    svg.setAttribute(__to_decode(593), `0 0 ${bracket.scrollWidth} ${bracket.scrollHeight}`);
    bracket.prepend(svg);
    const base = bracket.getBoundingClientRect();
    const point = (el, side) => {
        const r = el.getBoundingClientRect();
        return {
            x: (side === __to_decode(568) ? r.left : r.right) - base.left,
            y: r.top + r.height / 2 - base.top
        };
    };
    const addPath = (from, to, direction) => {
        const midX = (from.x + to.x) / 2;
        const d = `M ${from.x} ${from.y} H ${midX} V ${to.y} H ${to.x}`;
        const path = document.createElementNS(ns, __to_decode(594));
        path.setAttribute("d", d);
        path.setAttribute(__to_decode(589), __to_decode(595));
        svg.appendChild(path);
    };
    const connectColumns = (columns, direction) => {
        for (let c = 0; c < columns.length - 1; c++) {
            const sources = [...columns[c].querySelectorAll(__to_decode(574))];
            const targets = [...columns[c + 1].querySelectorAll(__to_decode(574))];
            sources.forEach((source, i) => {
                const target = targets[Math.floor(i / 2)];
                if (!target)
                    return;
                addPath(point(source, direction), point(target, direction === __to_decode(568) ? __to_decode(565) : __to_decode(568)), direction);
            });
        }
    };
    if (bracket.classList.contains(__to_decode(578))) {
        const columns = [...bracket.querySelectorAll(__to_decode(579))];
        connectColumns(columns, __to_decode(565));
        const lastMatches = columns.length ? [...columns[columns.length - 1].querySelectorAll(__to_decode(574))] : [];
        const winner = bracket.querySelector(__to_decode(561));
        if (lastMatches[0] && winner) {
            const from = point(lastMatches[0], __to_decode(565));
            const to = point(winner, __to_decode(568));
            const path = document.createElementNS(ns, __to_decode(594));
            path.setAttribute("d", `M ${from.x} ${from.y} H ${to.x}`);
            path.setAttribute(__to_decode(589), __to_decode(596));
            svg.appendChild(path);
        }
    }
    else {
        const leftCols = [...bracket.querySelectorAll(__to_decode(581))];
        const rightColsVisual = [...bracket.querySelectorAll(__to_decode(582))];
        connectColumns(leftCols, __to_decode(565));
        connectColumns([...rightColsVisual].reverse(), __to_decode(568));
        const finalBox = bracket.querySelector(__to_decode(558));
        const leftLast = leftCols.at(-1)?.querySelector(__to_decode(560));
        const rightLast = rightColsVisual[0]?.querySelector(__to_decode(560));
        const addStraightPath = (from, to) => {
            const path = document.createElementNS(ns, __to_decode(594));
            path.setAttribute("d", `M ${from.x} ${from.y} H ${to.x}`);
            path.setAttribute(__to_decode(589), __to_decode(596));
            svg.appendChild(path);
        };
        if (leftLast && finalBox)
            addStraightPath(point(leftLast, __to_decode(565)), point(finalBox, __to_decode(568)));
        if (rightLast && finalBox)
            addStraightPath(point(rightLast, __to_decode(568)), point(finalBox, __to_decode(565)));
    }
}
function getBracketNameFitClass(name) {
    const text = String(name || "");
    let length;
    try {
        length = [...new Intl.Segmenter("ja", { granularity: __to_decode(164) }).segment(text)].length;
    }
    catch (_) {
        length = Array.from(text).length;
    }
    if (length >= 24)
        return __to_decode(597);
    if (length >= 16)
        return __to_decode(598);
    return "";
}
function ensureBracketNameHoverTooltip() {
    let tooltip = document.getElementById(__to_decode(599));
    if (tooltip)
        return tooltip;
    tooltip = document.createElement("div");
    tooltip.id = __to_decode(599);
    tooltip.className = __to_decode(600);
    document.body.appendChild(tooltip);
    return tooltip;
}
if (!window.__bracketNameTooltipBound) {
    window.__bracketNameTooltipBound = true;
    document.addEventListener(__to_decode(315), (event) => {
        const nameEl = event.target.closest?.(__to_decode(601));
        if (!nameEl)
            return;
        const tooltip = ensureBracketNameHoverTooltip();
        tooltip.textContent = nameEl.dataset.fullName || nameEl.textContent || "";
        tooltip.style.display = __to_decode(602);
    });
    document.addEventListener(__to_decode(241), (event) => {
        const tooltip = document.getElementById(__to_decode(599));
        if (!tooltip || tooltip.style.display !== __to_decode(602))
            return;
        const gap = 14;
        let x = event.clientX + gap;
        let y = event.clientY + gap;
        const rect = tooltip.getBoundingClientRect();
        if (x + rect.width > window.innerWidth - 8)
            x = event.clientX - rect.width - gap;
        if (y + rect.height > window.innerHeight - 8)
            y = event.clientY - rect.height - gap;
        tooltip.style.left = `${Math.max(8, x)}px`;
        tooltip.style.top = `${Math.max(8, y)}px`;
    });
    document.addEventListener(__to_decode(320), (event) => {
        const nameEl = event.target.closest?.(__to_decode(601));
        if (!nameEl)
            return;
        const tooltip = document.getElementById(__to_decode(599));
        if (tooltip)
            tooltip.style.display = __to_decode(511);
    });
}
function createBracketSetupSlot(index) {
    const id = bracketSetupAssignments[index];
    const p = id ? getParticipant(id) : null;
    const pair = index % 2 === 0 ? index + 1 : index - 1;
    const pairHas = Boolean(bracketSetupAssignments[pair]);
    const isBye = bracketSetupConfirmed && !p && pairHas;
    const isSeed = bracketSetupConfirmed && p && !pairHas;
    const cls = isBye ? __to_decode(603) : isSeed ? __to_decode(604) : p ? __to_decode(605) : __to_decode(606);
    let content = "空き";
    if (p)
        content = `<span class="bracket-player-name ${getBracketNameFitClass(p.display_name)}" data-full-name="${escapeHTML(p.display_name)}">${escapeHTML(p.display_name)}</span>${isSeed ? __to_decode(607) : ""}`;
    else if (isBye)
        content = __to_decode(608);
    const mineClass = p && isCurrentUsersParticipant(p.id) ? __to_decode(546) : "";
    return `<div class="bracket-setup-slot ${cls}${mineClass}" data-setup-slot-index="${index}" ${p ? `data-setup-participant-id="${escapeHTML(p.id)}"` : ""}>${content}</div>`;
}
function getBracketSetupPreviewKey() {
    return currentTournament?.id ? `tournament:${currentTournament.id}:bracket-preview` : null;
}
function saveBracketSetupPreview() {
    const key = getBracketSetupPreviewKey();
    if (!key)
        return;
    localStorage.setItem(key, JSON.stringify({ assignments: bracketSetupAssignments, confirmed: bracketSetupConfirmed }));
}
function loadBracketSetupPreview() {
    const key = getBracketSetupPreviewKey();
    if (!key)
        return false;
    try {
        const data = JSON.parse(localStorage.getItem(key) || __to_decode(609));
        if (!data?.confirmed || !Array.isArray(data.assignments))
            return false;
        const valid = new Set(getBracketSetupUsableParticipants().map((p) => p.id));
        const ids = data.assignments.filter(Boolean);
        if (ids.some((id) => !valid.has(id)) || new Set(ids).size !== ids.length || ids.length !== valid.size)
            return false;
        bracketSetupAssignments = data.assignments;
        bracketSetupKnownParticipantKey = [...valid].sort().join("|");
        bracketSetupConfirmed = true;
        return true;
    }
    catch {
        return false;
    }
}
function confirmBracketSetup() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage(__to_decode(610), __to_decode(78));
        return;
    }
    const assigned = bracketSetupAssignments.filter(Boolean).length;
    if (assigned !== usable.length) {
        showMessage(`参加者${usable.length}人のうち、${assigned}人しか配置されていません。`, __to_decode(78));
        return;
    }
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage(__to_decode(611), __to_decode(161));
}
let manualBulkPlacementWindow = null;
function openManualBulkPlacementWindow() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage(__to_decode(610), __to_decode(78));
        return;
    }
    const slotCount = nextPowerOfTwoForSetup(usable.length);
    const requiredSeeds = slotCount - usable.length;
    const participantNames = usable.map((p) => String(p.display_name || "").trim());
    const width = 680;
    const height = 780;
    const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
    const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));
    manualBulkPlacementWindow = window.open("", __to_decode(612), `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
    if (!manualBulkPlacementWindow) {
        showMessage(__to_decode(613), __to_decode(78));
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
    if (!currentTournament || currentTournament.status !== __to_decode(198) || currentTournament.archived_at) {
        return { ok: false, message: __to_decode(614) };
    }
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2)
        return { ok: false, message: __to_decode(610) };
    const slotCount = nextPowerOfTwoForSetup(usable.length);
    const requiredSeeds = slotCount - usable.length;
    const lines = String(text ?? "").replace(/\r\n?/g, "\n").split("\n").map((line) => line.trim());
    while (lines.length && lines[lines.length - 1] === "")
        lines.pop();
    if (lines.some((line) => line === "")) {
        return { ok: false, message: __to_decode(615) };
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
        if (!byName.has(name))
            byName.set(name, []);
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
        if (!matches.length)
            return { ok: false, message: `${i + 1}行目「${line}」は現在の参加者に見つかりません。` };
        if (matches.length > 1)
            return { ok: false, message: `「${line}」という同名の参加者が複数いるため、一括配置では判別できません。` };
        if (usedIds.has(matches[0].id))
            return { ok: false, message: `${i + 1}行目「${line}」が重複しています。` };
        usedIds.add(matches[0].id);
        assignments.push(matches[0].id);
    }
    if (usedIds.size !== usable.length) {
        const missing = usable.filter((p) => !usedIds.has(p.id)).map((p) => p.display_name);
        return { ok: false, message: `未入力の参加者がいます：${missing.join("、")}` };
    }
    for (let i = 0; i < assignments.length; i += 2) {
        if (!assignments[i] && !assignments[i + 1]) {
            return { ok: false, message: `${i + 1}行目と${i + 2}行目を両方シード枠にはできません。` };
        }
    }
    bracketSetupAssignments = assignments;
    bracketSetupKnownParticipantKey = usable.map((p) => p.id).sort().join("|");
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage(__to_decode(616), __to_decode(161));
    window.focus();
    return { ok: true };
}
window.applyManualBulkBracketPlacement = applyManualBulkBracketPlacement;
function randomizeBracketSetup() {
    const usable = getBracketSetupUsableParticipants();
    if (usable.length < 2) {
        showMessage(__to_decode(610), __to_decode(78));
        return;
    }
    bracketSetupAssignments = buildSeedDistributedAssignments(usable.map((p) => p.id), true);
    bracketSetupConfirmed = true;
    saveBracketSetupPreview();
    renderBracketSetupPrototype();
    showMessage(__to_decode(617), __to_decode(161));
}
function beginBracketSetupDrag(event) {
    if (!currentTournament || currentTournament.status !== __to_decode(198) || currentTournament.archived_at)
        return;
    if (event.target.closest(__to_decode(618)))
        return;
    if (event.button !== undefined && event.button !== 0)
        return;
    const card = event.target.closest(__to_decode(532));
    if (!card)
        return;
    const id = card.dataset.setupParticipantId;
    const participant = getParticipant(id);
    if (!id || !participant)
        return;
    event.preventDefault();
    bracketSetupDraggedParticipantId = id;
    const rect = card.getBoundingClientRect();
    bracketSetupDragOffsetX = Math.min(Math.max(event.clientX - rect.left, 18), rect.width - 18);
    bracketSetupDragOffsetY = Math.min(Math.max(event.clientY - rect.top, 12), rect.height - 12);
    bracketSetupDragGhost = document.createElement("div");
    bracketSetupDragGhost.className = __to_decode(619);
    bracketSetupDragGhost.textContent = participant.display_name;
    document.body.appendChild(bracketSetupDragGhost);
    moveBracketSetupDrag(event);
    document.body.classList.add(__to_decode(620));
}
function moveBracketSetupDrag(event) {
    if (!bracketSetupDraggedParticipantId || !bracketSetupDragGhost)
        return;
    if (event.cancelable)
        event.preventDefault();
    bracketSetupDragGhost.style.transform = `translate3d(${event.clientX - bracketSetupDragOffsetX}px, ${event.clientY - bracketSetupDragOffsetY}px, 0)`;
    document.querySelectorAll(__to_decode(621)).forEach((el) => el.classList.remove(__to_decode(622)));
    const target = document.elementFromPoint(event.clientX, event.clientY);
    target?.closest?.(__to_decode(623))?.classList.add(__to_decode(622));
}
function finishBracketSetupDrag(event) {
    if (!bracketSetupDraggedParticipantId)
        return;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const slot = target?.closest?.(__to_decode(623));
    const pool = target?.closest?.(__to_decode(624));
    const id = bracketSetupDraggedParticipantId;
    const from = bracketSetupAssignments.indexOf(id);
    cleanupBracketSetupDrag();
    if (pool) {
        if (from >= 0)
            bracketSetupAssignments[from] = null;
        bracketSetupConfirmed = false;
        renderBracketSetupPrototype();
        return;
    }
    if (!slot)
        return;
    const to = Number(slot.dataset.setupSlotIndex);
    if (!Number.isInteger(to))
        return;
    const displaced = bracketSetupAssignments[to];
    if (from >= 0)
        bracketSetupAssignments[from] = displaced || null;
    bracketSetupAssignments[to] = id;
    bracketSetupConfirmed = false;
    renderBracketSetupPrototype();
}
function cancelBracketSetupDrag() {
    if (bracketSetupDraggedParticipantId)
        cleanupBracketSetupDrag();
}
function cleanupBracketSetupDrag() {
    bracketSetupDraggedParticipantId = null;
    bracketSetupDragGhost?.remove();
    bracketSetupDragGhost = null;
    document.body.classList.remove(__to_decode(620));
    document.querySelectorAll(__to_decode(621)).forEach((el) => el.classList.remove(__to_decode(622)));
}
function parseBulkParticipantNames() {
    const textarea = document.getElementById(__to_decode(501));
    const rawValue = textarea?.value || "";
    if (!rawValue)
        return [];
    return rawValue.split(/\r?\n/);
}
function updateBulkParticipantPreview() {
    const badge = document.getElementById(__to_decode(625));
    const names = parseBulkParticipantNames();
    if (badge)
        badge.textContent = `${names.length} PLAYERS`;
}
async function addBulkParticipants() {
    const rawNames = parseBulkParticipantNames();
    if (!currentTournament || !isHost)
        return;
    if (!rawNames.length) {
        showMessage(__to_decode(626), __to_decode(78));
        return;
    }
    const names = [];
    for (let index = 0; index < rawNames.length; index += 1) {
        const check = validateParticipantName(rawNames[index]);
        if (!check.valid) {
            showMessage(`${index + 1}行目: ${check.message}`, __to_decode(78));
            return;
        }
        names.push(check.name);
    }
    const normalizeParticipantName = (name) => trimParticipantName(name).toLocaleLowerCase();
    const existingNameSet = new Set(currentParticipants.map((participant) => normalizeParticipantName(participant.display_name || "")));
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
        showMessage(`参加者は最大256人です。現在${currentParticipants.length}人登録されています。`, __to_decode(78));
        return;
    }
    const button = document.getElementById(__to_decode(502));
    setButtonLoading(button, true, __to_decode(265));
    try {
        const { data: addedCount, error } = await supabaseClient.rpc(__to_decode(627), {
            p_tournament_id: currentTournament.id,
            p_display_names: names
        });
        if (error)
            throw error;
        const textarea = document.getElementById(__to_decode(501));
        if (textarea)
            textarea.value = "";
        updateBulkParticipantPreview();
        await loadTournamentData();
        const added = Number.isFinite(Number(addedCount)) ? Number(addedCount) : namesToAdd.length;
        if (skippedNames.length > 0) {
            showMessage(`${added}人を追加しました。スキップ: ${skippedNames.join("、")}（クリックして閉じる）`, added === 0 ? __to_decode(78) : __to_decode(349), true);
        }
        else {
            showMessage(`${added}人をまとめて追加しました。`, __to_decode(161));
        }
    }
    catch (error) {
        console.error(__to_decode(628), error);
        const message = String(error?.message || error || "");
        if (message.includes(__to_decode(627))) {
            showMessage(__to_decode(629), __to_decode(78));
        }
        else {
            showMessage(translateError(error), __to_decode(78));
        }
    }
    finally {
        setButtonLoading(button, false);
    }
}
function isYoutubeCreatePage() {
    return new URLSearchParams(window.location.search).get(__to_decode(422)) === __to_decode(630);
}
function renderYoutubeCreatePage() {
    const createScreen = document.getElementById(__to_decode(421));
    if (!createScreen)
        return;
    const active = isYoutubeCreatePage() && !getTournamentAccessTokenFromURL();
    createScreen.classList.toggle(__to_decode(63), !active);
    homeScreen.classList.toggle(__to_decode(63), active);
    if (active) {
        tournamentScreen.classList.add(__to_decode(63));
        window.scrollTo({ top: 0, behavior: __to_decode(631) });
    }
}
document.getElementById(__to_decode(632))?.addEventListener(__to_decode(80), () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("t");
    url.searchParams.set(__to_decode(422), __to_decode(630));
    window.history.pushState({ screen: __to_decode(630) }, "", url.pathname + url.search + url.hash);
    renderYoutubeCreatePage();
});
document.getElementById(__to_decode(633))?.addEventListener(__to_decode(80), () => {
    const url = new URL(window.location.href);
    url.searchParams.delete(__to_decode(422));
    window.history.pushState({ screen: __to_decode(416), mode: __to_decode(106) }, "", url.pathname + url.search + url.hash);
    renderYoutubeCreatePage();
    showHome();
});
