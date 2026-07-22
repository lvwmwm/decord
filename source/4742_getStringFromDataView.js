// Module ID: 4742
// Function ID: 41197
// Name: getStringFromDataView
// Dependencies: []

// Module 4742 (getStringFromDataView)
function getStringFromDataView(dataView, sum, length) {
  const items = [];
  if (0 < length) {
    let num = 0;
    if (sum < dataView.byteLength) {
      items.push(dataView.getUint8(sum + num));
      num = num + 1;
      while (num < length) {
        if (sum + num >= dataView.byteLength) {
          break;
        }
      }
    }
  }
  return getStringValueFromArray(items);
}
function getStringValueFromArray(items) {
  const mapped = items.map((arg0) => String.fromCharCode(arg0));
  return mapped.join("");
}
function strRepeat(1, arg1) {
  const array = new Array(arg1 + 1);
  return array.join(_1);
}
arg5.getDataView = function getDataView(buffer, sum3, longAt) {
  const dataView = new DataView(buffer, sum3, longAt);
  return dataView;
};
arg5.getStringFromDataView = getStringFromDataView;
arg5.getNullTerminatedStringFromDataView = function getNullTerminatedStringFromDataView(byteLength, sum8) {
  const items = [];
  let num = 0;
  if (sum8 < byteLength.byteLength) {
    const uint8 = byteLength.getUint8(sum8 + num);
    while (0 !== uint8) {
      let arr = items.push(uint8);
      num = num + 1;
      if (sum8 + num >= byteLength.byteLength) {
        break;
      }
    }
  }
  return getStringValueFromArray(items);
};
arg5.getUnicodeStringFromDataView = function getUnicodeStringFromDataView(byteLength, arg1, uint326) {
  const items = [];
  if (0 < uint326) {
    let num2 = 0;
    if (arg1 < byteLength.byteLength) {
      items.push(byteLength.getUint16(arg1 + num2));
      num2 = num2 + 2;
      while (num2 < uint326) {
        if (arg1 + num2 >= byteLength.byteLength) {
          break;
        }
      }
    }
  }
  if (0 === items[items.length - 1]) {
    items.pop();
  }
  return getStringValueFromArray(items);
};
arg5.getPascalStringFromDataView = function getPascalStringFromDataView(getUint8, offset) {
  const uint8 = getUint8.getUint8(offset);
  const items = [uint8, getStringFromDataView(getUint8, offset + 1, uint8)];
  return items;
};
arg5.getStringValueFromArray = getStringValueFromArray;
arg5.getCharacterArray = function getCharacterArray(str) {
  const parts = str.split("");
  return parts.map((str) => str.charCodeAt(0));
};
arg5.objectAssign = function objectAssign(value, closure_1, readResult2, __iptc, readTags) {
  for (let num = 1; num < arguments.length; num = num + 1) {
    for (const key10007 in arguments[num]) {
      let tmp = key10007;
      arguments[0][key10007] = arguments[num][key10007];
    }
  }
  return arguments[0];
};
arg5.deferInit = function deferInit(Compression, base64, arg2) {
  arg2 = Compression;
  const arg6 = base64;
  const getStringFromDataView = arg2;
  let closure_3 = false;
  Object.defineProperty(Compression, base64, {
    get() {
      if (!closure_3) {
        closure_3 = true;
        const _Object = Object;
        const obj = { value: arg2.apply(arg0) };
        Object.defineProperty(arg0, arg1, obj);
      }
      return arg0[closure_1];
    }
  });
};
arg5.getBase64Image = function getBase64Image(image) {
  if ("undefined" !== typeof btoa) {
    if ("string" === typeof image) {
      let btoaResult = obj.btoa(image);
    } else {
      const _btoa = btoa;
      const _Array = Array;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(image);
      btoaResult = btoa(reduce.call(uint8Array, (arg0, arg1) => arg0 + String.fromCharCode(arg1), ""));
    }
  } else {
    const _Buffer = Buffer;
    if ("undefined" !== typeof Buffer) {
      const _Buffer2 = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer4 = Buffer;
        let str = Buffer.from(image).toString("base64");
        const str3 = Buffer.from(image);
      } else {
        const _Buffer3 = Buffer;
        str = new Buffer(image);
        str = str.toString("base64");
      }
    }
  }
};
arg5.dataUriToBuffer = function dataUriToBuffer(str) {
  const substr = str.substring(str.indexOf(",") + 1);
  if (-1 !== str.indexOf(";base64")) {
    const _atob = atob;
    if ("undefined" !== typeof atob) {
      const _Uint8Array2 = Uint8Array;
      const _atob2 = atob;
      return Uint8Array.from(atob(substr), (str) => str.charCodeAt(0)).buffer;
    } else {
      const _Buffer4 = Buffer;
      if ("undefined" !== typeof Buffer) {
        const _Buffer5 = Buffer;
        if (undefined !== Buffer.from) {
          const _Buffer7 = Buffer;
          let fromResult = Buffer.from(substr, "base64");
        } else {
          const _Buffer6 = Buffer;
          fromResult = new Buffer(substr, "base64");
        }
        return fromResult;
      }
    }
  } else {
    let from = globalThis;
    const _decodeURIComponent = decodeURIComponent;
    const decodeURIComponentResult = decodeURIComponent(substr);
    const _Buffer8 = Buffer;
    if ("undefined" !== typeof Buffer) {
      const _Buffer = Buffer;
      if (undefined !== Buffer.from) {
        const _Buffer3 = from.Buffer;
        from = _Buffer3.from;
        let fromResult1 = from(decodeURIComponentResult);
      } else {
        const _Buffer2 = Buffer;
        fromResult1 = new Buffer(decodeURIComponentResult);
      }
    } else {
      const _Uint8Array = Uint8Array;
      return Uint8Array.from(decodeURIComponentResult, (str) => str.charCodeAt(0)).buffer;
    }
  }
};
arg5.padStart = function padStart(arg0, arg1, 1) {
  return strRepeat(_1, arg1 - arg0.length) + arg0;
};
arg5.parseFloatRadix = function parseFloatRadix(str, result) {
  const parsed = parseInt(str.replace(".", ""), result);
  return parsed / Math.pow(result, str.split(".")[1] || "".length);
};
arg5.strRepeat = strRepeat;
arg5.COMPRESSION_METHOD_NONE = undefined;
arg5.COMPRESSION_METHOD_DEFLATE = 0;
arg5.decompress = function decompress(dataView, compressionMethod, arg2, dataview) {
  let str = "string";
  if (arguments.length > 3) {
    str = "string";
    if (undefined !== arguments[3]) {
      str = arguments[3];
    }
  }
  if (0 === compressionMethod) {
    if ("function" === typeof globalThis.DecompressionStream) {
      const prototype = globalThis.DecompressionStream.prototype;
      const decompressionStream = new globalThis.DecompressionStream("deflate");
      const _Blob = Blob;
      const items = [dataView];
      const blob = new Blob(items);
      const pipeThroughResult = blob.stream().pipeThrough(decompressionStream);
      if ("dataview" === str) {
        const _Response2 = Response;
        const response = new Response(pipeThroughResult);
        let arrayBufferResult = response.arrayBuffer();
        let nextPromise = arrayBufferResult.then((buffer) => {
          const dataView = new DataView(buffer);
          return dataView;
        });
      } else {
        const _Response = Response;
        const response1 = new Response(pipeThroughResult);
        arrayBufferResult = response1.arrayBuffer();
        nextPromise = arrayBufferResult.then((arg0) => {
          const textDecoder = new TextDecoder(arg2);
          return textDecoder.decode(arg0);
        });
      }
      return nextPromise;
    }
  }
  let rejectResult = dataView;
  if (undefined !== compressionMethod) {
    const _HermesInternal = HermesInternal;
    rejectResult = Promise.reject("Unknown compression method " + compressionMethod + ".");
  }
  return rejectResult;
};
