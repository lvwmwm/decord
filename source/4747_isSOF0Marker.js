// Module ID: 4747
// Function ID: 41180
// Name: isSOF0Marker
// Dependencies: []

// Module 4747 (isSOF0Marker)
function isSOF0Marker(getUint16, sum1) {
  return getUint16.getUint16(sum1) === closure_19;
}
function isSOF2Marker(getUint16, sum1) {
  return getUint16.getUint16(sum1) === closure_20;
}
function isApp2ICCMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_27;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length.length) === length;
    const obj = sum1(arg6[1]);
  }
  return tmp;
}
function isApp2MPFMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_27;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length2.length) === length2;
    const obj = sum1(arg6[1]);
  }
  return tmp;
}
function isApp0JfifMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_25;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length) === length3;
    const obj = sum1(arg6[1]);
  }
  if (tmp) {
    tmp = 0 === getUint16.getUint8(sum1 + closure_6 + length);
  }
  return tmp;
}
function isApp1ExifMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_26;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length) === length4;
    const obj = sum1(arg6[1]);
  }
  if (tmp) {
    tmp = 0 === getUint16.getUint8(sum1 + closure_6 + length);
  }
  return tmp;
}
function isApp1XmpMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_26;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length5.length) === length5;
    const obj = sum1(arg6[1]);
  }
  return tmp;
}
function isApp1ExtendedXmpMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_26;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length6.length) === length6;
    const obj = sum1(arg6[1]);
  }
  return tmp;
}
function getXmpChunkDetails(arg0, uint161) {
  return { dataOffset: arg0 + closure_11, length: uint161 - 31 };
}
function getExtendedXmpChunkDetails(arg0, uint162) {
  return { dataOffset: arg0 + closure_12, length: uint162 - 77 };
}
function isApp13PhotoshopMarker(getUint16, sum1) {
  let tmp = getUint16.getUint16(sum1) === closure_28;
  if (tmp) {
    tmp = sum1(arg6[1]).getStringFromDataView(getUint16, sum1 + closure_6, length) === length7;
    const obj = sum1(arg6[1]);
  }
  if (tmp) {
    tmp = 0 === getUint16.getUint8(sum1 + closure_6 + length);
  }
  return tmp;
}
function isAppMarker(getUint16, sum1) {
  const uint16 = getUint16.getUint16(sum1);
  let tmp2 = uint16 >= closure_25;
  if (tmp2) {
    tmp2 = uint16 <= closure_29;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_30;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_19;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_20;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_21;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_22;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_23;
  }
  if (!tmp2) {
    tmp2 = uint16 === closure_24;
  }
  return tmp2;
}
function isFillByte(getUint16, sum1) {
  return getUint16.getUint16(sum1) === closure_31;
}
let closure_3 = 2;
let closure_4 = 65496;
let closure_5 = 2;
let closure_6 = 4;
let closure_7 = 2;
let closure_8 = 2;
let closure_9 = 10;
let closure_10 = 18;
let closure_11 = 33;
let closure_12 = 79;
let closure_13 = 18;
let closure_14 = 8;
let closure_15 = "ICC_PROFILE\0";
const sum = 4 + "ICC_PROFILE\0".length;
let closure_17 = sum + 1;
let closure_18 = "MPF\0";
let closure_19 = 65472;
let closure_20 = 65474;
let closure_21 = 65476;
let closure_22 = 65499;
let closure_23 = 65501;
let closure_24 = 65498;
let closure_25 = 65504;
let closure_26 = 65505;
let closure_27 = 65506;
let closure_28 = 65517;
let closure_29 = 65519;
let closure_30 = 65534;
let closure_31 = 65535;
let closure_32 = "JFIF";
let closure_33 = "Exif";
let closure_34 = "http://ns.adobe.com/xap/1.0/\0";
let closure_35 = "http://ns.adobe.com/xmp/extension/\0";
let closure_36 = "Photoshop 3.0";
arg5.default = {
  isJpegFile(byteLength) {
    let tmp2 = !tmp;
    if (!!byteLength) {
      tmp2 = byteLength.byteLength >= closure_3;
    }
    if (tmp2) {
      tmp2 = byteLength.getUint16(0) === closure_4;
    }
    return tmp2;
  },
  findJpegOffsets(byteLength) {
    let tmp15;
    let tmp9 = closure_5;
    let tmp14;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22 = closure_5;
    if (closure_5 + closure_6 + 5 <= byteLength.byteLength) {
      while (true) {
        let tmp23 = arg2;
        let tmp24 = arg6;
        if (arg2(arg6[0]).USE_FILE) {
          let tmp25 = isSOF0Marker;
          if (isSOF0Marker(byteLength, tmp9)) {
            break;
          }
        }
        let tmp26 = arg2;
        let tmp27 = arg6;
        if (arg2(arg6[0]).USE_FILE) {
          let tmp28 = isSOF2Marker;
          if (isSOF2Marker(byteLength, tmp9)) {
            let sum1 = closure_7;
            let uint16 = byteLength.getUint16(tmp9 + closure_7);
            sum1 = closure_7;
            let sum = tmp9 + closure_7;
            let sum8 = sum1;
            let sum3 = tmp3;
            let sum4 = tmp4;
            let sum5 = tmp5;
            let tmp72 = tmp6;
            let tmp73 = tmp7;
            let sum2 = tmp8;
            let tmp75 = tmp10;
            let tmp76 = tmp11;
            let tmp77 = tmp12;
            let tmp78 = tmp13;
          }
          sum1 = closure_7;
          sum1 = tmp9 + (closure_7 + uint16);
          sum1 = uint16;
          sum1 = sum8;
          sum1 = sum;
          sum1 = sum3;
          sum1 = sum4;
          sum1 = sum5;
          sum1 = tmp72;
          sum1 = tmp73;
          sum1 = sum2;
          sum1 = tmp75;
          sum1 = tmp76;
          sum1 = tmp77;
          sum1 = tmp78;
          let tmp79 = closure_7;
          uint16 = byteLength.getUint16(tmp9 + closure_7);
          let tmp80 = closure_14;
          sum2 = tmp9 + closure_14;
          sum8 = sum1;
          sum = tmp2;
          sum3 = tmp3;
          sum4 = tmp4;
          sum5 = tmp5;
          tmp72 = tmp6;
          tmp73 = tmp7;
          tmp75 = tmp10;
          tmp76 = tmp11;
          tmp77 = tmp12;
          tmp78 = tmp13;
        }
        let tmp29 = arg2;
        let tmp30 = arg6;
        if (arg2(arg6[0]).USE_JFIF) {
          let tmp31 = isApp0JfifMarker;
          if (isApp0JfifMarker(byteLength, tmp9)) {
            sum1 = closure_7;
            uint16 = byteLength.getUint16(tmp9 + closure_7);
            sum1 = closure_8;
            sum3 = tmp9 + closure_8;
            sum8 = sum1;
            sum = tmp2;
            sum4 = tmp4;
            sum5 = tmp5;
            tmp72 = tmp6;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          }
        }
        let tmp32 = arg2;
        let tmp33 = arg6;
        if (arg2(arg6[0]).USE_EXIF) {
          let tmp34 = isApp1ExifMarker;
          if (isApp1ExifMarker(byteLength, tmp9)) {
            sum1 = closure_7;
            uint16 = byteLength.getUint16(tmp9 + closure_7);
            sum1 = closure_9;
            sum4 = tmp9 + closure_9;
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum5 = tmp5;
            tmp72 = tmp6;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          }
        }
        let tmp35 = arg2;
        let tmp36 = arg6;
        if (arg2(arg6[0]).USE_XMP) {
          let tmp37 = isApp1XmpMarker;
          if (isApp1XmpMarker(byteLength, tmp9)) {
            let items = tmp6;
            if (!tmp6) {
              items = [];
            }
            let tmp97 = closure_7;
            let uint161 = byteLength.getUint16(tmp9 + closure_7);
            let tmp99 = getXmpChunkDetails;
            sum1 = items.push(getXmpChunkDetails(tmp9, uint161));
            tmp72 = items;
            uint16 = uint161;
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum4 = tmp4;
            sum5 = tmp5;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          }
        }
        let tmp38 = arg2;
        let tmp39 = arg6;
        if (arg2(arg6[0]).USE_XMP) {
          let tmp40 = isApp1ExtendedXmpMarker;
          if (isApp1ExtendedXmpMarker(byteLength, tmp9)) {
            let items1 = tmp6;
            if (!tmp6) {
              items1 = [];
            }
            let tmp93 = closure_7;
            let uint162 = byteLength.getUint16(tmp9 + closure_7);
            let tmp95 = getExtendedXmpChunkDetails;
            let arr = items1.push(getExtendedXmpChunkDetails(tmp9, uint162));
            tmp72 = items1;
            uint16 = uint162;
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum4 = tmp4;
            sum5 = tmp5;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          }
        }
        let tmp41 = arg2;
        let tmp42 = arg6;
        if (arg2(arg6[0]).USE_IPTC) {
          let tmp43 = isApp13PhotoshopMarker;
          if (isApp13PhotoshopMarker(byteLength, tmp9)) {
            let tmp91 = closure_7;
            uint16 = byteLength.getUint16(tmp9 + closure_7);
            let tmp92 = closure_10;
            sum5 = tmp9 + closure_10;
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum4 = tmp4;
            tmp72 = tmp6;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          }
        }
        let tmp44 = arg2;
        let tmp45 = arg6;
        if (arg2(arg6[0]).USE_ICC) {
          let tmp46 = isApp2ICCMarker;
          if (isApp2ICCMarker(byteLength, tmp9)) {
            let tmp81 = closure_7;
            let uint163 = byteLength.getUint16(tmp9 + closure_7);
            let tmp83 = closure_13;
            let sum6 = tmp9 + closure_13;
            let diff = uint163 - 16;
            let tmp86 = sum;
            let uint8 = byteLength.getUint8(tmp9 + sum);
            let tmp88 = closure_17;
            let uint81 = byteLength.getUint8(tmp9 + closure_17);
            let items2 = tmp7;
            if (!tmp7) {
              items2 = [];
            }
            let obj = { offset: sum6, length: diff, chunkNumber: uint8, chunksTotal: uint81 };
            arr = items2.push(obj);
            tmp73 = items2;
            uint16 = uint163;
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum4 = tmp4;
            sum5 = tmp5;
            tmp72 = tmp6;
            sum2 = tmp8;
            tmp75 = sum6;
            tmp76 = diff;
            tmp77 = uint8;
            tmp78 = uint81;
          }
        }
        let tmp47 = arg2;
        let tmp48 = arg6;
        if (!arg2(arg6[0]).USE_MPF) {
          let tmp50 = isAppMarker;
          if (isAppMarker(byteLength, tmp9)) {
            let tmp65 = closure_7;
            uint16 = byteLength.getUint16(tmp9 + closure_7);
            sum8 = sum1;
            sum = tmp2;
            sum3 = tmp3;
            sum4 = tmp4;
            sum5 = tmp5;
            tmp72 = tmp6;
            tmp73 = tmp7;
            sum2 = tmp8;
            tmp75 = tmp10;
            tmp76 = tmp11;
            tmp77 = tmp12;
            tmp78 = tmp13;
          } else {
            let tmp51 = isFillByte;
            tmp14 = sum1;
            tmp15 = tmp2;
            tmp16 = tmp3;
            tmp17 = tmp4;
            tmp18 = tmp5;
            tmp19 = tmp6;
            tmp20 = tmp7;
            tmp21 = tmp8;
            tmp22 = tmp9;
            if (isFillByte(byteLength, tmp9)) {
              let sum7 = tmp9 + 1;
              let tmp53 = sum1;
              let tmp54 = tmp2;
              let tmp55 = tmp3;
              let tmp56 = tmp4;
              let tmp57 = tmp5;
              let tmp58 = tmp6;
              let tmp59 = tmp7;
              let tmp60 = tmp8;
              let tmp61 = tmp10;
              let tmp62 = tmp11;
              let tmp63 = tmp12;
              let tmp64 = tmp13;
              sum1 = closure_6;
              tmp9 = sum7;
              tmp14 = sum1;
              tmp15 = tmp2;
              tmp16 = tmp3;
              tmp17 = tmp4;
              tmp18 = tmp5;
              tmp19 = tmp6;
              tmp20 = tmp7;
              tmp21 = tmp8;
              tmp22 = sum7;
            }
          }
        } else {
          let tmp49 = isApp2MPFMarker;
        }
      }
      sum1 = closure_7;
      uint16 = byteLength.getUint16(tmp9 + closure_7);
      sum1 = closure_7;
      sum8 = tmp9 + closure_7;
      sum = tmp2;
      sum3 = tmp3;
      sum4 = tmp4;
      sum5 = tmp5;
      tmp72 = tmp6;
      tmp73 = tmp7;
      sum2 = tmp8;
      tmp75 = tmp10;
      tmp76 = tmp11;
      tmp77 = tmp12;
      tmp78 = tmp13;
    }
    obj = { hasAppMarkers: tmp22 > closure_5 };
    if (!tmp14) {
      tmp14 = tmp15;
    }
    obj.fileDataOffset = tmp14;
    obj.jfifDataOffset = tmp16;
    obj.tiffHeaderOffset = tmp17;
    obj.iptcDataOffset = tmp18;
    obj.xmpChunks = tmp19;
    obj.iccChunks = tmp20;
    obj.mpfDataOffset = tmp21;
    return obj;
  }
};
