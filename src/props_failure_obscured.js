export default {"input_layer": "input", "layers": ["2b"], "attribution_policy": true, "attribution_single_channels": true, "attribution_totals": {"layer": "2b", "trajectory": 0, "channels": ["2b_0_v_channels.json", "2b_0_action_0_channels.json", "2b_0_action_1_channels.json", "2b_0_action_2_channels.json", "2b_0_action_3_channels.json", "2b_0_action_4_channels.json", "2b_0_action_5_channels.json", "2b_0_action_6_channels.json", "2b_0_action_7_channels.json", "2b_0_action_8_channels.json"], "residuals": ["2b_0_v_residuals.json", "2b_0_action_0_residuals.json", "2b_0_action_1_residuals.json", "2b_0_action_2_residuals.json", "2b_0_action_3_residuals.json", "2b_0_action_4_residuals.json", "2b_0_action_5_residuals.json", "2b_0_action_6_residuals.json", "2b_0_action_7_residuals.json", "2b_0_action_8_residuals.json"], "metadata": {"type": ["v", "action", "action", "action", "action", "action", "action", "action", "action", "action"], "data": [null, 0, 1, 2, 3, 4, 5, 6, 7, 8]}}, "colors": {"features": ["#ff0000", "#ffe400", "#a1ff00", "#00ff4e", "#00ffff", "#004eff", "#a100ff", "#ff00e4"], "actions": ["#df6060", "#dfc860", "#c8df60", "#60df60", "#60dfc8", "#60c8df", "#6060df", "#c860df", "#df60c8"], "graphs": {"v": "green", "action": "red", "action_group": "orange", "advantage": "blue"}, "trajectory": "blue"}, "action_combos": [[], ["RIGHT"], ["LEFT"], ["UP"], ["RIGHT", "UP"], ["LEFT", "UP"], ["DOWN"], ["A"], ["B"]], "action_groups": [], "trajectories": {"actions": [[1.0, 3.0, 1.0, 3.0, 3.0, 3.0, 1.0, 1.0, 4.0, 1.0, 1.0, 4.0, 4.0, 5.0, 1.0, 3.0, 3.0, 1.0]], "rewards": [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], "dones": [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], "policy_logits": [[[0.505905, 3.23051, -4.83536, 1.01307, 1.58913, 1.52338, -0.843055, -0.000109449, -0.0674408], [0.0694522, 2.00215, -5.23425, 2.46465, 2.896, 3.27636, -2.36919, -0.410273, -0.432009], [0.761309, 4.33771, -11.9348, 3.10445, 2.26494, 3.30369, 0.232237, 0.635322, 1.33396], [3.60978, -0.884474, 4.37598, 4.62374, 1.25899, 6.0317, 2.39283, 1.66128, 2.50623], [4.02621, -0.856169, 2.95033, 4.35143, 3.69775, 3.88605, 2.0705, 1.52927, 2.46846], [2.13285, 2.15872, 0.82466, 2.66369, 2.4064, 0.778282, 1.673, 1.87215, 2.4687], [0.752373, 4.95461, -0.987711, 1.39453, 3.83763, -0.672249, 0.0769675, 0.705776, 0.450494], [1.08747, 3.26748, 0.972113, 1.93688, 1.93201, 1.04515, 1.27741, 1.62107, 1.66441], [0.786639, 1.83368, 1.96735, 2.75844, 2.5282, 1.39238, 1.78504, 2.39001, 1.357], [0.860941, 2.64827, -0.102344, 1.50587, 2.53712, 0.300384, 1.20382, 1.32465, 0.632944], [0.710311, 3.98281, -1.07976, 0.996988, 2.89194, -0.296233, 1.06877, 0.90503, 0.281213], [1.24444, 3.30529, 1.0603, 1.64916, 2.19616, 1.18113, 1.85414, 1.80758, 0.792287], [1.07139, 3.25696, 0.976063, 1.90165, 2.77411, 1.35336, 1.24356, 1.65265, 1.08564], [2.01179, 0.358166, 3.64785, 1.84935, 0.287963, 3.77272, 1.96816, 1.52058, 1.01109], [0.223516, 2.19136, 1.37097, 0.8888, 1.76, 2.29238, 0.491221, 0.0624434, -0.161232], [-8.46744, -7.17317, -1.8209, 12.7681, 10.8772, 13.2293, -22.8839, -8.11436, -7.62984], [-7.57464, -7.19458, 3.80166, 18.9572, 16.1662, 12.4273, -32.3872, -9.70499, -5.87319], [3.76911, 21.0712, 19.192, 1.29566, 10.4597, 8.16028, -6.31864, 6.00422, 9.87084]]], "values": [[9.37182, 9.2766, 9.28595, 9.28645, 9.27153, 9.22079, 9.30368, 9.38203, 9.37419, 9.34528, 9.3949, 9.44837, 9.33337, 9.40082, 9.22295, 8.38195, 5.33484, -0.427358]], "advantages": [[-4.49148, -4.62249, -4.87073, -5.12295, -5.37249, -5.59773, -5.97578, -6.36927, -6.69307, -7.01207, -7.4309, -7.87622, -8.16805, -8.66771, -8.93591, -8.52065, -5.76177, 0.0]]}, "subdirs": {"trajectories": "trajectories/", "trajectories_scrub": "trajectories_scrub/", "thumbnails": "thumbnails/", "attribution": "attribution/", "attribution_scrub": "attribution_scrub/", "features_grids": "features_grids/", "attribution_totals": "attribution_totals/"}, "formatting": {"video_height": "16em", "video_width": "16em", "video_speed": 12, "policy_display_height": "2em", "policy_display_width": "40em", "navigator_width": "24em", "scrubber_height": "4em", "scrubber_width": "48em", "scrubber_visible_duration": 256, "legend_item_height": "6em", "legend_item_width": "6em", "attribution_weight": 0.9}, "json_preloaded": {"attribution_totals/2b_0_v_channels.json": [[0.0225342, 0.10439, -0.13113, 0.14985, 0.0419065, -0.0969532, 0.217522, 0.0958751], [0.0154586, 0.0877249, -0.197157, 0.0140725, -0.0355435, -0.129969, 0.201554, 0.0652499], [0.00625579, 0.0428893, -0.0837324, -0.00219425, 0.093827, 0.0283867, 0.101944, 0.0569192], [0.00231145, 0.0106109, -0.0475768, 0.152406, -0.0932005, 0.0952887, 0.10333, 0.0772414], [0.150755, 0.133034, -0.063204, 0.0608327, 0.0180809, 0.0828221, 0.247084, 0.115405], [0.163278, 0.245607, -0.593123, -0.0482817, 0.350558, 0.277799, 0.115697, 0.0960108], [0.239248, 0.369305, -0.704196, -0.201377, 0.198617, 0.0704823, 0.262356, 0.188999], [0.0878222, 0.224875, -0.293359, 0.0950127, 0.140542, 0.0483844, 0.0824652, 0.0383865], [0.0600765, 0.194736, -0.162429, 0.211753, 0.0152199, 0.0115925, 0.102491, 0.0453692], [0.00962052, 0.0816033, -0.017643, 0.0416187, -0.00109499, 0.0627277, 0.0405968, 0.0534713], [0.00995134, 0.0559334, -0.100418, 0.028136, 0.113247, 0.0778356, 0.0715963, 0.113488], [0.00470617, 0.0539663, -0.0136397, -0.0426616, 0.121477, 0.0289143, 0.130703, 0.155514], [0.00114939, 0.0690305, -0.0573497, -0.0615279, 0.0284975, 0.022571, 0.148091, 0.0510094], [-0.0333456, 0.053557, 0.0316434, -0.0338024, -0.00503597, 0.00689768, 0.138473, 0.0463766], [-0.0231914, 0.0269378, -0.152291, 0.231882, -0.00532664, -0.00255678, 0.158112, 0.0711831], [-0.774185, -0.0649361, -0.0785003, 0.693706, -0.25714, 0.212282, -0.253001, 0.128499], [-7.41676, -0.27158, -0.970571, 0.571779, -2.35135, 0.614632, 1.25594, 0.440128], [-7.43113, 0.356203, 1.01242, -0.650053, -2.52545, -0.466529, -1.16856, 1.03369]], "attribution_totals/2b_0_v_residuals.json": [0.136926, 0.168047, 0.263895, 0.211086, 0.295584, -0.019268, 0.289078, 0.0601772, 0.00219296, 0.0794206, 0.155233, 0.127336, 0.237448, 0.240723, 0.238802, 0.285063, 4.60249, 0.0361718], "attribution_totals/2b_0_action_0_channels.json": [[-0.0132362, -0.156925, 0.111151, 0.271614, 0.97575, 0.332166, -1.31474, 0.0158443], [-0.0458401, -0.227642, -0.112751, 0.097801, 0.438047, 0.46844, -0.656491, -0.320206], [0.408417, 0.232005, -1.32668, 0.415691, 0.695093, -0.549905, 1.69915, -0.148326], [0.323096, 0.584505, 0.425625, 0.531743, 0.551529, 0.0560168, 0.326426, 0.0941341], [0.75651, 0.750855, 1.19935, 0.513462, 0.497009, 0.0395266, -0.335029, 0.124087], [0.690106, 0.761678, -0.00977047, 0.85884, -0.147905, -0.206706, -0.249464, 0.123623], [0.639198, 0.676216, -0.166028, -0.79966, 0.0467963, -0.1285, -0.53933, 0.0616063], [0.135908, 0.249137, -0.925186, 0.693122, 0.963928, 0.0151853, -0.156171, 0.122146], [-0.0397223, 0.145234, -0.711688, 0.654066, 0.382294, -0.256626, -0.0902141, -0.0991667], [0.127405, 0.157819, -0.234111, 1.08316, 0.326023, -0.102059, -0.19534, -0.493648], [-0.0104986, -0.0934492, -0.359488, 2.27983, 0.104401, -0.19098, -0.184286, -0.0627336], [-0.0261387, 0.107925, 0.0283894, 0.0358383, 0.113737, -0.140555, 0.265238, -0.245959], [-0.204288, 0.352176, -0.298509, -0.251366, -0.0359974, -0.0554378, 0.460346, 0.342503], [0.264043, 0.310007, -0.407476, -0.687029, 0.0769916, 0.113271, 0.339277, 0.185505], [-0.0935677, 0.350807, 0.331293, -1.40492, -0.0172625, -0.22336, 0.449422, 0.147397], [-6.59375, -0.14201, -1.66898, 0.620129, -0.142722, 1.61407, -1.68915, -0.49279], [1.26336, -1.34379, -0.17163, 1.2196, 0.311301, -0.464892, -4.16044, -0.443569], [2.94882, -0.472197, -1.03587, -2.06784, 0.123639, 0.720883, -0.699857, -0.0581024]], "attribution_totals/2b_0_action_0_residuals.json": [-0.347394, -0.274526, -2.00522, 0.250707, 0.993545, 0.514036, 0.940276, -0.658897, -0.19176, -0.175073, -1.22722, 0.0772308, 0.377737, 0.446978, 0.698135, -0.482624, -6.11349, 4.35898], "attribution_totals/2b_0_action_1_channels.json": [[0.0498512, 0.16958, -0.566632, 0.575581, 1.32988, 0.57148, -1.4671, 0.571844], [-0.00961875, -0.0535692, -0.383255, -0.654762, 0.733624, 0.187844, -0.665368, 0.337642], [-1.09651, -0.0862937, 0.0378728, -0.0741031, 0.483931, 0.480008, -1.04458, 0.468211], [-0.476348, -0.400807, -0.940765, -0.245033, -0.643803, -0.112527, -0.7057, -0.217114], [0.113826, -0.180235, -1.20567, -0.634667, -0.892456, -0.39001, 0.333216, -0.288198], [-0.947725, -1.05312, 1.55767, -2.4122, -0.35848, -0.622892, 1.34452, -0.0582252], [0.0252434, -0.206997, -0.840075, -1.03021, 0.508016, 0.196956, 1.68821, 0.344555], [-0.0488049, -0.169006, 0.358041, -1.21761, -1.04287, -0.0602272, 1.64196, 0.153828], [-0.306071, -0.223849, 0.148548, -1.76541, 0.110477, 0.28055, -0.0739578, -0.045209], [-0.18235, -0.428294, -0.523295, -0.78535, -0.666996, 0.631858, 0.600861, 0.108923], [-0.0619205, 0.00392339, 0.0230135, -0.347133, -0.364336, 0.300047, 0.249579, 0.290602], [-0.0878629, -0.0758595, -0.071755, 0.14522, -0.381062, 0.167078, -0.108661, -0.0302976], [-0.0215506, -0.318686, -0.229667, 0.410528, 0.200891, 0.0190797, -0.399178, -0.164538], [-1.91536, -1.01502, 0.201394, 1.71122, -0.0420334, -0.227663, -1.18864, -0.357086], [-0.34912, -0.403092, -0.132368, 1.15985, -1.42136, -0.264075, -0.377164, -0.284216], [-4.07544, -0.997488, -0.30131, -1.6509, 0.383276, 0.753733, -1.28164, -0.542756], [6.32862, -1.02199, -0.00299496, -2.23489, 3.40568, 0.835914, -5.62298, -0.73665], [15.6159, -0.603594, -4.08272, -0.728746, 5.9074, 1.95347, 2.33101, -1.44924]], "attribution_totals/2b_0_action_1_residuals.json": [-0.0957803, -0.48005, 2.88772, -0.999582, -0.31655, -0.327668, 0.927377, 0.475331, 0.456624, 0.219122, 0.580266, 0.545224, 0.212747, -0.00480562, 0.42167, -3.17492, -11.6801, 2.14718], "attribution_totals/2b_0_action_2_channels.json": [[-0.205694, -0.781492, 0.281413, -0.12123, 0.304321, 0.156016, -2.66605, -0.62259], [-0.222333, -0.998828, -0.127762, 0.44072, 0.26317, 0.986502, -2.13407, -0.925339], [-0.812512, -1.00386, -1.03246, 1.96418, -1.72655, 0.064153, -1.02359, -2.11476], [0.415514, 0.739468, 1.2641, 1.22018, 1.74572, 0.572779, 0.620104, 0.315345], [-0.0557881, 0.355464, 1.97303, 0.718808, 1.97105, 0.673027, -1.56279, 0.218219], [1.37793, 1.24382, -1.3025, 2.90732, 0.486508, 1.13308, -1.66855, -0.355805], [0.380859, -0.0595642, 0.476018, 0.5672, -0.205586, 0.282032, -1.69124, -0.462452], [-0.105225, 0.0375961, -0.357951, 2.15163, 1.79058, 0.216176, -0.205607, 0.0546113], [0.245647, 0.406179, -0.180402, 1.51969, 1.14317, -0.482437, 0.146536, -0.166165], [0.209747, 0.417839, 0.181797, 1.48142, 1.35692, -0.613546, -0.565146, -0.658095], [0.0633705, 0.00331506, 0.013435, 1.82956, 0.696682, -0.436631, -0.233039, -0.699855], [0.0315591, 0.19602, 0.0353847, 0.749125, 0.692996, -0.212568, 0.184499, 0.042547], [0.105517, 0.673329, -0.0879173, -0.0166451, 0.330263, -0.0766583, 0.879355, 0.153135], [2.90323, 1.57034, -0.661597, -0.815176, 0.313342, 0.0120049, 2.04902, 0.536983], [0.291377, 0.562802, 0.525003, 0.0198039, 2.62337, 1.13223, 0.174914, 0.36795], [-3.4145, -0.0166003, -2.15797, 4.43807, 3.87892, 1.55323, -0.471981, -0.790764], [-0.342021, -2.53335, 2.08391, 10.2436, 7.62236, 0.196259, 0.230565, 0.0138297], [5.41913, -0.216708, 0.414758, 4.48502, 6.35429, -0.240656, 4.59055, -0.721907]], "attribution_totals/2b_0_action_2_residuals.json": [-1.81704, -2.19319, -6.33319, 0.0797472, 0.191121, 0.894655, -1.68682, -1.5886, 0.0187327, -0.600881, -1.29154, 0.00139858, -0.0673937, -1.80308, -2.79192, -4.64364, -12.5978, 2.12738], "attribution_totals/2b_0_action_3_channels.json": [[-0.0225511, 0.0188269, 0.242633, -0.334069, -2.01572, -0.916508, 2.58964, -0.453132], [0.0308778, 0.236322, 0.0190445, 0.71067, -1.36381, -0.919562, 1.52203, -0.135068], [0.315335, 0.116238, 0.813866, -0.355518, 0.00491825, -0.0381489, 0.362613, 0.349083], [0.490087, 0.656524, 0.141897, 0.560422, 0.259492, -0.0485975, 0.320535, 0.119758], [0.177386, 0.266293, 0.452871, 0.775919, 0.224912, 0.105032, 0.216281, 0.248783], [0.721756, 0.899303, -1.23094, 1.34302, 0.277179, 0.523086, -0.820828, 0.0214165], [0.568515, 0.823835, -0.0781114, -0.187263, -0.212601, -0.0544013, -0.715559, 0.0193952], [0.253873, 0.472638, -0.0304728, 1.06225, 0.677187, 0.0896588, -1.15291, 0.0170925], [0.167053, 0.251822, -0.333343, 1.8641, 0.540106, -0.240133, 0.0764062, -0.0331253], [-0.0575843, 0.222918, 0.0760495, 0.332179, 0.816324, -0.531951, -0.0297227, 0.228781], [-0.106649, -0.13293, -0.0146984, -0.733121, 0.85269, -0.159142, -0.250708, -0.0223506], [0.0581467, -0.118042, -0.0251505, 0.937719, 0.398649, -0.116638, -0.327442, 0.211055], [-0.00363184, -0.1142, 0.0218618, 0.544994, 0.50779, 0.0327906, 0.0257833, -0.0274407], [0.122825, -0.107478, 0.483798, 0.316184, -0.0867265, -0.131259, -0.345554, 0.152715], [0.0263307, -0.130403, -0.543659, 0.785599, 0.415057, 0.501259, 0.0657784, 0.0437281], [9.35846, 0.88465, 1.76791, -2.6129, 0.122988, -2.03861, 3.22497, 0.496562], [13.5915, 2.39311, 0.605116, -4.49247, -0.378167, -1.81551, 3.59149, 0.0214345], [2.97979, -0.74095, -0.150218, 2.03366, 2.56416, -0.480348, 1.3921, -0.655743]], "attribution_totals/2b_0_action_3_residuals.json": [0.384498, 1.36499, 0.470047, 1.07697, 0.275667, 0.345584, 0.648762, -0.189713, -0.41163, -0.945793, 0.197455, -0.424979, -0.36058, 0.336677, -0.754424, 1.52409, 4.57947, -6.98126], "attribution_totals/2b_0_action_4_channels.json": [[0.00811776, 0.120414, 0.0662932, -0.748258, -1.7468, -1.05577, 3.09974, -0.306335], [0.0643024, 0.284899, -0.611, 0.121022, -1.65188, -1.32104, 2.1355, 0.130074], [0.886317, 0.170806, 0.215393, -0.307995, -0.125945, -0.20874, 1.2401, 0.171037], [-0.0225597, -0.171603, -0.000382498, -0.739956, -0.794055, -0.499087, -0.0392977, -0.0674106], [0.306618, 0.151879, 0.364551, -0.370844, -1.17839, -0.353751, 1.36302, 0.0286625], [-1.41347, -1.06388, 1.83552, -1.75324, 0.194995, -0.676523, 1.82907, 0.20688], [-0.626718, -0.408735, 0.0231286, 0.8652, 0.573731, 0.0580951, 1.93726, 0.293673], [-0.094104, -0.342313, 0.689565, -0.754368, -1.45113, -0.27791, 1.16182, -0.0830734], [0.0280624, -0.286031, 0.100894, 0.854185, -0.182777, 0.0889665, 0.155333, -0.0232267], [-0.443266, -0.560446, -0.169059, 0.297908, -0.0418488, 0.378543, -0.00126981, 0.57647], [-0.301304, -0.250431, 0.063654, -1.8447, 0.611891, 0.61685, 0.0938108, 0.684774], [-0.0878465, -0.476862, -0.143031, 0.254535, 1.00178, 0.334984, -0.769393, 0.528103], [0.00932715, -0.432612, -0.270231, 1.1437, 0.775068, 0.31776, -0.306319, -0.0285237], [-1.94976, -0.994364, -0.257522, 1.15879, 0.131592, 0.190901, -0.725996, -0.271123], [0.0340827, -0.364952, -0.120048, 0.567431, -1.38392, -0.366071, -0.0548281, -0.0593123], [6.56022, 0.25463, 1.64063, -1.13933, -1.22372, -1.68335, 1.63558, 0.915408], [8.22263, 2.40854, 0.629866, -4.12866, -0.0779741, -1.0002, 4.51575, -0.279774], [8.34281, -0.194186, -1.86095, 0.00678546, 2.56512, -0.254707, 3.21935, -2.00564]], "attribution_totals/2b_0_action_4_residuals.json": [0.148959, 0.945034, -1.00208, 0.341081, 0.926181, -0.45363, 0.206382, 0.846861, 0.296662, -0.266455, 0.881011, -0.258056, 0.310486, 1.14337, 1.51208, 2.60668, 5.38666, -2.60078], "attribution_totals/2b_0_action_5_channels.json": [[-0.0912143, -0.146689, 0.397986, -0.203332, -1.64728, -0.447002, 2.54454, -0.370886], [-0.0295377, 0.0987584, 0.515602, 0.786336, -0.145667, 0.223394, 0.899352, -0.0264664], [0.436864, 0.104017, 1.26925, -0.589506, 0.0853084, -0.167, -0.157649, 0.469117], [0.764121, 1.10972, 0.978555, 1.26937, 1.36824, 0.51588, 0.564381, 0.346288], [-0.46736, 0.0998945, 0.992462, 1.30798, 1.46931, 0.77299, -0.83247, 0.240107], [1.43372, 1.16973, -2.23778, 3.08791, 0.492904, 1.32896, -1.9972, -0.491387], [0.00795093, -0.52066, 1.59194, 1.04519, -0.275906, 0.375346, -2.24515, -0.654937], [-0.106807, 0.0651756, -0.803317, 2.12719, 1.92063, 0.231984, -0.998902, -0.146179], [0.105247, 0.214645, -0.32861, 1.51961, 0.875254, -0.33706, -0.164433, -0.185649], [0.161182, 0.388885, 0.441081, 0.432975, 0.709468, -0.555142, 0.0247841, -0.585657], [0.110002, -0.00324151, 0.0696591, 0.131397, -0.192023, -0.276292, -0.249515, -0.613584], [0.0628138, 0.174886, 0.103019, 0.857203, -0.133771, -0.393548, 0.0378879, -0.325395], [0.290339, 0.527315, 0.338746, 0.128528, 0.0587642, -0.0464209, 0.566153, -0.134661], [2.70321, 1.42902, -0.192059, -0.819357, 0.378371, 0.086121, 1.65233, 0.439376], [0.243554, 0.434356, 0.340295, 0.0743386, 2.78593, 1.28698, 0.0721624, 0.195122], [7.06723, 1.27067, 1.33197, 0.294574, -0.0386451, -1.73223, 2.24532, 0.114696], [1.50322, 1.84444, 0.690977, -0.129836, -2.86641, 0.0700041, 2.94244, 0.251903], [4.85386, -0.415828, 0.758698, 5.37764, 2.45639, -1.86555, 3.80864, -1.67201]], "attribution_totals/2b_0_action_5_residuals.json": [0.230001, 0.906586, 0.767786, 1.41653, -0.139929, 0.698252, -2.4487, -1.34105, -0.472696, -0.203195, 0.037665, 0.527686, -0.982674, -2.01339, -3.1804, 2.42936, 9.72154, -4.77804], "attribution_totals/2b_0_action_6_channels.json": [[-0.0396464, -0.211435, -0.484191, 0.301995, 0.953074, -0.106411, -2.2964, 0.0859691], [-0.072467, -0.385258, -1.71619, -0.559616, 0.0140995, 0.371213, -0.718318, -0.154384], [0.254179, 0.165526, -0.47767, 0.502094, -2.35587, 0.218946, 0.691413, -0.287372], [-0.0578722, 0.139388, 0.114184, 0.864142, -0.195417, 0.316605, -0.0106349, -0.0077322], [-0.0695423, 0.268041, -0.221773, 0.370933, 0.0622369, -0.190046, -0.100221, 0.106668], [0.753904, 1.14899, -1.2353, 0.970668, -0.209375, 0.0649247, -0.652642, 0.208046], [0.430233, 0.873242, -0.846504, 0.0324168, -0.442656, -0.333316, -0.634161, -0.0075689], [0.166345, 0.494983, 0.0820183, -0.200368, 0.0119582, 0.0747896, -0.218605, 0.0541219], [0.0918277, 0.0117883, -0.536903, 0.702526, 0.690801, -0.0689516, 0.119016, -0.0868988], [-0.236524, -0.0953404, -0.0317446, 0.486681, 0.911377, -0.319352, -0.393338, 0.165189], [-0.255499, -0.199131, -0.0716924, 0.00929648, 0.933488, -0.125359, -0.351799, -0.11909], [0.0334701, -0.137949, -0.10062, 0.799893, 0.642384, -0.12121, -0.357719, 0.300726], [-0.135715, -0.0920279, -0.324253, 0.455273, 0.388714, -0.0700129, -0.286046, 0.119871], [0.368673, 0.162352, -0.395878, -0.651418, 0.0369048, 0.161033, 0.437464, 0.163463], [-0.144494, -0.0765102, -1.19388, -0.101831, 0.503347, 0.0104923, 0.397618, 0.178283], [-19.2567, -2.12121, -5.68888, 7.70675, 0.550977, 5.36643, -7.2257, -1.11525], [-13.2043, -4.46836, 1.86979, 9.77765, 2.68344, 0.0195112, -9.91053, -1.31817], [-0.748059, -0.232214, -4.3467, 2.0612, -1.26886, -0.058216, 0.671264, -2.04458]], "attribution_totals/2b_0_action_6_residuals.json": [-0.407467, -1.05708, 0.399318, -0.0372662, -0.0902029, -0.0469999, -0.293965, -0.674758, -0.524411, -1.15219, -0.5587, -0.784138, -0.0719396, 0.0409627, 0.0500091, -3.94212, -20.8127, -1.68484], "attribution_totals/2b_0_action_7_channels.json": [[0.000966748, -0.0974306, -0.0391746, 0.406727, 0.410329, 0.13683, -1.3128, 0.0907322], [-0.0139687, -0.145698, -0.464033, 0.203766, -0.549433, -0.0593878, -0.392258, -0.186481], [0.105982, 0.281798, -0.853314, 0.307745, -0.182845, -0.670127, 1.6894, 0.0459766], [0.0130065, 0.183638, 0.0628237, 0.509407, 0.0996343, -0.0115368, -0.0519695, -0.1167], [0.389057, 0.216609, 0.78767, -0.0935198, 0.64476, 0.153884, -0.688357, 0.0184431], [0.891133, 0.919453, -1.45007, 0.746494, 0.136369, 0.315827, -0.367903, 0.288184], [0.504264, 0.993674, -0.88474, -1.03313, -0.364847, -0.168822, -0.481702, 0.092604], [0.23425, 0.391618, -0.740037, 0.830145, 0.263413, 0.0558691, -0.190484, 0.193054], [0.0610311, 0.210873, 0.140482, 0.162278, 0.195648, -0.156625, 0.0904868, -0.0219921], [-0.0211775, 0.015213, 0.0246029, 0.820236, 0.399796, -0.225667, -0.527556, 0.0687607], [-0.127494, -0.162313, -0.342862, 1.73307, 0.748576, 0.00367366, -0.219183, 0.205525], [0.0614408, 0.132387, -0.0998493, 0.564177, 0.459424, -0.015164, 0.258619, 0.177026], [0.0425347, 0.0750556, -0.0616742, 0.381369, -0.0228211, -0.0993352, 0.517486, 0.0407143], [0.225521, 0.284369, -0.1225, -0.160567, -0.0765882, -0.0174191, 0.189512, 0.189676], [0.0580264, -0.0896903, -0.517122, 0.174741, 0.226086, 0.0369931, 0.136033, 0.274879], [-5.79484, -0.416456, -2.01935, 1.53326, 0.106436, 1.64743, -2.33079, -0.431112], [-2.46301, -1.43111, -0.998047, 2.00587, 0.103702, 0.222561, -3.17374, -0.380855], [4.04934, -0.276982, -0.8348, -1.22545, 1.45365, 0.484019, 0.624942, -0.335298]], "attribution_totals/2b_0_action_7_residuals.json": [-0.493809, -0.395735, -1.62515, -0.0330428, 0.100875, 0.335913, 0.584544, -0.197996, 0.449918, -0.560316, -1.5476, -0.769207, 0.0409212, -0.138872, -0.50037, -1.0867, -6.21247, 1.42678], "attribution_totals/2b_0_action_8_channels.json": [[-0.0293277, -0.139392, -0.0577156, 0.384244, 0.355996, -0.0445504, -0.799967, 0.035078], [-0.0285709, -0.12806, -0.432956, 0.295916, -0.41182, -0.157432, -0.0910218, -0.24211], [0.070236, 0.30819, -0.813436, 0.234366, 0.249843, -0.504985, 1.82316, 0.231447], [0.178441, 0.491741, -0.0622056, 0.731019, 0.0977087, 0.051136, 0.0151099, 0.0155518], [0.691357, 0.689299, 0.754912, 0.112373, -0.0196804, -0.204544, -0.132392, 0.129701], [1.09173, 1.22716, -0.950528, 0.623298, 0.378942, 0.31841, -0.58464, 0.247398], [0.987076, 1.38192, -0.791159, -1.40185, -0.367981, -0.422468, -0.88905, 0.195766], [0.354173, 0.732242, -0.631984, 0.493128, 0.642771, 0.103084, -0.617152, 0.243224], [0.0881824, 0.152658, 0.0242004, 0.346315, 0.244704, -0.206786, -0.41445, -0.00521593], [0.0626377, -0.0281379, -0.0317467, 0.663671, 0.394875, -0.147093, -0.695854, -0.242658], [-0.073305, -0.276384, -0.398245, 2.86839, 0.406543, -0.206318, -0.653833, -0.0380576], [-0.0507867, 0.0463021, -0.0593823, 0.547825, 0.326684, -0.181155, -0.0385347, 0.0519104], [-0.0660097, 0.147225, -0.0709816, -0.108052, -0.0688722, -0.171594, 0.407441, 0.0233697], [0.130703, 0.104226, 0.181149, -0.342368, -0.197279, -0.135131, 0.116039, 0.186195], [0.187243, -0.140793, -0.0869712, 1.29925, 0.0962114, 0.317402, -0.255513, 0.223555], [-4.69703, -0.318264, -1.8984, 0.832074, 0.579318, 1.19838, -2.12125, -0.413529], [1.45701, -0.928418, -0.811227, 2.16833, 1.00758, 0.0812042, -2.74362, -0.496793], [5.90295, -0.295064, -1.2707, -1.43159, 2.56498, 0.293522, 1.01045, -0.502087]], "attribution_totals/2b_0_action_8_residuals.json": [-0.516587, -0.0218509, -1.36075, 0.528658, 0.763275, 0.255393, 1.54339, -0.0934607, -0.0228135, -0.092886, -1.78876, -0.45436, 0.540626, 0.248746, -1.61853, -1.75194, -7.42526, 2.47048]}, "attribution": {"layer": "2b", "trajectory": 0, "images": ["2b_0_v_abs_prin.png", "2b_0_v_abs_all.png", "2b_0_v_abs_0.png", "2b_0_v_abs_1.png", "2b_0_v_abs_2.png", "2b_0_v_abs_3.png", "2b_0_v_abs_4.png", "2b_0_v_abs_5.png", "2b_0_v_abs_6.png", "2b_0_v_abs_7.png", "2b_0_v_abs_res.png", "2b_0_v_pos_prin.png", "2b_0_v_pos_all.png", "2b_0_v_pos_0.png", "2b_0_v_pos_1.png", "2b_0_v_pos_2.png", "2b_0_v_pos_3.png", "2b_0_v_pos_4.png", "2b_0_v_pos_5.png", "2b_0_v_pos_6.png", "2b_0_v_pos_7.png", "2b_0_v_pos_res.png", "2b_0_v_neg_prin.png", "2b_0_v_neg_all.png", "2b_0_v_neg_0.png", "2b_0_v_neg_1.png", "2b_0_v_neg_2.png", "2b_0_v_neg_3.png", "2b_0_v_neg_4.png", "2b_0_v_neg_5.png", "2b_0_v_neg_6.png", "2b_0_v_neg_7.png", "2b_0_v_neg_res.png", "2b_0_action_0_abs_prin.png", "2b_0_action_0_abs_all.png", "2b_0_action_0_abs_0.png", "2b_0_action_0_abs_1.png", "2b_0_action_0_abs_2.png", "2b_0_action_0_abs_3.png", "2b_0_action_0_abs_4.png", "2b_0_action_0_abs_5.png", "2b_0_action_0_abs_6.png", "2b_0_action_0_abs_7.png", "2b_0_action_0_abs_res.png", "2b_0_action_0_pos_prin.png", "2b_0_action_0_pos_all.png", "2b_0_action_0_pos_0.png", "2b_0_action_0_pos_1.png", "2b_0_action_0_pos_2.png", "2b_0_action_0_pos_3.png", "2b_0_action_0_pos_4.png", "2b_0_action_0_pos_5.png", "2b_0_action_0_pos_6.png", "2b_0_action_0_pos_7.png", "2b_0_action_0_pos_res.png", "2b_0_action_0_neg_prin.png", "2b_0_action_0_neg_all.png", "2b_0_action_0_neg_0.png", "2b_0_action_0_neg_1.png", "2b_0_action_0_neg_2.png", "2b_0_action_0_neg_3.png", "2b_0_action_0_neg_4.png", "2b_0_action_0_neg_5.png", "2b_0_action_0_neg_6.png", "2b_0_action_0_neg_7.png", "2b_0_action_0_neg_res.png", "2b_0_action_1_abs_prin.png", "2b_0_action_1_abs_all.png", "2b_0_action_1_abs_0.png", "2b_0_action_1_abs_1.png", "2b_0_action_1_abs_2.png", "2b_0_action_1_abs_3.png", "2b_0_action_1_abs_4.png", "2b_0_action_1_abs_5.png", "2b_0_action_1_abs_6.png", "2b_0_action_1_abs_7.png", "2b_0_action_1_abs_res.png", "2b_0_action_1_pos_prin.png", "2b_0_action_1_pos_all.png", "2b_0_action_1_pos_0.png", "2b_0_action_1_pos_1.png", "2b_0_action_1_pos_2.png", "2b_0_action_1_pos_3.png", "2b_0_action_1_pos_4.png", "2b_0_action_1_pos_5.png", "2b_0_action_1_pos_6.png", "2b_0_action_1_pos_7.png", "2b_0_action_1_pos_res.png", "2b_0_action_1_neg_prin.png", "2b_0_action_1_neg_all.png", "2b_0_action_1_neg_0.png", "2b_0_action_1_neg_1.png", "2b_0_action_1_neg_2.png", "2b_0_action_1_neg_3.png", "2b_0_action_1_neg_4.png", "2b_0_action_1_neg_5.png", "2b_0_action_1_neg_6.png", "2b_0_action_1_neg_7.png", "2b_0_action_1_neg_res.png", "2b_0_action_2_abs_prin.png", "2b_0_action_2_abs_all.png", "2b_0_action_2_abs_0.png", "2b_0_action_2_abs_1.png", "2b_0_action_2_abs_2.png", "2b_0_action_2_abs_3.png", "2b_0_action_2_abs_4.png", "2b_0_action_2_abs_5.png", "2b_0_action_2_abs_6.png", "2b_0_action_2_abs_7.png", "2b_0_action_2_abs_res.png", "2b_0_action_2_pos_prin.png", "2b_0_action_2_pos_all.png", "2b_0_action_2_pos_0.png", "2b_0_action_2_pos_1.png", "2b_0_action_2_pos_2.png", "2b_0_action_2_pos_3.png", "2b_0_action_2_pos_4.png", "2b_0_action_2_pos_5.png", "2b_0_action_2_pos_6.png", "2b_0_action_2_pos_7.png", "2b_0_action_2_pos_res.png", "2b_0_action_2_neg_prin.png", "2b_0_action_2_neg_all.png", "2b_0_action_2_neg_0.png", "2b_0_action_2_neg_1.png", "2b_0_action_2_neg_2.png", "2b_0_action_2_neg_3.png", "2b_0_action_2_neg_4.png", "2b_0_action_2_neg_5.png", "2b_0_action_2_neg_6.png", "2b_0_action_2_neg_7.png", "2b_0_action_2_neg_res.png", "2b_0_action_3_abs_prin.png", "2b_0_action_3_abs_all.png", "2b_0_action_3_abs_0.png", "2b_0_action_3_abs_1.png", "2b_0_action_3_abs_2.png", "2b_0_action_3_abs_3.png", "2b_0_action_3_abs_4.png", "2b_0_action_3_abs_5.png", "2b_0_action_3_abs_6.png", "2b_0_action_3_abs_7.png", "2b_0_action_3_abs_res.png", "2b_0_action_3_pos_prin.png", "2b_0_action_3_pos_all.png", "2b_0_action_3_pos_0.png", "2b_0_action_3_pos_1.png", "2b_0_action_3_pos_2.png", "2b_0_action_3_pos_3.png", "2b_0_action_3_pos_4.png", "2b_0_action_3_pos_5.png", "2b_0_action_3_pos_6.png", "2b_0_action_3_pos_7.png", "2b_0_action_3_pos_res.png", "2b_0_action_3_neg_prin.png", "2b_0_action_3_neg_all.png", "2b_0_action_3_neg_0.png", "2b_0_action_3_neg_1.png", "2b_0_action_3_neg_2.png", "2b_0_action_3_neg_3.png", "2b_0_action_3_neg_4.png", "2b_0_action_3_neg_5.png", "2b_0_action_3_neg_6.png", "2b_0_action_3_neg_7.png", "2b_0_action_3_neg_res.png", "2b_0_action_4_abs_prin.png", "2b_0_action_4_abs_all.png", "2b_0_action_4_abs_0.png", "2b_0_action_4_abs_1.png", "2b_0_action_4_abs_2.png", "2b_0_action_4_abs_3.png", "2b_0_action_4_abs_4.png", "2b_0_action_4_abs_5.png", "2b_0_action_4_abs_6.png", "2b_0_action_4_abs_7.png", "2b_0_action_4_abs_res.png", "2b_0_action_4_pos_prin.png", "2b_0_action_4_pos_all.png", "2b_0_action_4_pos_0.png", "2b_0_action_4_pos_1.png", "2b_0_action_4_pos_2.png", "2b_0_action_4_pos_3.png", "2b_0_action_4_pos_4.png", "2b_0_action_4_pos_5.png", "2b_0_action_4_pos_6.png", "2b_0_action_4_pos_7.png", "2b_0_action_4_pos_res.png", "2b_0_action_4_neg_prin.png", "2b_0_action_4_neg_all.png", "2b_0_action_4_neg_0.png", "2b_0_action_4_neg_1.png", "2b_0_action_4_neg_2.png", "2b_0_action_4_neg_3.png", "2b_0_action_4_neg_4.png", "2b_0_action_4_neg_5.png", "2b_0_action_4_neg_6.png", "2b_0_action_4_neg_7.png", "2b_0_action_4_neg_res.png", "2b_0_action_5_abs_prin.png", "2b_0_action_5_abs_all.png", "2b_0_action_5_abs_0.png", "2b_0_action_5_abs_1.png", "2b_0_action_5_abs_2.png", "2b_0_action_5_abs_3.png", "2b_0_action_5_abs_4.png", "2b_0_action_5_abs_5.png", "2b_0_action_5_abs_6.png", "2b_0_action_5_abs_7.png", "2b_0_action_5_abs_res.png", "2b_0_action_5_pos_prin.png", "2b_0_action_5_pos_all.png", "2b_0_action_5_pos_0.png", "2b_0_action_5_pos_1.png", "2b_0_action_5_pos_2.png", "2b_0_action_5_pos_3.png", "2b_0_action_5_pos_4.png", "2b_0_action_5_pos_5.png", "2b_0_action_5_pos_6.png", "2b_0_action_5_pos_7.png", "2b_0_action_5_pos_res.png", "2b_0_action_5_neg_prin.png", "2b_0_action_5_neg_all.png", "2b_0_action_5_neg_0.png", "2b_0_action_5_neg_1.png", "2b_0_action_5_neg_2.png", "2b_0_action_5_neg_3.png", "2b_0_action_5_neg_4.png", "2b_0_action_5_neg_5.png", "2b_0_action_5_neg_6.png", "2b_0_action_5_neg_7.png", "2b_0_action_5_neg_res.png", "2b_0_action_6_abs_prin.png", "2b_0_action_6_abs_all.png", "2b_0_action_6_abs_0.png", "2b_0_action_6_abs_1.png", "2b_0_action_6_abs_2.png", "2b_0_action_6_abs_3.png", "2b_0_action_6_abs_4.png", "2b_0_action_6_abs_5.png", "2b_0_action_6_abs_6.png", "2b_0_action_6_abs_7.png", "2b_0_action_6_abs_res.png", "2b_0_action_6_pos_prin.png", "2b_0_action_6_pos_all.png", "2b_0_action_6_pos_0.png", "2b_0_action_6_pos_1.png", "2b_0_action_6_pos_2.png", "2b_0_action_6_pos_3.png", "2b_0_action_6_pos_4.png", "2b_0_action_6_pos_5.png", "2b_0_action_6_pos_6.png", "2b_0_action_6_pos_7.png", "2b_0_action_6_pos_res.png", "2b_0_action_6_neg_prin.png", "2b_0_action_6_neg_all.png", "2b_0_action_6_neg_0.png", "2b_0_action_6_neg_1.png", "2b_0_action_6_neg_2.png", "2b_0_action_6_neg_3.png", "2b_0_action_6_neg_4.png", "2b_0_action_6_neg_5.png", "2b_0_action_6_neg_6.png", "2b_0_action_6_neg_7.png", "2b_0_action_6_neg_res.png", "2b_0_action_7_abs_prin.png", "2b_0_action_7_abs_all.png", "2b_0_action_7_abs_0.png", "2b_0_action_7_abs_1.png", "2b_0_action_7_abs_2.png", "2b_0_action_7_abs_3.png", "2b_0_action_7_abs_4.png", "2b_0_action_7_abs_5.png", "2b_0_action_7_abs_6.png", "2b_0_action_7_abs_7.png", "2b_0_action_7_abs_res.png", "2b_0_action_7_pos_prin.png", "2b_0_action_7_pos_all.png", "2b_0_action_7_pos_0.png", "2b_0_action_7_pos_1.png", "2b_0_action_7_pos_2.png", "2b_0_action_7_pos_3.png", "2b_0_action_7_pos_4.png", "2b_0_action_7_pos_5.png", "2b_0_action_7_pos_6.png", "2b_0_action_7_pos_7.png", "2b_0_action_7_pos_res.png", "2b_0_action_7_neg_prin.png", "2b_0_action_7_neg_all.png", "2b_0_action_7_neg_0.png", "2b_0_action_7_neg_1.png", "2b_0_action_7_neg_2.png", "2b_0_action_7_neg_3.png", "2b_0_action_7_neg_4.png", "2b_0_action_7_neg_5.png", "2b_0_action_7_neg_6.png", "2b_0_action_7_neg_7.png", "2b_0_action_7_neg_res.png", "2b_0_action_8_abs_prin.png", "2b_0_action_8_abs_all.png", "2b_0_action_8_abs_0.png", "2b_0_action_8_abs_1.png", "2b_0_action_8_abs_2.png", "2b_0_action_8_abs_3.png", "2b_0_action_8_abs_4.png", "2b_0_action_8_abs_5.png", "2b_0_action_8_abs_6.png", "2b_0_action_8_abs_7.png", "2b_0_action_8_abs_res.png", "2b_0_action_8_pos_prin.png", "2b_0_action_8_pos_all.png", "2b_0_action_8_pos_0.png", "2b_0_action_8_pos_1.png", "2b_0_action_8_pos_2.png", "2b_0_action_8_pos_3.png", "2b_0_action_8_pos_4.png", "2b_0_action_8_pos_5.png", "2b_0_action_8_pos_6.png", "2b_0_action_8_pos_7.png", "2b_0_action_8_pos_res.png", "2b_0_action_8_neg_prin.png", "2b_0_action_8_neg_all.png", "2b_0_action_8_neg_0.png", "2b_0_action_8_neg_1.png", "2b_0_action_8_neg_2.png", "2b_0_action_8_neg_3.png", "2b_0_action_8_neg_4.png", "2b_0_action_8_neg_5.png", "2b_0_action_8_neg_6.png", "2b_0_action_8_neg_7.png", "2b_0_action_8_neg_res.png"], "metadata": {"type": ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "v", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action", "action"], "data": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], "direction": ["abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "abs", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "pos", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg", "neg"], "channel": ["prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res", "prin", "all", 0, 1, 2, 3, 4, 5, 6, 7, "res"]}}};
