let cycleDict = {}

cycleDict["さあ"] = "[R2; R F R', B2] A9"
cycleDict["さた"] = "[L2; B2, L' F' L] A9"
cycleDict["さう"] = "[R', F' L F] Direct_Insert"
cycleDict["さつ"] = "[L', B' R' B] Direct_Insert"
cycleDict["さく"] = "[U, B' D B] Drop_and_Catch"
cycleDict["さぬ"] = "[U, R D2 R'] Drop_and_Catch"
cycleDict["さち"] = "[B2; B U2 B', D'] A9"
cycleDict["さに"] = "[U, B' D2 B] Drop_and_Catch"
cycleDict["さみ"] = "[U, R D' R'] Drop_and_Catch"
cycleDict["さむ"] = "[L, B' R' B] Direct_Insert"
cycleDict["さふ"] = "[U, B' D' B] Direct_Insert"
cycleDict["さい"] = "[B2; D, B' U2 B] A9"
cycleDict["さひ"] = "[U, R D R'] Direct_Insert"
cycleDict["さき"] = "[B D2 B', U'] Drop_and_Catch"
cycleDict["さか"] = "[R2, D' L2 D] Direct_Insert"
cycleDict["さな"] = "[L2, B' R' B] Direct_Insert"
cycleDict["さは"] = "[D2; D R2 D', L2] A9"
cycleDict["さま"] = "[D2; R2, D' L2 D] A9"
cycleDict["あさ"] = "[R2; B2, R F R'] A9"
cycleDict["あた"] = "[L2; L B L', F2] A9"
cycleDict["あつ"] = "[R2; B2, R F2 R'] A9"
cycleDict["あく"] = "[U2, F D F'] Direct_Insert"
cycleDict["あぬ"] = "[B D' B', U2] Drop_and_Catch"
cycleDict["あち"] = "[B2; B' L2 B, R2] A9"
cycleDict["あに"] = "[U2, R' D R] Drop_and_Catch"
cycleDict["あみ"] = "[U2, F D2 F'] Drop_and_Catch"
cycleDict["あす"] = "[L2; L B2 L', F2] A9"
cycleDict["あむ"] = "[U2, R' D2 R] Drop_and_Catch"
cycleDict["あふ"] = "[U2, F D' F'] Drop_and_Catch"
cycleDict["あし"] = "[F2; L2, F' R2 F] A9"
cycleDict["あひ"] = "[L' D L, U2] Drop_and_Catch"
cycleDict["あき"] = "[U2, R' D' R] Direct_Insert"
cycleDict["あか"] = "[L' U';U' L U, R2] Columns"
cycleDict["あな"] = "[U', F2; U L2 U']L2 Per_Special"
cycleDict["あは"] = "[U2, F'][R2, F][R2, B'] Per_Special"
cycleDict["あま"] = "[L' B' ; L2,B' R B] Columns"
cycleDict["たさ"] = "[L2; L' F' L, B2] A9"
cycleDict["たあ"] = "[L2; F2, L B L'] A9"
cycleDict["たう"] = "[L2; D', L U2 L'] A9"
cycleDict["たく"] = "[L' D2 L, U] Drop_and_Catch"
cycleDict["たぬ"] = "[U', F' D' F] Direct_Insert"
cycleDict["たに"] = "[U', L D L'] Direct_Insert"
cycleDict["たみ"] = "[L' D' L, U] Direct_Insert"
cycleDict["たす"] = "[L2; L' U2 L, D] A9"
cycleDict["たむ"] = "[U', F' D F] Drop_and_Catch"
cycleDict["たふ"] = "[U', L D2 L'] Drop_and_Catch"
cycleDict["たし"] = "[R' F R, B'] Direct_Insert"
cycleDict["たい"] = "[L' B' L, F'] Direct_Insert"
cycleDict["たひ"] = "[U', F' D2 F] Drop_and_Catch"
cycleDict["たき"] = "[U', L D' L'] Drop_and_Catch"
cycleDict["たか"] = "[L' B' L, F2] Direct_Insert"
cycleDict["たな"] = "[D2; D' F2 D, B2] A9"
cycleDict["たは"] = "[D' F2 D, B2] Toss_Up"
cycleDict["たま"] = "[D2; F2, D B2 D'] A9"
cycleDict["うさ"] = "[F' L F, R'] Drop_and_Catch"
cycleDict["うた"] = "[L2; L U2 L', D'] A9"
cycleDict["うつ"] = "[U' R' U, L] Direct_Insert"
cycleDict["うく"] = "[F, R' B2 R] Drop_and_Catch"
cycleDict["うぬ"] = "[F2, D' B D] Drop_and_Catch"
cycleDict["うち"] = "[F2; D, F' U2 F] A9"
cycleDict["うに"] = "[U'; L B2 L', F'] Orthogonals"
cycleDict["うみ"] = "[D F2 D', B] Toss_Up"
cycleDict["うす"] = "[F' L: U2] [L F': U2] Cyclic_Shift"
cycleDict["うむ"] = "[B R2 B', L'] Drop_and_Catch"
cycleDict["うふ"] = "[F' L F, R2] Drop_and_Catch"
cycleDict["うし"] = "[R' F' R, B'] Direct_Insert"
cycleDict["うひ"] = "[U'; R, B' L2 B] Orthogonals"
cycleDict["うき"] = "[D2; D F2 D', B] A9"
cycleDict["うか"] = "[F' L F, R] Drop_and_Catch"
cycleDict["うな"] = "[D R' D', L2] Drop_and_Catch"
cycleDict["うは"] = "[B2, L F' L'] Drop_and_Catch"
cycleDict["うま"] = "[D2; R', D' L2 D] A9"
cycleDict["つさ"] = "[L, F R' F'] Drop_and_Catch"
cycleDict["つあ"] = "[R2; R F2 R', B2] A9"
cycleDict["つう"] = "[U B U', F'] Direct_Insert"
cycleDict["つく"] = "[U B U', F2] Direct_Insert"
cycleDict["つぬ"] = "[U B U', F] Direct_Insert"
cycleDict["つに"] = "[U2; R, U' L2 U] A9"
cycleDict["つみ"] = "[D F' D', B] Drop_and_Catch"
cycleDict["つす"] = "[R2; F2, R' B2 R] A9"
cycleDict["つむ"] = "[U2; U F U', B2] A9"
cycleDict["つふ"] = "[U R' U', L'] Drop_and_Catch"
cycleDict["つし"] = "[U R U', L'] Direct_Insert"
cycleDict["つい"] = "[L, F R F'] Direct_Insert"
cycleDict["つひ"] = "[L, U' R2 U] Drop_and_Catch"
cycleDict["つき"] = "[L, U' R U] Drop_and_Catch"
cycleDict["つか"] = "[U R2 U', L'] Drop_and_Catch"
cycleDict["つな"] = "[U2; F2, U' B' U] A9"
cycleDict["つは"] = "[R F2 R', B2] Toss_Up"
cycleDict["つま"] = "[U2; U L2 U', R'] A9"
cycleDict["くさ"] = "[U', L' D2 L] Drop_and_Catch"
cycleDict["くあ"] = "[U2, L' D2 L] Drop_and_Catch"
cycleDict["くた"] = "[U, L' D2 L] Drop_and_Catch"
cycleDict["くう"] = "[R' B2 R, F] Drop_and_Catch"
cycleDict["くつ"] = "[F2, U B U'] Direct_Insert"
cycleDict["くぬ"] = "[F, D' B D] Drop_and_Catch"
cycleDict["くち"] = "[B2; B' L2 B, R'] A9"
cycleDict["くに"] = "[D', F U' F'] Toss_Up"
cycleDict["くみ"] = "[B', L F2 L'] Drop_and_Catch"
cycleDict["くす"] = "[U' B';B' D B, U2] Columns"
cycleDict["くむ"] = "[D2, B' U' B] Direct_Insert"
cycleDict["くふ"] = "[F2; L, F R2 F'] A9"
cycleDict["くし"] = "[U F' U', B'] Drop_and_Catch"
cycleDict["くい"] = "[D2; L', D' R2 D] A9"
cycleDict["くひ"] = "[R U2 R', D'] Toss_Up"
cycleDict["くな"] = "[U'; [R U': F2][U' R :F2]] Columns"
cycleDict["くは"] = "[D' F' D, B2] Direct_Insert"
cycleDict["くま"] = "[U2; U L2 U', R] A9"
cycleDict["ぬさ"] = "[U', B D' B'] Drop_and_Catch"
cycleDict["ぬあ"] = "[U2, B D' B'] Drop_and_Catch"
cycleDict["ぬた"] = "[U, B D' B'] Drop_and_Catch"
cycleDict["ぬう"] = "[D' B D, F2] Drop_and_Catch"
cycleDict["ぬつ"] = "[F, U B U'] Direct_Insert"
cycleDict["ぬく"] = "[F', R' B2 R] Drop_and_Catch"
cycleDict["ぬち"] = "[D' B: L2][B D': L2] Cyclic_Shift"
cycleDict["ぬみ"] = "[L' F' L, B] Direct_Insert"
cycleDict["ぬす"] = "[R2; F', R' B2 R] A9"
cycleDict["ぬむ"] = "[B2; B L2 B', R'] A9"
cycleDict["ぬふ"] = "[D2, R' U R] Toss_Up"
cycleDict["ぬし"] = "[U F2 U', B'] Drop_and_Catch"
cycleDict["ぬい"] = "[U'; L, F' R2 F] Orthogonals"
cycleDict["ぬひ"] = "[U'; F R2 F', L'] Orthogonals"
cycleDict["ぬき"] = "[D, F' U2 F] Toss_Up"
cycleDict["ぬか"] = "[R2; R D2 R', U] A9"
cycleDict["ぬは"] = "[R F' R', B2] Drop_and_Catch"
cycleDict["ぬま"] = "[D2; R, D' L2 D] A9"
cycleDict["ちさ"] = "[B2; D', B U2 B'] A9"
cycleDict["ちあ"] = "[B2; R2, B' L2 B] A9"
cycleDict["ちう"] = "[F2; F' U2 F, D] A9"
cycleDict["ちく"] = "[B2; R', B' L2 B] A9"
cycleDict["ちぬ"] = "[B D': L2][D' B: L2] Cyclic_Shift"
cycleDict["ちに"] = "[F2; F L2 F', R'] A9"
cycleDict["ちみ"] = "[F2; F' U2 F, D2] A9"
cycleDict["ちす"] = "[R' F: U2][F R': U2] Cyclic_Shift"
cycleDict["ちむ"] = "[B2; R, B' L2 B] A9"
cycleDict["ちふ"] = "[F2; F' U2 F, D'] A9"
cycleDict["ちし"] = "[F2; F L2 F', R2] A9"
cycleDict["ちい"] = "[B' R: U2][R B': U2] Cyclic_Shift"
cycleDict["ちひ"] = "[F2; F L2 F', R] A9"
cycleDict["ちき"] = "[U2 B2;B' U2 B, D2] Columns"
cycleDict["ちか"] = "[B2; D, B U2 B'] A9"
cycleDict["ちな"] = "[B2; D2, B U2 B'] A9"
cycleDict["ちは"] = "[U' L';L' D L, U2] Columns"
cycleDict["ちま"] = "[D F': L2][F' D: L2] Cyclic_Shift"
cycleDict["にさ"] = "[B' D2 B, U] Drop_and_Catch"
cycleDict["にあ"] = "[R' D R, U2] Drop_and_Catch"
cycleDict["にた"] = "[L D L', U'] Direct_Insert"
cycleDict["にう"] = "[U'; F', L B2 L'] Orthogonals"
cycleDict["につ"] = "[U2; U' L2 U, R] A9"
cycleDict["にく"] = "[F U' F', D'] Toss_Up"
cycleDict["にち"] = "[F2; R', F L2 F'] A9"
cycleDict["にみ"] = "[D F D', B] Direct_Insert"
cycleDict["にす"] = "[R2; D, R U2 R'] A9"
cycleDict["にむ"] = "[F U' F', D] Toss_Up"
cycleDict["にふ"] = "[U'; L' B2 L, F] Orthogonals"
cycleDict["にし"] = "[R' F2 R, B'] Drop_and_Catch"
cycleDict["にい"] = "[F2, R B' R'] Drop_and_Catch"
cycleDict["にひ"] = "[F U' F', D2] Toss_Up"
cycleDict["にき"] = "[R2; R' F2 R, B'] A9"
cycleDict["にか"] = "[F', D B2 D'] Drop_and_Catch"
cycleDict["には"] = "[B2, U' F U] Drop_and_Catch"
cycleDict["にま"] = "[F U': L2][U' F: L2] Cyclic_Shift"
cycleDict["みさ"] = "[U', L' D' L] Direct_Insert"
cycleDict["みあ"] = "[U2, L' D' L] Direct_Insert"
cycleDict["みた"] = "[U, L' D' L] Direct_Insert"
cycleDict["みう"] = "[L F' L', B'] Drop_and_Catch"
cycleDict["みつ"] = "[U' F' U, B'] Direct_Insert"
cycleDict["みく"] = "[L F2 L', B'] Drop_and_Catch"
cycleDict["みぬ"] = "[L U L', D'] Direct_Insert"
cycleDict["みち"] = "[F2; D2, F' U2 F] A9"
cycleDict["みに"] = "[U' F U, B'] Toss_Up"
cycleDict["みす"] = "[L2; L B2 L', F'] A9"
cycleDict["みふ"] = "[L U L', D] Direct_Insert"
cycleDict["みし"] = "[U2; L2, U' R' U] A9"
cycleDict["みい"] = "[B, L' F2 L] Drop_and_Catch"
cycleDict["みひ"] = "[L2; F, L' B2 L] A9"
cycleDict["みき"] = "[L U L', D2] Direct_Insert"
cycleDict["みか"] = "[U' F2 U, B'] Drop_and_Catch"
cycleDict["みな"] = "[F2; F D2 F', U2] A9"
cycleDict["みは"] = "[L2; D2, L' U' L] A9"
cycleDict["すあ"] = "[L2; F2, L B2 L'] A9"
cycleDict["すた"] = "[L2; D, L' U2 L] A9"
cycleDict["すう"] = "[L F': U2][F' L: U2] Cyclic_Shift"
cycleDict["すつ"] = "[R2; R' B2 R, F2] A9"
cycleDict["すく"] = "[U' B2;B U2 B', D] Columns"
cycleDict["すぬ"] = "[R2; R' B2 R, F'] A9"
cycleDict["すち"] = "[F R': U2][R' F: U2] Cyclic_Shift"
cycleDict["すに"] = "[R2; R U2 R', D] A9"
cycleDict["すみ"] = "[L2; F', L B2 L'] A9"
cycleDict["すむ"] = "[R2; R U2 R', D2] A9"
cycleDict["すふ"] = "[R2; R' B2 R, F] A9"
cycleDict["すい"] = "[R2; R U2 R', D'] A9"
cycleDict["すひ"] = "[L' D: B2][D L': B2] Cyclic_Shift"
cycleDict["すき"] = "[L2; F, L B2 L'] A9"
cycleDict["すか"] = "[L2; D', L' U2 L] A9"
cycleDict["すな"] = "[U2 R;R D2 R', U2] Columns"
cycleDict["すは"] = "[L2; D2, L' U2 L] A9"
cycleDict["すま"] = "[D' R: B2][R D': B2] Cyclic_Shift"
cycleDict["むさ"] = "[U', B D B'] Direct_Insert"
cycleDict["むあ"] = "[U2, B D B'] Direct_Insert"
cycleDict["むた"] = "[U, B D B'] Direct_Insert"
cycleDict["むう"] = "[L', B R2 B'] Drop_and_Catch"
cycleDict["むつ"] = "[U2; B2, U F U'] A9"
cycleDict["むく"] = "[D2, R U2 R'] Toss_Up"
cycleDict["むぬ"] = "[B2; R', B L2 B'] A9"
cycleDict["むち"] = "[B2; B' L2 B, R] A9"
cycleDict["むに"] = "[D, F U' F'] Toss_Up"
cycleDict["むす"] = "[R2; D2, R U2 R'] A9"
cycleDict["むふ"] = "[U R' U', L] Drop_and_Catch"
cycleDict["むし"] = "[U R U', L] Direct_Insert"
cycleDict["むい"] = "[L', D' R2 D] Drop_and_Catch"
cycleDict["むひ"] = "[L', B R B'] Direct_Insert"
cycleDict["むき"] = "[B' R2 B, L] Drop_and_Catch"
cycleDict["むか"] = "[U R2 U', L] Drop_and_Catch"
cycleDict["むな"] = "[D2; D' F' D, B2] A9"
cycleDict["むは"] = "[R2; R' D2 R, U2] A9"
cycleDict["ふさ"] = "[R', B L B'] Direct_Insert"
cycleDict["ふあ"] = "[F D' F', U2] Drop_and_Catch"
cycleDict["ふた"] = "[L D2 L', U'] Drop_and_Catch"
cycleDict["ふう"] = "[R2, F' L F] Drop_and_Catch"
cycleDict["ふつ"] = "[L', U R' U'] Drop_and_Catch"
cycleDict["ふく"] = "[F2; F R2 F', L] A9"
cycleDict["ふぬ"] = "[R' U R, D2] Toss_Up"
cycleDict["ふち"] = "[F2; D', F' U2 F] A9"
cycleDict["ふに"] = "[U'; F, L' B2 L] Orthogonals"
cycleDict["ふみ"] = "[D, L U L'] Direct_Insert"
cycleDict["ふす"] = "[R2; F, R' B2 R] A9"
cycleDict["ふむ"] = "[L, U R' U'] Drop_and_Catch"
cycleDict["ふし"] = "[U2; U B2 U', F'] A9"
cycleDict["ふい"] = "[U'; R F2 R', B'] Orthogonals"
cycleDict["ふき"] = "[D', F' U2 F] Toss_Up"
cycleDict["ふか"] = "[R, D' L2 D] Drop_and_Catch"
cycleDict["ふな"] = "[L2, U R' U'] Drop_and_Catch"
cycleDict["ふま"] = "[R' U: B2][U R': B2] Cyclic_Shift"
cycleDict["しあ"] = "[F2; F' R2 F, L2] A9"
cycleDict["した"] = "[L F L', B] Direct_Insert"
cycleDict["しう"] = "[L F' L', B] Toss_Up"
cycleDict["しつ"] = "[U' F' U, B] Direct_Insert"
cycleDict["しく"] = "[L F2 L', B] Drop_and_Catch"
cycleDict["しぬ"] = "[B', U F2 U'] Drop_and_Catch"
cycleDict["しち"] = "[F2; R2, F L2 F'] A9"
cycleDict["しに"] = "[U' F U, B] Drop_and_Catch"
cycleDict["しみ"] = "[U2; U' R' U, L2] A9"
cycleDict["しむ"] = "[L, U R U'] Direct_Insert"
cycleDict["しふ"] = "[U2; F', U B2 U'] A9"
cycleDict["しい"] = "[U' L' U, R] Direct_Insert"
cycleDict["しひ"] = "[U' L' U, R'] Direct_Insert"
cycleDict["しき"] = "[U' L' U, R2] Direct_Insert"
cycleDict["しか"] = "[U' F2 U, B] Drop_and_Catch"
cycleDict["しな"] = "[L2, U R U'] Direct_Insert"
cycleDict["しは"] = "[U2; R2, U L U'] A9"
cycleDict["しま"] = "[U2; U' B2 U, F] A9"
cycleDict["いさ"] = "[B2; B' U2 B, D] A9"
cycleDict["いた"] = "[F', L' B' L] Direct_Insert"
cycleDict["いつ"] = "[L', B' R B] Drop_and_Catch"
cycleDict["いく"] = "[D2; D' R2 D, L'] A9"
cycleDict["いぬ"] = "[U'; F' R2 F, L] Orthogonals"
cycleDict["いち"] = "[R B': U2][B' R: U2] Cyclic_Shift"
cycleDict["いに"] = "[R B' R', F2] Drop_and_Catch"
cycleDict["いみ"] = "[L' F2 L, B] Drop_and_Catch"
cycleDict["いす"] = "[R2; D', R U2 R'] A9"
cycleDict["いむ"] = "[L, B' R B] Drop_and_Catch"
cycleDict["いふ"] = "[U'; B', R F2 R'] Orthogonals"
cycleDict["いし"] = "[U F U', B'] Direct_Insert"
cycleDict["いひ"] = "[R2, D L' D'] Drop_and_Catch"
cycleDict["いき"] = "[R', F L2 F'] Drop_and_Catch"
cycleDict["いか"] = "[F, D B2 D'] Drop_and_Catch"
cycleDict["いな"] = "[L2, B' R B] Drop_and_Catch"
cycleDict["いは"] = "[D' F D, B2] Drop_and_Catch"
cycleDict["いま"] = "[D2; F, D B2 D'] A9"
cycleDict["ひさ"] = "[U', L' D L] Drop_and_Catch"
cycleDict["ひあ"] = "[U2, L' D L] Drop_and_Catch"
cycleDict["ひた"] = "[U, L' D L] Drop_and_Catch"
cycleDict["ひう"] = "[U'; B' L2 B, R] Orthogonals"
cycleDict["ひつ"] = "[U' R2 U, L] Drop_and_Catch"
cycleDict["ひく"] = "[D', R U2 R'] Toss_Up"
cycleDict["ひぬ"] = "[U'; L', F R2 F'] Orthogonals"
cycleDict["ひち"] = "[F2; R, F L2 F'] A9"
cycleDict["ひに"] = "[D2, F U' F'] Toss_Up"
cycleDict["ひみ"] = "[L2; L' B2 L, F] A9"
cycleDict["ひす"] = "[D L': B2][L' D: B2] Cyclic_Shift"
cycleDict["ひむ"] = "[D, B' U' B] Direct_Insert"
cycleDict["ひし"] = "[D L' D', R] Drop_and_Catch"
cycleDict["ひい"] = "[D L' D', R2] Drop_and_Catch"
cycleDict["ひき"] = "[D L' D', R'] Drop_and_Catch"
cycleDict["ひか"] = "[F2; F' D2 F, U'] A9"
cycleDict["ひな"] = "[F' R F, L2] Drop_and_Catch"
cycleDict["ひま"] = "[D2; F', D B2 D'] A9"
cycleDict["きさ"] = "[U', B D2 B'] Drop_and_Catch"
cycleDict["きあ"] = "[U2, B D2 B'] Drop_and_Catch"
cycleDict["きた"] = "[U, B D2 B'] Drop_and_Catch"
cycleDict["きう"] = "[D2; B, D F2 D'] A9"
cycleDict["きつ"] = "[U' R U, L] Drop_and_Catch"
cycleDict["きぬ"] = "[F' U2 F, D] Toss_Up"
cycleDict["きち"] = "[U2 B;B D2 B', U2] Columns"
cycleDict["きに"] = "[R2; B', R' F2 R] A9"
cycleDict["きみ"] = "[F' U2 F, D2] Toss_Up"
cycleDict["きす"] = "[L2; L B2 L', F] A9"
cycleDict["きむ"] = "[L, B' R2 B] Drop_and_Catch"
cycleDict["きふ"] = "[F' U2 F, D'] Toss_Up"
cycleDict["きし"] = "[F L2 F', R2] Toss_Up"
cycleDict["きい"] = "[F L2 F', R'] Drop_and_Catch"
cycleDict["きひ"] = "[F L2 F', R] Drop_and_Catch"
cycleDict["きな"] = "[L2, B' R2 B] Drop_and_Catch"
cycleDict["きは"] = "[U' B'; D2, B' U B] Columns"
cycleDict["きま"] = "[U2; U' B2 U, F'] A9"
cycleDict["かさ"] = "[D' L2 D, R2] Toss_Up"
cycleDict["かあ"] = "[L' U'; R2, U' L U] Columns"
cycleDict["かた"] = "[F2, L' B' L] Direct_Insert"
cycleDict["かう"] = "[D' L2 D, R'] Drop_and_Catch"
cycleDict["かつ"] = "[L', U R2 U'] Drop_and_Catch"
cycleDict["かぬ"] = "[R2; U, R D2 R'] A9"
cycleDict["かち"] = "[B2; B U2 B', D] A9"
cycleDict["かに"] = "[D B2 D', F'] Drop_and_Catch"
cycleDict["かみ"] = "[L' F L, B] Drop_and_Catch"
cycleDict["かす"] = "[L2; L' U2 L, D'] A9"
cycleDict["かむ"] = "[L, U R2 U'] Drop_and_Catch"
cycleDict["かふ"] = "[D' L2 D, R] Drop_and_Catch"
cycleDict["かし"] = "[B, U' F2 U] Drop_and_Catch"
cycleDict["かい"] = "[F', R B' R'] Drop_and_Catch"
cycleDict["かひ"] = "[F2; U', F' D2 F] A9"
cycleDict["かな"] = "[L2, U R2 U'] Toss_Up"
cycleDict["かは"] = "[R F R', B2] Direct_Insert"
cycleDict["かま"] = "[L2 U;U R2 U', L2] Columns"
cycleDict["なさ"] = "[L2, D R2 D'] Toss_Up"
cycleDict["なあ"] = "[U2, F': L2 F L2] Per_Special"
cycleDict["なた"] = "[D2; B2, D' F2 D] A9"
cycleDict["なう"] = "[L2, D R' D'] Drop_and_Catch"
cycleDict["なつ"] = "[U2; U' B' U, F2] A9"
cycleDict["なく"] = "[U2 L; L U2 L', D2] Columns"
cycleDict["なち"] = "[B2; B U2 B', D2] A9"
cycleDict["なみ"] = "[F2; U2, F D2 F'] A9"
cycleDict["なす"] = "[U2 R2;R' U2 R, D2] Columns"
cycleDict["なむ"] = "[D2; B2, D' F' D] A9"
cycleDict["なふ"] = "[U R' U', L2] Drop_and_Catch"
cycleDict["なし"] = "[U R U', L2] Direct_Insert"
cycleDict["ない"] = "[B' R B, L2] Drop_and_Catch"
cycleDict["なひ"] = "[L2, F' R F] Drop_and_Catch"
cycleDict["なき"] = "[L2, D R D'] Direct_Insert"
cycleDict["なか"] = "[U R2 U', L2] Toss_Up"
cycleDict["なは"] = "U' L2 U [B2, U][B2,D'] L2 Per_Special"
cycleDict["なま"] = "[U2; U' B2 U, F2] A9"
cycleDict["はさ"] = "[D2; L2, D R2 D'] A9"
cycleDict["はあ"] = "[U', B2; U R2 U']R2 Per_Special"
cycleDict["はた"] = "[L F L', B2] Direct_Insert"
cycleDict["はう"] = "[L F' L', B2] Drop_and_Catch"
cycleDict["はつ"] = "[U' F' U, B2] Direct_Insert"
cycleDict["はく"] = "[L F2 L', B2] Toss_Up"
cycleDict["はぬ"] = "[B2, R F' R'] Drop_and_Catch"
cycleDict["はち"] = "[U' L2;L U2 L', D] Columns"
cycleDict["はに"] = "[U' F U, B2] Drop_and_Catch"
cycleDict["はみ"] = "[L2; L' U' L, D2] A9"
cycleDict["はす"] = "[L2; L' U2 L, D2] A9"
cycleDict["はむ"] = "[R2; U2, R' D2 R] A9"
cycleDict["はし"] = "[U2; U L U', R2] A9"
cycleDict["はい"] = "[B2, D' F D] Drop_and_Catch"
cycleDict["はき"] = "[U' B';B' U B, D2] Columns"
cycleDict["はか"] = "[U' F2 U, B2] Toss_Up"
cycleDict["はな"] = "U B2 U'[L2, U'][L2, D] B2 Per_Special"
cycleDict["はま"] = "[U2; U L2 U', R2] A9"
cycleDict["まさ"] = "[D2; D' L2 D, R2] A9"
cycleDict["まあ"] = "[L' B';B' R B, L2] Columns"
cycleDict["また"] = "[D2; D B2 D', F2] A9"
cycleDict["まう"] = "[D2; D' L2 D, R'] A9"
cycleDict["まつ"] = "[U2; R', U L2 U'] A9"
cycleDict["まく"] = "[U2; R, U L2 U'] A9"
cycleDict["まぬ"] = "[D2; D' L2 D, R] A9"
cycleDict["まち"] = "[F' D: L2][D F': L2] Cyclic_Shift"
cycleDict["まに"] = "[U' F: L2][F U': L2] Cyclic_Shift"
cycleDict["ます"] = "[R D': B2][D' R: B2] Cyclic_Shift"
cycleDict["まふ"] = "[U R': B2][R' U: B2] Cyclic_Shift"
cycleDict["まし"] = "[U2; F, U' B2 U] A9"
cycleDict["まい"] = "[D2; D B2 D', F] A9"
cycleDict["まひ"] = "[D2; D B2 D', F'] A9"
cycleDict["まき"] = "[U2; F', U' B2 U] A9"
cycleDict["まか"] = "[L2 U;L2,U R2 U'] Columns"
cycleDict["まな"] = "[U2; F2, U' B2 U] A9"
cycleDict["まは"] = "[U2; R2, U L2 U'] A9"

const inputAreaText = document.querySelector('.input-area__text');
const outputAreaText = document.querySelector('.output-area__text');

inputAreaText.addEventListener('keyup', function (){
    const lines = inputAreaText.value.split('\n');
    const len = lines.length;

    outputAreaText.value = "";
    for(let i = 0; i < len; i++){
        const key = lines[i];

        if (key in cycleDict) {
            outputAreaText.value += key + ' ' + cycleDict[key] + '\n';
        } else {
            outputAreaText.value += '\n';
        }
    }
});
