const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

const search = instantsearch({
  indexName: 'demo_ecommerce',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item(hit) {
        return `
          <article>
            <p>Name: ${instantsearch.highlight({ attribute: 'name', hit })}</p>
             <svg onclick="add_element(\'${hit.name}\', ${hit.objectID})" xmlns="http://www.w3.org/2000/svg" version="1.0" width="10.000000pt" height="10.000000pt" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M6236 12750 c-296 -99 -598 -265 -890 -489 -108 -82 -193 -180 -322 -371 -208 -307 -344 -602 -414 -900 -18 -74 -35 -143 -39 -152 -5 -15 -21 -7 -105 47 -315 204 -722 342 -1188 404 -121 16 -150 16 -242 5 -407 -49 -813 -171 -1086 -327 -69 -39 -78 -48 -117 -117 -155 -273 -277 -678 -327 -1088 -11 -90 -10 -120 5 -240 62 -466 200 -873 404 -1188 54 -84 62 -100 47 -105 -9 -4 -78 -21 -152 -39 -298 -70 -593 -206 -900 -414 -191 -129 -289 -214 -371 -322 -215 -280 -393 -605 -489 -892 l-54 -162 54 -163 c96 -285 258 -583 477 -875 66 -88 108 -131 182 -190 370 -295 789 -501 1180 -582 47 -10 85 -23 84 -28 -2 -6 -27 -49 -58 -95 -201 -310 -342 -724 -404 -1189 -15 -120 -16 -150 -5 -240 50 -409 170 -809 328 -1091 43 -77 65 -94 231 -173 276 -131 617 -225 971 -268 92 -11 121 -11 241 5 470 63 872 199 1189 404 84 54 100 62 105 47 4 -9 21 -78 39 -152 71 -299 209 -600 417 -903 171 -251 240 -320 488 -489 266 -181 515 -304 783 -388 l102 -32 103 32 c262 81 519 209 782 388 248 169 317 238 488 489 208 303 346 604 417 903 18 74 35 143 39 152 5 15 21 7 105 -47 317 -205 719 -341 1189 -404 120 -16 149 -16 241 -5 254 31 515 91 731 169 139 50 372 159 417 194 36 29 153 268 213 436 78 217 138 477 169 731 11 92 11 121 -5 242 -62 465 -203 879 -404 1189 -31 46 -56 89 -58 95 -1 5 37 18 84 28 391 81 810 287 1179 581 236 187 545 699 680 1127 l33 102 -33 103 c-103 324 -280 654 -511 954 -85 109 -171 184 -364 315 -307 209 -605 347 -905 418 -74 18 -143 35 -152 39 -15 5 -7 21 47 105 204 315 342 722 404 1188 20 151 16 216 -28 462 -58 322 -194 714 -314 903 -73 116 -575 308 -987 378 -231 40 -291 43 -438 24 -466 -62 -873 -200 -1188 -404 -84 -54 -100 -62 -105 -47 -4 9 -21 78 -39 152 -86 362 -286 754 -561 1100 -178 224 -664 525 -1065 660 -82 27 -156 50 -164 50 -8 0 -82 -23 -164 -50z m314 -469 c120 -48 283 -138 385 -213 107 -79 469 -448 544 -553 78 -111 188 -334 235 -477 62 -188 87 -330 93 -533 7 -246 -7 -328 -84 -488 -35 -71 -53 -121 -47 -126 5 -5 37 -29 71 -54 54 -39 72 -46 144 -56 45 -7 85 -9 89 -4 3 4 21 55 40 111 42 132 100 223 228 354 229 237 553 424 876 508 171 44 258 51 591 47 285 -3 306 -5 419 -31 139 -32 257 -72 378 -128 l86 -40 40 -88 c58 -125 96 -238 128 -376 26 -114 28 -133 31 -424 3 -236 0 -329 -12 -411 -55 -380 -260 -777 -543 -1051 -130 -126 -226 -188 -356 -229 -56 -17 -105 -35 -109 -39 -5 -4 -3 -43 3 -86 12 -79 33 -124 95 -199 l25 -30 104 53 c157 78 201 87 456 86 195 0 227 -2 343 -27 178 -38 319 -87 482 -166 200 -98 288 -165 520 -396 267 -265 355 -386 461 -634 73 -169 74 -175 35 -278 -64 -170 -154 -335 -254 -463 -81 -105 -433 -448 -530 -517 -293 -207 -695 -333 -1066 -333 -201 0 -290 18 -434 87 l-118 57 -24 -29 c-62 -75 -83 -120 -95 -199 -6 -43 -8 -81 -3 -85 4 -4 53 -22 109 -40 131 -42 227 -104 356 -229 283 -274 488 -671 543 -1051 12 -82 15 -175 12 -411 -3 -291 -5 -310 -31 -424 -32 -138 -70 -251 -128 -376 l-40 -88 -88 -40 c-125 -58 -238 -96 -376 -128 -113 -26 -134 -28 -419 -31 -333 -4 -420 3 -591 47 -323 83 -647 272 -876 508 -125 129 -187 225 -229 356 -18 56 -36 105 -39 109 -4 5 -44 3 -89 -4 -72 -10 -90 -17 -144 -56 -34 -25 -66 -49 -71 -54 -6 -5 12 -55 47 -126 77 -160 91 -242 84 -488 -8 -275 -63 -501 -183 -754 -107 -226 -168 -306 -429 -566 -256 -255 -371 -337 -619 -444 -163 -70 -170 -70 -273 -32 -166 63 -331 153 -458 250 -78 59 -427 409 -486 486 -156 205 -274 473 -336 762 -25 116 -27 148 -27 343 -1 254 8 301 84 451 28 55 50 103 50 107 0 5 -31 31 -70 59 -63 46 -78 52 -151 63 -45 6 -85 8 -89 3 -4 -4 -22 -53 -39 -109 -41 -130 -103 -226 -229 -356 -229 -236 -553 -425 -876 -508 -171 -44 -258 -51 -591 -47 -285 3 -306 5 -419 31 -138 32 -251 70 -376 128 l-88 40 -40 88 c-58 125 -96 238 -128 376 -26 113 -28 134 -31 419 -4 333 3 420 47 591 84 323 271 647 508 876 129 125 225 187 356 229 56 18 105 36 109 39 5 4 3 44 -4 89 -10 72 -17 90 -56 144 -25 34 -49 66 -54 71 -5 6 -55 -12 -126 -47 -144 -69 -233 -87 -434 -87 -203 0 -391 31 -599 100 -132 43 -358 156 -464 231 -105 75 -455 417 -541 529 -78 102 -154 233 -208 361 -66 155 -73 181 -58 231 42 139 159 367 257 498 77 103 447 466 549 539 111 78 334 188 477 235 60 20 165 48 235 63 116 25 148 27 343 27 254 1 301 -8 451 -84 55 -28 103 -50 107 -50 5 0 31 31 59 70 46 63 52 78 63 151 6 45 8 85 3 89 -4 4 -53 22 -109 39 -130 41 -226 103 -356 229 -237 229 -424 553 -508 876 -44 171 -51 258 -47 591 3 285 5 306 31 419 32 138 70 251 128 376 l40 88 86 40 c121 56 239 96 378 128 113 26 134 28 419 31 333 4 420 -3 591 -47 323 -84 647 -271 876 -508 128 -132 187 -223 228 -354 18 -57 36 -107 40 -111 4 -5 44 -3 89 4 72 10 90 17 144 56 34 25 66 49 71 54 6 5 -12 55 -47 126 -77 160 -91 242 -84 488 6 203 31 344 92 533 51 154 170 388 256 502 80 107 420 450 519 524 126 94 260 166 430 233 103 40 120 39 260 -16z"/>
<path d="M6300 11230 c-47 -15 -88 -34 -92 -42 -4 -7 -16 -46 -28 -87 -12 -40 -32 -99 -46 -129 l-25 -57 28 -19 c15 -10 81 -73 146 -140 l117 -121 118 121 c64 67 130 130 145 140 l28 19 -25 57 c-14 30 -34 89 -46 129 -12 41 -24 80 -28 87 -7 13 -174 73 -197 71 -5 -1 -48 -14 -95 -29z"/>
<path d="M5217 11043 c-47 -92 -97 -289 -97 -383 l0 -36 68 9 c379 55 858 -326 1058 -843 42 -110 74 -251 74 -332 0 -66 12 -78 80 -78 67 0 80 12 80 74 0 129 45 286 131 461 170 345 474 626 755 699 85 22 189 29 258 18 l59 -9 -6 71 c-4 40 -14 103 -22 141 -17 73 -71 221 -84 229 -19 12 -372 -45 -496 -80 -240 -68 -468 -228 -619 -434 -27 -36 -52 -65 -56 -65 -4 0 -30 29 -56 65 -66 89 -189 209 -276 270 -172 122 -334 179 -624 220 -82 11 -163 23 -181 26 -28 4 -34 1 -46 -23z"/>
<path d="M3828 10401 c-225 -297 -303 -469 -329 -728 -12 -111 -3 -298 18 -372 5 -22 4 -23 -18 -18 -76 21 -256 30 -369 19 -261 -26 -427 -101 -731 -330 l-127 -95 18 -52 c32 -92 110 -223 187 -313 l28 -34 48 61 c78 101 208 186 352 230 396 123 945 15 1262 -248 l65 -54 33 17 c18 10 41 33 51 51 l17 33 -54 65 c-200 241 -312 606 -296 967 13 288 111 518 278 647 l61 48 -34 28 c-90 77 -221 155 -313 187 l-52 18 -95 -127z"/>
<path d="M8825 10510 c-93 -32 -222 -108 -308 -182 l-39 -33 61 -48 c192 -149 293 -432 278 -781 -14 -323 -125 -631 -306 -844 l-45 -54 18 -33 c10 -18 33 -41 51 -51 l33 -17 65 54 c317 263 866 371 1262 248 144 -44 274 -129 352 -230 l48 -61 28 34 c77 90 155 221 187 313 l18 52 -127 95 c-304 229 -470 304 -731 330 -113 11 -293 2 -369 -19 -22 -5 -23 -4 -18 18 4 13 12 76 19 140 26 269 -38 529 -187 761 -39 60 -212 296 -234 319 -3 4 -29 -1 -56 -11z"/>
<path d="M5664 10220 c-150 -168 -381 -371 -559 -492 -66 -45 -77 -49 -193 -67 -205 -34 -371 -44 -619 -39 l-233 5 0 -78 c0 -103 17 -220 43 -299 22 -64 22 -65 67 -73 54 -10 434 -1 575 13 115 12 300 42 402 65 55 13 91 30 171 83 217 145 432 328 646 549 l78 82 -25 55 c-14 30 -40 77 -58 103 -35 50 -177 203 -189 203 -4 0 -51 -50 -106 -110z"/>
<path d="M6948 10252 c-85 -89 -129 -150 -165 -228 l-25 -55 84 -87 c222 -232 466 -436 680 -571 74 -46 186 -75 408 -105 230 -31 602 -46 705 -28 39 7 41 9 62 72 26 79 43 196 43 299 l0 78 -233 -5 c-248 -5 -414 5 -619 39 -116 18 -127 22 -193 67 -178 121 -409 324 -559 492 -55 60 -102 110 -106 110 -4 0 -41 -35 -82 -78z"/>
<path d="M3050 9882 c-86 -46 -86 -46 -132 -132 l-46 -87 67 -134 66 -134 199 1 200 0 -1 203 -1 203 -54 22 c-30 12 -89 41 -132 64 -43 23 -78 42 -79 41 -1 0 -40 -21 -87 -47z"/>
<path d="M9575 9884 c-44 -24 -102 -52 -129 -62 l-48 -19 -1 -203 -1 -204 200 0 199 -1 66 134 67 134 -46 87 -46 87 -84 44 c-46 24 -87 45 -91 46 -3 0 -42 -19 -86 -43z"/>
<path d="M5575 9369 c-49 -38 -136 -99 -192 -136 -57 -38 -103 -71 -103 -74 0 -8 170 -88 273 -128 248 -98 612 -172 847 -172 235 0 599 74 847 172 103 40 273 120 273 128 0 3 -35 29 -78 56 -42 28 -130 90 -196 138 l-118 89 -57 -26 c-136 -61 -492 -129 -671 -129 -181 0 -567 75 -680 133 -22 11 -43 20 -47 19 -4 0 -48 -31 -98 -70z"/>
<path d="M5204 9140 c-22 -9 -287 -55 -376 -66 l-57 -6 -54 -112 c-102 -211 -299 -475 -440 -587 -156 -125 -297 -219 -423 -281 l-121 -59 -17 -124 c-10 -69 -28 -175 -40 -236 l-23 -111 29 6 c55 11 259 96 389 162 200 102 437 265 578 398 122 115 317 393 425 605 67 131 151 334 162 391 7 31 2 34 -32 20z"/>
<path d="M7563 9121 c12 -58 95 -259 163 -392 101 -198 257 -426 389 -568 120 -129 394 -323 614 -435 129 -66 334 -151 389 -162 l29 -6 -27 135 c-15 75 -33 181 -40 236 l-12 100 -112 54 c-123 59 -255 146 -416 272 -79 62 -126 109 -187 188 -127 162 -211 291 -270 413 l-54 111 -91 12 c-108 14 -335 56 -362 67 -17 7 -18 4 -13 -25z"/>
<path d="M6067 8775 c-352 -43 -654 -150 -929 -330 -106 -69 -266 -194 -306 -238 l-24 -25 21 -12 c12 -6 73 -60 136 -120 63 -60 123 -111 134 -115 14 -4 43 14 108 65 94 76 254 160 378 201 39 12 79 28 90 35 42 27 194 87 280 110 50 13 131 27 182 31 l92 6 10 51 c5 28 11 120 13 204 l4 152 -40 -1 c-23 -1 -90 -7 -149 -14z"/>
<path d="M6548 8638 c2 -84 8 -176 13 -204 l10 -51 87 -6 c48 -3 124 -15 168 -26 84 -22 238 -80 290 -110 16 -10 61 -28 100 -41 124 -40 283 -124 377 -200 65 -51 94 -69 108 -65 11 4 71 55 134 115 63 60 124 114 136 120 l21 12 -24 25 c-42 45 -201 169 -306 237 -280 184 -577 289 -939 331 -70 8 -139 15 -153 15 l-26 0 4 -152z"/>
<path d="M6357 8598 c-12 -266 -67 -559 -147 -780 l-32 -87 92 -122 c50 -67 98 -135 107 -151 21 -35 25 -35 46 0 9 16 57 84 107 151 l92 122 -32 87 c-80 221 -135 514 -147 780 l-6 152 -37 0 -37 0 -6 -152z"/>
<path d="M3175 8423 c-1 -279 -4 -336 -23 -463 -13 -80 -27 -160 -32 -178 -26 -98 -329 -457 -565 -670 l-90 -81 60 -61 c80 -82 166 -146 243 -183 l63 -29 82 78 c217 209 406 431 547 643 78 117 93 166 129 418 35 242 52 627 33 738 -7 39 -9 41 -72 62 -79 26 -195 43 -298 43 l-77 0 0 -317z"/>
<path d="M9381 8728 c-35 -5 -93 -19 -130 -31 -64 -21 -66 -23 -73 -62 -19 -113 -3 -490 33 -739 28 -199 55 -302 91 -361 140 -222 332 -452 581 -694 l86 -83 63 29 c77 37 163 101 243 183 l60 61 -90 81 c-236 213 -539 572 -565 670 -5 18 -19 98 -32 178 -20 127 -22 183 -23 463 l0 317 -90 -1 c-49 -1 -119 -6 -154 -11z"/>
<path d="M4737 8063 l-26 -26 85 -91 c180 -193 347 -432 452 -647 l56 -116 151 -22 c82 -12 165 -25 184 -28 34 -6 34 -6 28 28 -3 19 -16 102 -28 186 l-23 152 -60 26 c-211 91 -503 291 -712 488 l-81 76 -26 -26z"/>
<path d="M7945 8003 c-187 -176 -426 -343 -646 -451 l-116 -56 -22 -151 c-12 -82 -25 -165 -28 -184 -6 -34 -6 -34 28 -28 19 3 102 16 184 28 l150 22 63 127 c106 216 275 455 455 646 l76 81 -27 26 -27 25 -90 -85z"/>
<path d="M5724 7823 c11 -300 39 -532 96 -770 11 -47 19 -88 17 -90 -2 -2 -51 8 -108 21 -140 33 -257 53 -419 70 -180 20 -530 32 -530 19 0 -16 245 -250 360 -344 134 -109 271 -207 382 -272 48 -29 88 -54 88 -57 0 -3 -40 -28 -88 -57 -111 -65 -248 -163 -382 -272 -115 -94 -360 -328 -360 -344 0 -13 350 -1 530 19 164 17 282 37 419 70 57 14 105 23 107 21 3 -2 -5 -43 -16 -90 -57 -238 -85 -470 -96 -769 -5 -133 -4 -198 3 -198 16 0 249 244 344 361 109 132 207 270 272 381 29 48 54 88 57 88 3 0 28 -40 57 -88 65 -111 163 -248 272 -382 94 -115 328 -360 344 -360 13 0 1 351 -19 533 -16 149 -41 297 -74 434 -11 47 -19 88 -16 90 2 2 50 -7 107 -21 137 -33 255 -53 419 -70 180 -20 530 -32 530 -19 0 16 -245 250 -360 344 -134 109 -271 207 -382 272 -48 29 -88 54 -88 57 0 3 40 28 88 57 111 65 248 163 382 272 115 94 360 328 360 344 0 13 -350 1 -530 -19 -162 -17 -279 -37 -419 -70 -57 -13 -106 -23 -108 -21 -2 2 6 43 17 90 33 137 58 285 74 434 20 182 32 533 19 533 -16 0 -249 -244 -345 -361 -102 -124 -218 -288 -280 -394 -23 -41 -45 -75 -48 -75 -3 0 -25 34 -48 75 -62 106 -178 270 -279 393 -98 119 -330 362 -346 362 -7 0 -8 -65 -3 -197z"/>
<path d="M4574 7948 c-114 -120 -263 -339 -349 -513 -64 -130 -135 -339 -164 -482 -20 -99 -51 -330 -51 -383 l0 -26 153 4 c83 2 175 8 203 13 l51 10 6 92 c4 51 18 133 31 182 23 86 83 238 110 280 7 11 23 52 35 90 41 125 125 284 201 379 86 107 89 95 -50 241 -53 55 -104 113 -115 128 l-20 28 -41 -43z"/>
<path d="M8170 7970 c-6 -11 -60 -72 -120 -135 -60 -63 -111 -123 -115 -134 -4 -14 14 -43 65 -108 76 -94 160 -253 200 -377 13 -39 31 -84 41 -100 62 -106 127 -323 136 -453 l6 -92 51 -10 c28 -5 120 -11 204 -13 l152 -4 0 26 c0 14 -7 83 -15 153 -43 364 -146 657 -333 942 -72 110 -206 281 -245 313 -13 11 -17 10 -27 -8z"/>
<path d="M2060 7673 c-115 -18 -311 -81 -325 -103 -8 -14 44 -354 70 -455 41 -156 89 -261 176 -384 61 -87 190 -217 277 -281 34 -24 62 -47 62 -50 -1 -3 -28 -25 -62 -50 -91 -67 -217 -195 -277 -280 -88 -125 -135 -229 -176 -385 -26 -101 -78 -441 -70 -455 8 -14 153 -67 230 -85 38 -8 101 -18 141 -22 l71 -6 -9 59 c-18 110 7 258 63 382 77 170 253 373 439 504 216 153 490 258 677 258 60 0 73 14 73 77 0 76 -6 83 -69 83 -136 0 -288 43 -466 131 -345 170 -626 474 -699 755 -22 84 -29 189 -18 257 l9 57 -46 -1 c-25 -1 -57 -4 -71 -6z"/>
<path d="M10633 7614 c26 -184 -50 -404 -211 -604 -234 -294 -668 -530 -973 -530 -63 0 -69 -7 -69 -83 0 -63 13 -77 73 -77 301 -1 736 -238 969 -530 161 -200 237 -420 211 -604 l-10 -69 76 7 c94 8 209 36 298 74 l68 28 -3 44 c-6 86 -42 316 -63 400 -63 252 -192 458 -389 624 -47 40 -97 80 -110 90 l-25 17 25 17 c13 9 63 49 110 89 197 164 326 371 389 623 21 84 57 314 63 400 l3 44 -68 28 c-89 38 -204 66 -298 74 l-76 7 10 -69z"/>
<path d="M3585 7442 c-27 -42 -90 -130 -138 -196 l-89 -118 26 -57 c48 -108 90 -295 121 -543 15 -117 15 -139 0 -255 -31 -249 -73 -436 -121 -544 l-26 -57 89 -118 c48 -66 111 -154 138 -196 28 -43 53 -78 56 -78 8 0 88 170 128 273 98 248 172 612 172 847 0 235 -74 599 -172 847 -40 103 -120 273 -128 273 -3 0 -28 -35 -56 -78z"/>
<path d="M9107 7423 c-153 -327 -248 -719 -248 -1023 0 -235 74 -599 172 -847 40 -103 120 -273 128 -273 3 0 29 35 56 78 28 42 90 130 138 196 l89 118 -26 57 c-48 109 -92 303 -121 544 -14 115 -14 139 0 255 29 240 73 434 121 543 l26 57 -89 118 c-48 66 -110 154 -138 196 -27 43 -53 78 -56 78 -3 0 -27 -44 -52 -97z"/>
<path d="M1850 6676 c-30 -16 -158 -61 -217 -76 -30 -7 -43 -16 -43 -28 0 -9 -12 -52 -26 -94 l-26 -78 26 -78 c14 -42 26 -85 26 -94 0 -12 13 -21 43 -28 71 -18 139 -42 197 -67 l55 -24 19 28 c10 15 73 81 140 146 l121 117 -122 118 c-66 64 -129 129 -138 145 -20 31 -21 31 -55 13z"/>
<path d="M10895 6663 c-9 -16 -72 -81 -138 -145 l-122 -118 121 -117 c67 -65 130 -131 140 -146 l19 -28 55 24 c58 25 126 49 198 67 29 7 42 16 42 28 0 9 12 52 26 94 l26 78 -26 78 c-14 42 -26 85 -26 94 0 12 -13 21 -42 28 -71 18 -140 42 -197 66 -29 13 -55 24 -56 24 -2 0 -10 -12 -20 -27z"/>
<path d="M4975 6588 c-205 -77 -508 -133 -772 -145 l-153 -6 0 -37 0 -37 153 -6 c265 -12 558 -67 779 -147 l87 -32 122 92 c67 50 135 98 151 107 35 21 35 25 0 46 -16 9 -83 57 -150 107 -66 49 -125 90 -129 89 -4 0 -44 -14 -88 -31z"/>
<path d="M7620 6539 c-58 -44 -124 -92 -147 -107 -24 -15 -43 -29 -43 -32 0 -3 13 -13 28 -23 16 -9 84 -57 151 -107 l122 -92 87 32 c221 80 514 135 780 147 l152 6 0 37 0 37 -152 6 c-266 12 -561 67 -777 146 -47 17 -87 31 -90 31 -3 -1 -53 -37 -111 -81z"/>
<path d="M4010 6230 c0 -14 7 -83 15 -153 43 -365 146 -657 333 -942 72 -110 206 -281 245 -313 13 -11 17 -10 27 8 6 12 57 70 113 129 147 153 143 140 57 247 -76 95 -160 254 -200 378 -13 39 -31 84 -41 100 -30 52 -88 206 -110 290 -11 44 -23 120 -26 168 l-6 87 -51 10 c-28 5 -120 11 -203 13 l-153 4 0 -26z"/>
<path d="M8585 6249 c-88 -4 -169 -10 -181 -14 -19 -6 -22 -17 -27 -98 -9 -130 -75 -348 -136 -453 -10 -16 -28 -61 -41 -100 -40 -124 -124 -283 -200 -377 -51 -65 -69 -94 -65 -108 4 -11 55 -71 115 -134 60 -63 114 -124 120 -135 15 -27 21 -22 119 95 275 330 434 706 486 1152 21 175 20 183 -7 181 -13 -1 -95 -5 -183 -9z"/>
<path d="M2765 6011 c-74 -35 -162 -101 -240 -181 l-60 -61 90 -81 c182 -164 354 -355 487 -540 38 -54 73 -112 78 -130 5 -18 19 -98 32 -178 19 -127 22 -184 23 -462 l0 -318 77 0 c103 0 219 17 298 43 63 21 65 23 72 62 19 111 2 496 -33 739 -29 199 -55 302 -91 361 -101 161 -257 359 -404 515 -103 108 -257 260 -265 260 -2 0 -31 -13 -64 -29z"/>
<path d="M9802 5878 c-209 -211 -325 -350 -467 -564 -72 -107 -89 -163 -124 -411 -36 -248 -52 -626 -33 -738 7 -39 9 -41 72 -62 79 -26 195 -43 298 -43 l77 0 0 317 c1 280 3 336 23 463 13 80 27 160 32 178 26 99 337 466 570 675 l85 76 -60 61 c-95 97 -213 180 -291 204 -16 5 -50 -24 -182 -156z"/>
<path d="M5590 5660 c-19 -5 -91 -16 -160 -26 l-125 -16 -57 -117 c-111 -223 -274 -457 -452 -647 l-85 -91 26 -26 26 -26 81 76 c191 180 430 349 646 455 l127 63 22 150 c12 82 25 165 28 183 5 29 3 32 -18 31 -13 -1 -40 -5 -59 -9z"/>
<path d="M7133 5639 c3 -19 16 -102 28 -184 l22 -150 127 -63 c216 -106 455 -275 646 -455 l81 -76 26 26 26 26 -85 91 c-179 190 -344 427 -452 647 l-56 116 -151 22 c-82 12 -165 25 -184 28 -34 6 -34 6 -28 -28z"/>
<path d="M6377 5342 c-9 -16 -57 -84 -107 -151 l-92 -122 32 -87 c80 -221 135 -514 147 -779 l6 -153 37 0 37 0 6 153 c12 265 67 558 147 779 l32 87 -92 122 c-50 67 -98 135 -107 151 -21 35 -25 35 -46 0z"/>
<path d="M3676 5130 c12 -61 30 -167 40 -235 l17 -125 111 -53 c122 -59 252 -144 413 -270 79 -61 126 -108 188 -187 126 -161 213 -293 272 -416 l54 -112 99 -12 c54 -7 160 -24 235 -39 l137 -27 -6 28 c-11 55 -96 260 -162 389 -112 220 -306 494 -435 614 -151 141 -381 296 -599 404 -140 70 -342 151 -374 151 -10 0 -7 -27 10 -110z"/>
<path d="M9023 5205 c-265 -98 -526 -246 -759 -433 -150 -119 -256 -242 -402 -464 -113 -172 -276 -513 -298 -626 l-6 -28 137 27 c75 15 181 32 235 39 l99 12 54 112 c59 123 146 255 272 416 62 79 109 126 188 187 162 127 291 211 413 270 l112 54 12 99 c7 54 24 160 39 234 23 117 24 136 11 135 -8 0 -56 -15 -107 -34z"/>
<path d="M5074 4848 c-16 -12 -70 -61 -119 -108 -50 -48 -103 -95 -118 -105 -34 -22 -33 -22 88 -124 264 -220 602 -385 922 -450 99 -20 330 -51 383 -51 l26 0 -4 153 c-2 83 -8 175 -13 203 l-10 51 -92 6 c-132 9 -263 47 -429 125 -46 22 -108 47 -138 57 -108 34 -273 122 -363 194 -48 39 -92 71 -96 71 -5 0 -21 -10 -37 -22z"/>
<path d="M7590 4799 c-87 -72 -250 -160 -360 -194 -30 -10 -92 -35 -138 -57 -166 -78 -297 -116 -429 -125 l-92 -6 -10 -51 c-5 -28 -11 -120 -13 -203 l-4 -153 26 0 c53 0 284 31 383 51 320 65 658 230 922 450 121 102 122 102 88 124 -15 10 -68 57 -118 105 -101 97 -142 130 -159 129 -6 0 -49 -32 -96 -70z"/>
<path d="M4185 4294 c-346 -304 -991 -406 -1389 -220 -97 45 -187 114 -243 187 l-48 61 -28 -34 c-77 -90 -155 -221 -187 -313 l-18 -52 127 -95 c303 -228 471 -304 731 -330 113 -11 293 -2 369 19 22 5 23 4 18 -18 -21 -76 -30 -256 -19 -369 26 -260 102 -428 330 -731 l95 -127 52 18 c92 32 223 110 313 187 l34 28 -61 48 c-167 129 -265 359 -278 647 -16 361 96 726 296 967 l54 65 -17 32 c-16 30 -62 67 -83 66 -4 -1 -26 -17 -48 -36z"/>
<path d="M8528 4313 c-15 -10 -35 -31 -44 -49 l-17 -32 54 -65 c226 -273 342 -719 284 -1100 -34 -225 -128 -407 -266 -514 l-61 -48 34 -28 c90 -77 221 -155 313 -187 l52 -18 95 127 c228 303 304 471 330 731 11 113 2 293 -19 369 -5 22 -4 23 18 18 76 -21 256 -30 369 -19 260 26 428 102 731 330 l127 95 -18 52 c-32 92 -110 223 -187 313 l-28 34 -48 -61 c-107 -138 -289 -232 -514 -266 -380 -57 -827 58 -1098 282 -35 29 -67 53 -72 53 -4 0 -20 -8 -35 -17z"/>
<path d="M6350 3943 c-407 -39 -664 -106 -972 -250 -54 -25 -98 -49 -98 -52 0 -3 35 -28 78 -56 42 -27 130 -90 196 -138 l118 -89 57 26 c109 48 303 92 544 121 115 14 139 14 255 0 240 -29 434 -73 543 -121 l57 -26 118 89 c66 48 154 111 196 138 43 28 78 53 78 56 0 8 -170 88 -273 128 -183 73 -461 140 -667 161 -147 15 -190 17 -230 13z"/>
<path d="M4160 3621 c-33 -6 -36 -10 -57 -71 -26 -79 -43 -196 -43 -298 l0 -77 318 0 c278 -1 335 -4 462 -23 80 -13 160 -27 178 -32 99 -26 466 -337 675 -570 l76 -85 61 60 c82 80 146 166 183 243 l29 63 -78 82 c-237 245 -465 436 -701 586 -60 37 -151 60 -363 91 -238 34 -630 51 -740 31z"/>
<path d="M8165 3619 c-142 -10 -365 -41 -487 -68 -91 -20 -139 -45 -292 -154 -170 -121 -384 -309 -550 -484 l-78 -82 29 -63 c37 -77 101 -163 183 -243 l61 -60 76 85 c209 233 576 544 675 570 18 5 98 19 178 32 127 19 184 22 463 23 l317 0 0 77 c0 103 -17 219 -43 298 -21 63 -23 65 -62 72 -53 9 -319 7 -470 -3z"/>
<path d="M6338 3409 c-14 -8 -18 -23 -18 -67 -1 -184 -106 -458 -259 -672 -249 -349 -600 -548 -885 -502 l-59 9 6 -71 c4 -40 14 -103 22 -141 17 -73 71 -221 84 -229 19 -12 371 45 496 80 239 68 462 224 619 434 26 36 52 65 56 65 4 0 29 -28 54 -62 64 -87 190 -211 278 -273 184 -130 358 -187 723 -234 60 -8 112 -13 116 -10 13 8 67 156 84 229 8 38 18 101 22 141 l6 71 -59 -9 c-347 -56 -784 253 -1013 717 -86 175 -131 332 -131 461 0 42 -4 55 -19 64 -25 13 -101 13 -123 -1z"/>
<path d="M2939 3271 l-67 -134 46 -87 46 -86 86 -46 87 -46 134 67 134 66 -1 199 0 200 -200 0 -199 1 -66 -134z"/>
<path d="M9399 3400 c0 -3 -2 -93 -2 -200 l-2 -195 134 -66 134 -67 87 46 86 46 46 86 46 87 -67 134 -66 134 -197 0 c-109 0 -198 -2 -199 -5z"/>
<path d="M6280 2041 c-63 -65 -128 -127 -143 -137 l-28 -19 26 -59 c14 -32 36 -95 49 -140 13 -44 30 -84 37 -88 8 -4 51 -19 97 -33 l82 -27 83 27 c45 14 88 29 96 33 7 4 24 44 37 88 13 45 35 108 49 140 l26 59 -28 19 c-15 10 -80 72 -143 137 -63 66 -117 119 -120 119 -3 0 -57 -53 -120 -119z"/>
</g>
</svg>
          </article>
        `;
      },
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.panel({ templates: { header: attribute } })(
        instantsearch.widgets.refinementList
      )({
        container,
        attribute,
      });
    },
    widgets: [],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();