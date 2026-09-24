// Module ID: 14224
// Function ID: 14225
// Name: badges/GuildBadge
// Dependencies: [109, 19, 8239, 21, 558, 568, 14225, 14228, 14229, 14230, 14231, 14232, 14233, 14234, 14235, 14236, 14237, 14238, 14239, 14240, 14241, 14242, 14243, 14244, 14245, 14246, 14247, 14248, 14249, 14250, 14251, 14252, 14253, 14254, 14255, 14256, 14257, 14258, 14259, 14260, 14261, 14262, 14263, 14264, 14265, 14266, 14267, 2]

// Module 14224 (badges/GuildBadge)
import c from "c" /* 568 */;
import GuildBadgeSword from "GuildBadgeSword" /* 14225 */;
import GuildBadgeWaterDrop from "GuildBadgeWaterDrop" /* 14228 */;
import GuildBadgeSkull from "GuildBadgeSkull" /* 14229 */;
import GuildBadgeToadstool from "GuildBadgeToadstool" /* 14230 */;
import GuildBadgeMoon from "GuildBadgeMoon" /* 14231 */;
import GuildBadgeLightning from "GuildBadgeLightning" /* 14232 */;
import GuildBadgeLeaf from "GuildBadgeLeaf" /* 14233 */;
import GuildBadgeHeart from "GuildBadgeHeart" /* 14234 */;
import GuildBadgeFire from "GuildBadgeFire" /* 14235 */;
import GuildBadgeCompass from "GuildBadgeCompass" /* 14236 */;
import GuildBadgeCrosshairs from "GuildBadgeCrosshairs" /* 14237 */;
import GuildBadgeFlower from "GuildBadgeFlower" /* 14238 */;
import GuildBadgeForce from "GuildBadgeForce" /* 14239 */;
import GuildBadgeGem from "GuildBadgeGem" /* 14240 */;
import GuildBadgeLava from "GuildBadgeLava" /* 14241 */;
import GuildBadgePsychic from "GuildBadgePsychic" /* 14242 */;
import GuildBadgeSmoke from "GuildBadgeSmoke" /* 14243 */;
import GuildBadgeSnow from "GuildBadgeSnow" /* 14244 */;
import GuildBadgeSound from "GuildBadgeSound" /* 14245 */;
import GuildBadgeSun from "GuildBadgeSun" /* 14246 */;
import GuildBadgeWind from "GuildBadgeWind" /* 14247 */;
import GuildBadgeBunny from "GuildBadgeBunny" /* 14248 */;
import GuildBadgeDog from "GuildBadgeDog" /* 14249 */;
import GuildBadgeFrog from "GuildBadgeFrog" /* 14250 */;
import GuildBadgeGoat from "GuildBadgeGoat" /* 14251 */;
import GuildBadgeCat from "GuildBadgeCat" /* 14252 */;
import GuildBadgeDiamond from "GuildBadgeDiamond" /* 14253 */;
import GuildBadgeCrown from "GuildBadgeCrown" /* 14254 */;
import GuildBadgeTrophy from "GuildBadgeTrophy" /* 14255 */;
import GuildBadgeMoneyBag from "GuildBadgeMoneyBag" /* 14256 */;
import GuildBadgeDollarSign from "GuildBadgeDollarSign" /* 14257 */;
import GuildBadgeClover from "GuildBadgeClover" /* 14258 */;
import GuildBadgeBlossom from "GuildBadgeBlossom" /* 14259 */;
import GuildBadgePottedPlant from "GuildBadgePottedPlant" /* 14260 */;
import GuildBadgeMaple from "GuildBadgeMaple" /* 14261 */;
import GuildBadgeWiltedFlower from "GuildBadgeWiltedFlower" /* 14262 */;
import GuildBadgeButterfly from "GuildBadgeButterfly" /* 14263 */;
import GuildBadgeSnail from "GuildBadgeSnail" /* 14264 */;
import GuildBadgeCaterpillar from "GuildBadgeCaterpillar" /* 14265 */;
import GuildBadgeSpider from "GuildBadgeSpider" /* 14266 */;
import GuildBadgeBee from "GuildBadgeBee" /* 14267 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["badge", "primaryTintColor", "secondaryTintColor"];
const GuildTagBadgeKind = fn(8239).GuildTagBadgeKind;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(151);
  if (cResult[0] !== arg0) {
    ({ badge, primaryTintColor, secondaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = badge;
    cResult[2] = primaryTintColor;
    cResult[3] = tmp10;
    cResult[4] = secondaryTintColor;
    let tmp7 = secondaryTintColor;
    let tmp6 = tmp10;
    let tmp5 = primaryTintColor;
    let tmp4 = badge;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (GuildTagBadgeKind.SWORD === tmp4) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp253 = cResult[8];
        }
        return tmp253;
      }
    }
    const obj2 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged = Object.assign(tmp6);
    const tmp258 = jsx(tmp(14225).GuildBadgeSword, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[5] = tmp5;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp258;
    tmp253 = tmp258;
  } else if (tmp11.WATER_DROP === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        let tmp247 = cResult[11];
      }
      return tmp247;
    }
    const obj3 = { primaryTintColor: tmp5 };
    const merged1 = Object.assign(tmp6);
    const tmp252 = jsx(tmp(14228).GuildBadgeWaterDrop, { primaryTintColor: tmp5 });
    cResult[9] = tmp5;
    cResult[10] = tmp6;
    cResult[11] = tmp252;
    tmp247 = tmp252;
  } else if (tmp11.SKULL === tmp4) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === tmp6) {
        let tmp241 = cResult[14];
      }
      return tmp241;
    }
    const obj4 = { primaryTintColor: tmp5 };
    const merged2 = Object.assign(tmp6);
    const tmp246 = jsx(tmp(14229).GuildBadgeSkull, { primaryTintColor: tmp5 });
    cResult[12] = tmp5;
    cResult[13] = tmp6;
    cResult[14] = tmp246;
    tmp241 = tmp246;
  } else if (tmp11.TOADSTOOL === tmp4) {
    if (cResult[15] === tmp5) {
      if (cResult[16] === tmp6) {
        if (cResult[17] === tmp7) {
          let tmp235 = cResult[18];
        }
        return tmp235;
      }
    }
    const obj5 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged3 = Object.assign(tmp6);
    const tmp240 = jsx(tmp(14230).GuildBadgeToadstool, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[15] = tmp5;
    cResult[16] = tmp6;
    cResult[17] = tmp7;
    cResult[18] = tmp240;
    tmp235 = tmp240;
  } else if (tmp11.MOON === tmp4) {
    if (cResult[19] === tmp5) {
      if (cResult[20] === tmp6) {
        let tmp229 = cResult[21];
      }
      return tmp229;
    }
    const obj6 = { primaryTintColor: tmp5 };
    const merged4 = Object.assign(tmp6);
    const tmp234 = jsx(tmp(14231).GuildBadgeMoon, { primaryTintColor: tmp5 });
    cResult[19] = tmp5;
    cResult[20] = tmp6;
    cResult[21] = tmp234;
    tmp229 = tmp234;
  } else if (tmp11.LIGHTNING === tmp4) {
    if (cResult[22] === tmp5) {
      if (cResult[23] === tmp6) {
        let tmp223 = cResult[24];
      }
      return tmp223;
    }
    const obj7 = { primaryTintColor: tmp5 };
    const merged5 = Object.assign(tmp6);
    const tmp228 = jsx(tmp(14232).GuildBadgeLightning, { primaryTintColor: tmp5 });
    cResult[22] = tmp5;
    cResult[23] = tmp6;
    cResult[24] = tmp228;
    tmp223 = tmp228;
  } else if (tmp11.LEAF === tmp4) {
    if (cResult[25] === tmp5) {
      if (cResult[26] === tmp6) {
        let tmp217 = cResult[27];
      }
      return tmp217;
    }
    const obj8 = { primaryTintColor: tmp5 };
    const merged6 = Object.assign(tmp6);
    const tmp222 = jsx(tmp(14233).GuildBadgeLeaf, { primaryTintColor: tmp5 });
    cResult[25] = tmp5;
    cResult[26] = tmp6;
    cResult[27] = tmp222;
    tmp217 = tmp222;
  } else if (tmp11.HEART === tmp4) {
    if (cResult[28] === tmp5) {
      if (cResult[29] === tmp6) {
        let tmp211 = cResult[30];
      }
      return tmp211;
    }
    const obj9 = { primaryTintColor: tmp5 };
    const merged7 = Object.assign(tmp6);
    const tmp216 = jsx(tmp(14234).GuildBadgeHeart, { primaryTintColor: tmp5 });
    cResult[28] = tmp5;
    cResult[29] = tmp6;
    cResult[30] = tmp216;
    tmp211 = tmp216;
  } else if (tmp11.FIRE === tmp4) {
    if (cResult[31] === tmp5) {
      if (cResult[32] === tmp6) {
        let tmp205 = cResult[33];
      }
      return tmp205;
    }
    const obj10 = { primaryTintColor: tmp5 };
    const merged8 = Object.assign(tmp6);
    const tmp210 = jsx(tmp(14235).GuildBadgeFire, { primaryTintColor: tmp5 });
    cResult[31] = tmp5;
    cResult[32] = tmp6;
    cResult[33] = tmp210;
    tmp205 = tmp210;
  } else if (tmp11.COMPASS === tmp4) {
    if (cResult[34] === tmp5) {
      if (cResult[35] === tmp6) {
        if (cResult[36] === tmp7) {
          let tmp199 = cResult[37];
        }
        return tmp199;
      }
    }
    const obj11 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged9 = Object.assign(tmp6);
    const tmp204 = jsx(tmp(14236).GuildBadgeCompass, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[34] = tmp5;
    cResult[35] = tmp6;
    cResult[36] = tmp7;
    cResult[37] = tmp204;
    tmp199 = tmp204;
  } else if (tmp11.CROSSHAIRS === tmp4) {
    if (cResult[38] === tmp5) {
      if (cResult[39] === tmp6) {
        if (cResult[40] === tmp7) {
          let tmp193 = cResult[41];
        }
        return tmp193;
      }
    }
    const obj12 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged10 = Object.assign(tmp6);
    const tmp198 = jsx(tmp(14237).GuildBadgeCrosshairs, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[38] = tmp5;
    cResult[39] = tmp6;
    cResult[40] = tmp7;
    cResult[41] = tmp198;
    tmp193 = tmp198;
  } else if (tmp11.FLOWER === tmp4) {
    if (cResult[42] === tmp5) {
      if (cResult[43] === tmp6) {
        if (cResult[44] === tmp7) {
          let tmp187 = cResult[45];
        }
        return tmp187;
      }
    }
    const obj13 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged11 = Object.assign(tmp6);
    const tmp192 = jsx(tmp(14238).GuildBadgeFlower, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[42] = tmp5;
    cResult[43] = tmp6;
    cResult[44] = tmp7;
    cResult[45] = tmp192;
    tmp187 = tmp192;
  } else if (tmp11.FORCE === tmp4) {
    if (cResult[46] === tmp5) {
      if (cResult[47] === tmp6) {
        if (cResult[48] === tmp7) {
          let tmp181 = cResult[49];
        }
        return tmp181;
      }
    }
    const obj14 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged12 = Object.assign(tmp6);
    const tmp186 = jsx(tmp(14239).GuildBadgeForce, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[46] = tmp5;
    cResult[47] = tmp6;
    cResult[48] = tmp7;
    cResult[49] = tmp186;
    tmp181 = tmp186;
  } else if (tmp11.GEM === tmp4) {
    if (cResult[50] === tmp5) {
      if (cResult[51] === tmp6) {
        if (cResult[52] === tmp7) {
          let tmp175 = cResult[53];
        }
        return tmp175;
      }
    }
    const obj15 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged13 = Object.assign(tmp6);
    const tmp180 = jsx(tmp(14240).GuildBadgeGem, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[50] = tmp5;
    cResult[51] = tmp6;
    cResult[52] = tmp7;
    cResult[53] = tmp180;
    tmp175 = tmp180;
  } else if (tmp11.LAVA === tmp4) {
    if (cResult[54] === tmp5) {
      if (cResult[55] === tmp6) {
        if (cResult[56] === tmp7) {
          let tmp169 = cResult[57];
        }
        return tmp169;
      }
    }
    const obj16 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged14 = Object.assign(tmp6);
    const tmp174 = jsx(tmp(14241).GuildBadgeLava, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[54] = tmp5;
    cResult[55] = tmp6;
    cResult[56] = tmp7;
    cResult[57] = tmp174;
    tmp169 = tmp174;
  } else if (tmp11.PSYCHIC === tmp4) {
    if (cResult[58] === tmp5) {
      if (cResult[59] === tmp6) {
        if (cResult[60] === tmp7) {
          let tmp163 = cResult[61];
        }
        return tmp163;
      }
    }
    const obj17 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged15 = Object.assign(tmp6);
    const tmp168 = jsx(tmp(14242).GuildBadgePsychic, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[58] = tmp5;
    cResult[59] = tmp6;
    cResult[60] = tmp7;
    cResult[61] = tmp168;
    tmp163 = tmp168;
  } else if (tmp11.SMOKE === tmp4) {
    if (cResult[62] === tmp5) {
      if (cResult[63] === tmp6) {
        if (cResult[64] === tmp7) {
          let tmp157 = cResult[65];
        }
        return tmp157;
      }
    }
    const obj18 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged16 = Object.assign(tmp6);
    const tmp162 = jsx(tmp(14243).GuildBadgeSmoke, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[62] = tmp5;
    cResult[63] = tmp6;
    cResult[64] = tmp7;
    cResult[65] = tmp162;
    tmp157 = tmp162;
  } else if (tmp11.SNOW === tmp4) {
    if (cResult[66] === tmp5) {
      if (cResult[67] === tmp6) {
        if (cResult[68] === tmp7) {
          let tmp151 = cResult[69];
        }
        return tmp151;
      }
    }
    const obj19 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged17 = Object.assign(tmp6);
    const tmp156 = jsx(tmp(14244).GuildBadgeSnow, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[66] = tmp5;
    cResult[67] = tmp6;
    cResult[68] = tmp7;
    cResult[69] = tmp156;
    tmp151 = tmp156;
  } else if (tmp11.SOUND === tmp4) {
    if (cResult[70] === tmp5) {
      if (cResult[71] === tmp6) {
        if (cResult[72] === tmp7) {
          let tmp145 = cResult[73];
        }
        return tmp145;
      }
    }
    const obj20 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged18 = Object.assign(tmp6);
    const tmp150 = jsx(tmp(14245).GuildBadgeSound, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[70] = tmp5;
    cResult[71] = tmp6;
    cResult[72] = tmp7;
    cResult[73] = tmp150;
    tmp145 = tmp150;
  } else if (tmp11.SUN === tmp4) {
    if (cResult[74] === tmp5) {
      if (cResult[75] === tmp6) {
        if (cResult[76] === tmp7) {
          let tmp139 = cResult[77];
        }
        return tmp139;
      }
    }
    const obj21 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged19 = Object.assign(tmp6);
    const tmp144 = jsx(tmp(14246).GuildBadgeSun, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[74] = tmp5;
    cResult[75] = tmp6;
    cResult[76] = tmp7;
    cResult[77] = tmp144;
    tmp139 = tmp144;
  } else if (tmp11.WIND === tmp4) {
    if (cResult[78] === tmp5) {
      if (cResult[79] === tmp6) {
        if (cResult[80] === tmp7) {
          let tmp133 = cResult[81];
        }
        return tmp133;
      }
    }
    const obj22 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged20 = Object.assign(tmp6);
    const tmp138 = jsx(tmp(14247).GuildBadgeWind, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[78] = tmp5;
    cResult[79] = tmp6;
    cResult[80] = tmp7;
    cResult[81] = tmp138;
    tmp133 = tmp138;
  } else if (tmp11.BUNNY === tmp4) {
    if (cResult[82] === tmp5) {
      if (cResult[83] === tmp6) {
        let tmp127 = cResult[84];
      }
      return tmp127;
    }
    const obj23 = { primaryTintColor: tmp5 };
    const merged21 = Object.assign(tmp6);
    const tmp132 = jsx(tmp(14248).GuildBadgeBunny, { primaryTintColor: tmp5 });
    cResult[82] = tmp5;
    cResult[83] = tmp6;
    cResult[84] = tmp132;
    tmp127 = tmp132;
  } else if (tmp11.DOG === tmp4) {
    if (cResult[85] === tmp5) {
      if (cResult[86] === tmp6) {
        if (cResult[87] === tmp7) {
          let tmp121 = cResult[88];
        }
        return tmp121;
      }
    }
    const obj24 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged22 = Object.assign(tmp6);
    const tmp126 = jsx(tmp(14249).GuildBadgeDog, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[85] = tmp5;
    cResult[86] = tmp6;
    cResult[87] = tmp7;
    cResult[88] = tmp126;
    tmp121 = tmp126;
  } else if (tmp11.FROG === tmp4) {
    if (cResult[89] === tmp5) {
      if (cResult[90] === tmp6) {
        if (cResult[91] === tmp7) {
          let tmp115 = cResult[92];
        }
        return tmp115;
      }
    }
    const obj25 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged23 = Object.assign(tmp6);
    const tmp120 = jsx(tmp(14250).GuildBadgeFrog, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[89] = tmp5;
    cResult[90] = tmp6;
    cResult[91] = tmp7;
    cResult[92] = tmp120;
    tmp115 = tmp120;
  } else if (tmp11.GOAT === tmp4) {
    if (cResult[93] === tmp5) {
      if (cResult[94] === tmp6) {
        let tmp109 = cResult[95];
      }
      return tmp109;
    }
    const obj26 = { primaryTintColor: tmp5 };
    const merged24 = Object.assign(tmp6);
    const tmp114 = jsx(tmp(14251).GuildBadgeGoat, { primaryTintColor: tmp5 });
    cResult[93] = tmp5;
    cResult[94] = tmp6;
    cResult[95] = tmp114;
    tmp109 = tmp114;
  } else if (tmp11.CAT === tmp4) {
    if (cResult[96] === tmp5) {
      if (cResult[97] === tmp6) {
        let tmp103 = cResult[98];
      }
      return tmp103;
    }
    const obj27 = { primaryTintColor: tmp5 };
    const merged25 = Object.assign(tmp6);
    const tmp108 = jsx(tmp(14252).GuildBadgeCat, { primaryTintColor: tmp5 });
    cResult[96] = tmp5;
    cResult[97] = tmp6;
    cResult[98] = tmp108;
    tmp103 = tmp108;
  } else if (tmp11.DIAMOND === tmp4) {
    if (cResult[99] === tmp5) {
      if (cResult[100] === tmp6) {
        let tmp97 = cResult[101];
      }
      return tmp97;
    }
    const obj28 = { primaryTintColor: tmp5 };
    const merged26 = Object.assign(tmp6);
    const tmp102 = jsx(tmp(14253).GuildBadgeDiamond, { primaryTintColor: tmp5 });
    cResult[99] = tmp5;
    cResult[100] = tmp6;
    cResult[101] = tmp102;
    tmp97 = tmp102;
  } else if (tmp11.CROWN === tmp4) {
    if (cResult[102] === tmp5) {
      if (cResult[103] === tmp6) {
        if (cResult[104] === tmp7) {
          let tmp91 = cResult[105];
        }
        return tmp91;
      }
    }
    const obj29 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged27 = Object.assign(tmp6);
    const tmp96 = jsx(tmp(14254).GuildBadgeCrown, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[102] = tmp5;
    cResult[103] = tmp6;
    cResult[104] = tmp7;
    cResult[105] = tmp96;
    tmp91 = tmp96;
  } else if (tmp11.TROPHY === tmp4) {
    if (cResult[106] === tmp5) {
      if (cResult[107] === tmp6) {
        let tmp85 = cResult[108];
      }
      return tmp85;
    }
    const obj30 = { primaryTintColor: tmp5 };
    const merged28 = Object.assign(tmp6);
    const tmp90 = jsx(tmp(14255).GuildBadgeTrophy, { primaryTintColor: tmp5 });
    cResult[106] = tmp5;
    cResult[107] = tmp6;
    cResult[108] = tmp90;
    tmp85 = tmp90;
  } else if (tmp11.MONEY_BAG === tmp4) {
    if (cResult[109] === tmp5) {
      if (cResult[110] === tmp6) {
        let tmp79 = cResult[111];
      }
      return tmp79;
    }
    const obj31 = { primaryTintColor: tmp5 };
    const merged29 = Object.assign(tmp6);
    const tmp84 = jsx(tmp(14256).GuildBadgeMoneyBag, { primaryTintColor: tmp5 });
    cResult[109] = tmp5;
    cResult[110] = tmp6;
    cResult[111] = tmp84;
    tmp79 = tmp84;
  } else if (tmp11.DOLLAR_SIGN === tmp4) {
    if (cResult[112] === tmp5) {
      if (cResult[113] === tmp6) {
        let tmp73 = cResult[114];
      }
      return tmp73;
    }
    const obj32 = { primaryTintColor: tmp5 };
    const merged30 = Object.assign(tmp6);
    const tmp78 = jsx(tmp(14257).GuildBadgeDollarSign, { primaryTintColor: tmp5 });
    cResult[112] = tmp5;
    cResult[113] = tmp6;
    cResult[114] = tmp78;
    tmp73 = tmp78;
  } else if (tmp11.CLOVER === tmp4) {
    if (cResult[115] === tmp5) {
      if (cResult[116] === tmp6) {
        let tmp67 = cResult[117];
      }
      return tmp67;
    }
    const obj33 = { primaryTintColor: tmp5 };
    const merged31 = Object.assign(tmp6);
    const tmp72 = jsx(tmp(14258).GuildBadgeClover, { primaryTintColor: tmp5 });
    cResult[115] = tmp5;
    cResult[116] = tmp6;
    cResult[117] = tmp72;
    tmp67 = tmp72;
  } else if (tmp11.BLOSSOM === tmp4) {
    if (cResult[118] === tmp5) {
      if (cResult[119] === tmp6) {
        let tmp61 = cResult[120];
      }
      return tmp61;
    }
    const obj34 = { primaryTintColor: tmp5 };
    const merged32 = Object.assign(tmp6);
    const tmp66 = jsx(tmp(14259).GuildBadgeBlossom, { primaryTintColor: tmp5 });
    cResult[118] = tmp5;
    cResult[119] = tmp6;
    cResult[120] = tmp66;
    tmp61 = tmp66;
  } else if (tmp11.POTTED_PLANT === tmp4) {
    if (cResult[121] === tmp5) {
      if (cResult[122] === tmp6) {
        if (cResult[123] === tmp7) {
          let tmp55 = cResult[124];
        }
        return tmp55;
      }
    }
    const obj35 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged33 = Object.assign(tmp6);
    const tmp60 = jsx(tmp(14260).GuildBadgePottedPlant, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[121] = tmp5;
    cResult[122] = tmp6;
    cResult[123] = tmp7;
    cResult[124] = tmp60;
    tmp55 = tmp60;
  } else if (tmp11.MAPLE === tmp4) {
    if (cResult[125] === tmp5) {
      if (cResult[126] === tmp6) {
        let tmp49 = cResult[127];
      }
      return tmp49;
    }
    const obj36 = { primaryTintColor: tmp5 };
    const merged34 = Object.assign(tmp6);
    const tmp54 = jsx(tmp(14261).GuildBadgeMaple, { primaryTintColor: tmp5 });
    cResult[125] = tmp5;
    cResult[126] = tmp6;
    cResult[127] = tmp54;
    tmp49 = tmp54;
  } else if (tmp11.WILTED_FLOWER === tmp4) {
    if (cResult[128] === tmp5) {
      if (cResult[129] === tmp6) {
        if (cResult[130] === tmp7) {
          let tmp43 = cResult[131];
        }
        return tmp43;
      }
    }
    const obj37 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged35 = Object.assign(tmp6);
    const tmp48 = jsx(tmp(14262).GuildBadgeWiltedFlower, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[128] = tmp5;
    cResult[129] = tmp6;
    cResult[130] = tmp7;
    cResult[131] = tmp48;
    tmp43 = tmp48;
  } else if (tmp11.BUTTERFLY === tmp4) {
    if (cResult[132] === tmp5) {
      if (cResult[133] === tmp6) {
        if (cResult[134] === tmp7) {
          let tmp37 = cResult[135];
        }
        return tmp37;
      }
    }
    const obj38 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged36 = Object.assign(tmp6);
    const tmp42 = jsx(tmp(14263).GuildBadgeButterfly, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[132] = tmp5;
    cResult[133] = tmp6;
    cResult[134] = tmp7;
    cResult[135] = tmp42;
    tmp37 = tmp42;
  } else if (tmp11.SNAIL === tmp4) {
    if (cResult[136] === tmp5) {
      if (cResult[137] === tmp6) {
        if (cResult[138] === tmp7) {
          let tmp31 = cResult[139];
        }
        return tmp31;
      }
    }
    const obj39 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged37 = Object.assign(tmp6);
    const tmp36 = jsx(tmp(14264).GuildBadgeSnail, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[136] = tmp5;
    cResult[137] = tmp6;
    cResult[138] = tmp7;
    cResult[139] = tmp36;
    tmp31 = tmp36;
  } else if (tmp11.CATERPILLAR === tmp4) {
    if (cResult[140] === tmp5) {
      if (cResult[141] === tmp6) {
        if (cResult[142] === tmp7) {
          let tmp25 = cResult[143];
        }
        return tmp25;
      }
    }
    const obj40 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged38 = Object.assign(tmp6);
    const tmp30 = jsx(tmp(14265).GuildBadgeCaterpillar, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[140] = tmp5;
    cResult[141] = tmp6;
    cResult[142] = tmp7;
    cResult[143] = tmp30;
    tmp25 = tmp30;
  } else if (tmp11.SPIDER === tmp4) {
    if (cResult[144] === tmp5) {
      if (cResult[145] === tmp6) {
        if (cResult[146] === tmp7) {
          let tmp19 = cResult[147];
        }
        return tmp19;
      }
    }
    const obj41 = { primaryTintColor: tmp5, secondaryTintColor: tmp7 };
    const merged39 = Object.assign(tmp6);
    const tmp24 = jsx(tmp(14266).GuildBadgeSpider, { primaryTintColor: tmp5, secondaryTintColor: tmp7 });
    cResult[144] = tmp5;
    cResult[145] = tmp6;
    cResult[146] = tmp7;
    cResult[147] = tmp24;
    tmp19 = tmp24;
  } else if (tmp11.BEE === tmp4) {
    if (cResult[148] === tmp5) {
      if (cResult[149] === tmp6) {
        let tmp13 = cResult[150];
      }
      return tmp13;
    }
    const obj42 = { primaryTintColor: tmp5 };
    const merged40 = Object.assign(tmp6);
    const tmp18 = jsx(tmp(14267).GuildBadgeBee, { primaryTintColor: tmp5 });
    cResult[148] = tmp5;
    cResult[149] = tmp6;
    cResult[150] = tmp18;
    tmp13 = tmp18;
  } else {
    return null;
  }
}) : ((arg0) => {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WATER_DROP === badge) {
    const obj3 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (tmp2.SKULL === badge) {
    const obj4 = { primaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor });
  } else if (tmp2.TOADSTOOL === badge) {
    const obj5 = { primaryTintColor, secondaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MOON === badge) {
    const obj6 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor });
  } else if (tmp2.LIGHTNING === badge) {
    const obj7 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor });
  } else if (tmp2.LEAF === badge) {
    const obj8 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor });
  } else if (tmp2.HEART === badge) {
    const obj9 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor });
  } else if (tmp2.FIRE === badge) {
    const obj10 = { primaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor });
  } else if (tmp2.COMPASS === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CROSSHAIRS === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FLOWER === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FORCE === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GEM === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.LAVA === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.PSYCHIC === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SMOKE === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    const merged17 = Object.assign(merged);
    return jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNOW === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    const merged18 = Object.assign(merged);
    return jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SOUND === badge) {
    const obj20 = { primaryTintColor, secondaryTintColor };
    const merged19 = Object.assign(merged);
    return jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SUN === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    const merged20 = Object.assign(merged);
    return jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WIND === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    const merged21 = Object.assign(merged);
    return jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUNNY === badge) {
    const obj23 = { primaryTintColor };
    const merged22 = Object.assign(merged);
    return jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor });
  } else if (tmp2.DOG === badge) {
    const obj24 = { primaryTintColor, secondaryTintColor };
    const merged23 = Object.assign(merged);
    return jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FROG === badge) {
    const obj25 = { primaryTintColor, secondaryTintColor };
    const merged24 = Object.assign(merged);
    return jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GOAT === badge) {
    const obj26 = { primaryTintColor };
    const merged25 = Object.assign(merged);
    return jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor });
  } else if (tmp2.CAT === badge) {
    const obj27 = { primaryTintColor };
    const merged26 = Object.assign(merged);
    return jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor });
  } else if (tmp2.DIAMOND === badge) {
    const obj28 = { primaryTintColor };
    const merged27 = Object.assign(merged);
    return jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor });
  } else if (tmp2.CROWN === badge) {
    const obj29 = { primaryTintColor, secondaryTintColor };
    const merged28 = Object.assign(merged);
    return jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.TROPHY === badge) {
    const obj30 = { primaryTintColor };
    const merged29 = Object.assign(merged);
    return jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor });
  } else if (tmp2.MONEY_BAG === badge) {
    const obj31 = { primaryTintColor };
    const merged30 = Object.assign(merged);
    return jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (tmp2.DOLLAR_SIGN === badge) {
    const obj32 = { primaryTintColor };
    const merged31 = Object.assign(merged);
    return jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor });
  } else if (tmp2.CLOVER === badge) {
    const obj33 = { primaryTintColor };
    const merged32 = Object.assign(merged);
    return jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor });
  } else if (tmp2.BLOSSOM === badge) {
    const obj34 = { primaryTintColor };
    const merged33 = Object.assign(merged);
    return jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor });
  } else if (tmp2.POTTED_PLANT === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged34 = Object.assign(merged);
    return jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MAPLE === badge) {
    const obj36 = { primaryTintColor };
    const merged35 = Object.assign(merged);
    return jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor });
  } else if (tmp2.WILTED_FLOWER === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged36 = Object.assign(merged);
    return jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUTTERFLY === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged37 = Object.assign(merged);
    return jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNAIL === badge) {
    const obj39 = { primaryTintColor, secondaryTintColor };
    const merged38 = Object.assign(merged);
    return jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CATERPILLAR === badge) {
    const obj40 = { primaryTintColor, secondaryTintColor };
    const merged39 = Object.assign(merged);
    return jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SPIDER === badge) {
    const obj41 = { primaryTintColor, secondaryTintColor };
    const merged40 = Object.assign(merged);
    return jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BEE === badge) {
    const obj = { primaryTintColor };
    const merged41 = Object.assign(merged);
    return jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
});
