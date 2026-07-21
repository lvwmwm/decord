// Module ID: 4756
// Function ID: 41284
// Dependencies: []

// Module 4756
arg5.default = {
  isWebpFile(dataView) {
    let tmp2 = !tmp;
    if (!!dataView) {
      tmp2 = arg1(arg6[0]).getStringFromDataView(dataView, 0, 4) === "RIFF";
      const obj = arg1(arg6[0]);
    }
    if (tmp2) {
      tmp2 = arg1(arg6[0]).getStringFromDataView(dataView, 8, 4) === "WEBP";
      const obj2 = arg1(arg6[0]);
    }
    return tmp2;
  },
  findOffsets(byteLength) {
    let num = 12;
    let flag = false;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let flag2 = false;
    if (20 < byteLength.byteLength) {
      while (true) {
        let tmp9 = arg1;
        let tmp10 = arg6;
        let obj = arg1(arg6[0]);
        let stringFromDataView = obj.getStringFromDataView(byteLength, num, 4);
        let uint32 = byteLength.getUint32(num + 4, true);
        let tmp13 = arg2;
        let tmp14 = num;
        if (arg2(arg6[1]).USE_EXIF) {
          if ("EXIF" === stringFromDataView) {
            let tmp23 = arg1;
            let tmp24 = arg6;
            let obj4 = arg1(arg6[0]);
            let sum = num + 8;
            let sum1 = sum;
            if (obj4.getStringFromDataView(byteLength, sum, 6) === "Exif\0\0") {
              sum1 = sum + 6;
            }
            let tmp19 = sum1;
            let tmp20 = tmp2;
            let tmp21 = tmp3;
            let sum3 = tmp4;
            flag = true;
            let tmp27 = flag;
            let sum2 = uint32;
            if (uint32 % 2 !== 0) {
              sum2 = uint32 + 1;
            }
            num = num + (8 + sum2);
            let tmp = tmp19;
            let tmp2 = tmp20;
            let tmp3 = tmp21;
            let tmp4 = sum3;
            tmp5 = tmp19;
            tmp6 = tmp20;
            tmp7 = tmp21;
            tmp8 = sum3;
            flag2 = flag;
            if (num + 8 >= byteLength.byteLength) {
              break;
            }
          }
        }
        let tmp15 = arg2;
        let tmp16 = arg6;
        if (arg2(arg6[1]).USE_XMP) {
          if ("XMP " === stringFromDataView) {
            obj = { dataOffset: num + 8, length: uint32 };
            let items = [obj];
            tmp19 = tmp;
            tmp20 = items;
            tmp21 = tmp3;
            sum3 = tmp4;
            flag = true;
          }
        }
        let tmp17 = arg2;
        let tmp18 = arg6;
        if (arg2(arg6[1]).USE_ICC) {
          if ("ICCP" === stringFromDataView) {
            obj = { offset: num + 8, length: uint32, chunkNumber: 1, chunksTotal: 1 };
            let items1 = [obj];
            tmp19 = tmp;
            tmp20 = tmp2;
            tmp21 = items1;
            sum3 = tmp4;
            flag = true;
          }
        }
        tmp19 = tmp;
        tmp20 = tmp2;
        tmp21 = tmp3;
        sum3 = tmp4;
        if ("VP8X" === stringFromDataView) {
          sum3 = num + 8;
          tmp19 = tmp;
          tmp20 = tmp2;
          tmp21 = tmp3;
          flag = true;
        }
      }
    }
    const obj1 = { hasAppMarkers: flag2, tiffHeaderOffset: tmp5, xmpChunks: tmp6, iccChunks: tmp7, vp8xChunkOffset: tmp8 };
    return obj1;
  }
};
