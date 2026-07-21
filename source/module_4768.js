// Module ID: 4768
// Function ID: 41432
// Dependencies: []

// Module 4768
let closure_0 = importDefault(dependencyMap[0]);
let obj = { -9223372036854775808: 1, 0: null, 9223372036854775807: "center", 0: null, 0: "center", 5329595: null, 8261013504: null, 400445696: null, 882811392: null, 57873107257627: null };
obj = {
  name: "GPSVersionID",
  description(arg0) {
    let str = "Unknown";
    if (2 === arg0[0]) {
      str = "Unknown";
      if (2 === arg0[1]) {
        str = "Unknown";
        if (0 === arg0[2]) {
          str = "Unknown";
          if (0 === arg0[3]) {
            str = "Version 2.2";
          }
        }
      }
    }
    return str;
  }
};
obj[0] = obj;
obj = {
  name: "GPSLatitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "North latitude";
    if ("N" !== joined) {
      let str2 = "Unknown";
      if ("S" === joined) {
        str2 = "South latitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[1] = obj;
obj[2] = { name: "GPSLatitude", description: arg1(dependencyMap[1]).getCalculatedGpsValue };
obj[3] = {
  name: "GPSLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
const obj1 = { name: "GPSLatitude", description: arg1(dependencyMap[1]).getCalculatedGpsValue };
const obj2 = {
  name: "GPSLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[4] = { name: "GPSLongitude", description: arg1(dependencyMap[1]).getCalculatedGpsValue };
obj[5] = {
  name: "GPSAltitudeRef",
  description(arg0) {
    let str = "Sea level";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Sea level reference (negative value)";
      }
      str = str2;
    }
    return str;
  }
};
obj[6] = {
  name: "GPSAltitude",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
obj[7] = {
  name: "GPSTimeStamp",
  description(arr) {
    const mapped = arr.map((arg0) => {
      const tmp = callback(arg0, 2);
      const result = tmp[0] / tmp[1];
      let combined = result;
      if (obj.test("" + result)) {
        const _HermesInternal = HermesInternal;
        combined = "0" + result;
      }
      return combined;
    });
    return mapped.join(":");
  }
};
obj[9] = {
  name: "GPSStatus",
  description(join) {
    const joined = join.join("");
    let str = "Measurement in progress";
    if ("A" !== joined) {
      let str2 = "Unknown";
      if ("V" === joined) {
        str2 = "Measurement Interoperability";
      }
      str = str2;
    }
    return str;
  }
};
obj[10] = {
  name: "GPSMeasureMode",
  description(join) {
    const joined = join.join("");
    let str = "2-dimensional measurement";
    if ("2" !== joined) {
      let str2 = "Unknown";
      if ("3" === joined) {
        str2 = "3-dimensional measurement";
      }
      str = str2;
    }
    return str;
  }
};
obj[12] = {
  name: "GPSSpeedRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers per hour";
    if ("K" !== joined) {
      let str2 = "Miles per hour";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[14] = {
  name: "GPSTrackRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[16] = {
  name: "GPSImgDirectionRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[19] = {
  name: "GPSDestLatitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "North latitude";
    if ("N" !== joined) {
      let str2 = "Unknown";
      if ("S" === joined) {
        str2 = "South latitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[20] = {
  name: "GPSDestLatitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
obj[21] = {
  name: "GPSDestLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
obj[22] = {
  name: "GPSDestLongitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
obj[23] = {
  name: "GPSDestBearingRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
obj[25] = {
  name: "GPSDestDistanceRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers";
    if ("K" !== joined) {
      let str2 = "Miles";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
const obj10 = {
  name: "GPSTrackRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
const obj11 = {
  name: "GPSImgDirectionRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
const obj12 = {
  name: "GPSDestLatitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "North latitude";
    if ("N" !== joined) {
      let str2 = "Unknown";
      if ("S" === joined) {
        str2 = "South latitude";
      }
      str = str2;
    }
    return str;
  }
};
const obj13 = {
  name: "GPSDestLatitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
const obj14 = {
  name: "GPSDestLongitudeRef",
  description(join) {
    const joined = join.join("");
    let str = "East longitude";
    if ("E" !== joined) {
      let str2 = "Unknown";
      if ("W" === joined) {
        str2 = "West longitude";
      }
      str = str2;
    }
    return str;
  }
};
const obj15 = {
  name: "GPSDestLongitude",
  description(arg0) {
    return arg0[0][0] / arg0[0][1] + arg0[1][0] / arg0[1][1] / 60 + arg0[2][0] / arg0[2][1] / 3600;
  }
};
const obj16 = {
  name: "GPSDestBearingRef",
  description(join) {
    const joined = join.join("");
    let str = "True direction";
    if ("T" !== joined) {
      let str2 = "Unknown";
      if ("M" === joined) {
        str2 = "Magnetic direction";
      }
      str = str2;
    }
    return str;
  }
};
const obj17 = {
  name: "GPSDestDistanceRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers";
    if ("K" !== joined) {
      let str2 = "Miles";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
const obj3 = { name: "GPSLongitude", description: arg1(dependencyMap[1]).getCalculatedGpsValue };
const obj4 = {
  name: "GPSAltitudeRef",
  description(arg0) {
    let str = "Sea level";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Sea level reference (negative value)";
      }
      str = str2;
    }
    return str;
  }
};
const obj5 = {
  name: "GPSAltitude",
  description(arg0) {
    return arg0[0] / arg0[1] + " m";
  }
};
const obj6 = {
  name: "GPSTimeStamp",
  description(arr) {
    const mapped = arr.map((arg0) => {
      const tmp = callback(arg0, 2);
      const result = tmp[0] / tmp[1];
      let combined = result;
      if (obj.test("" + result)) {
        const _HermesInternal = HermesInternal;
        combined = "0" + result;
      }
      return combined;
    });
    return mapped.join(":");
  }
};
const obj7 = {
  name: "GPSStatus",
  description(join) {
    const joined = join.join("");
    let str = "Measurement in progress";
    if ("A" !== joined) {
      let str2 = "Unknown";
      if ("V" === joined) {
        str2 = "Measurement Interoperability";
      }
      str = str2;
    }
    return str;
  }
};
const obj8 = {
  name: "GPSMeasureMode",
  description(join) {
    const joined = join.join("");
    let str = "2-dimensional measurement";
    if ("2" !== joined) {
      let str2 = "Unknown";
      if ("3" === joined) {
        str2 = "3-dimensional measurement";
      }
      str = str2;
    }
    return str;
  }
};
const obj9 = {
  name: "GPSSpeedRef",
  description(join) {
    const joined = join.join("");
    let str = "Kilometers per hour";
    if ("K" !== joined) {
      let str2 = "Miles per hour";
      if ("M" !== joined) {
        let str4 = "Unknown";
        if ("N" === joined) {
          str4 = "Knots";
        }
        str2 = str4;
      }
      str = str2;
    }
    return str;
  }
};
obj[27] = { name: "GPSProcessingMethod", description: arg1(dependencyMap[1]).getEncodedString };
const obj18 = { name: "GPSProcessingMethod", description: arg1(dependencyMap[1]).getEncodedString };
obj[28] = { name: "GPSAreaInformation", description: arg1(dependencyMap[1]).getEncodedString };
obj[30] = {
  name: "GPSDifferential",
  description(arg0) {
    let str = "Measurement without differential correction";
    if (0 !== arg0) {
      let str2 = "Unknown";
      if (1 === arg0) {
        str2 = "Differential correction applied";
      }
      str = str2;
    }
    return str;
  }
};

export default obj;
