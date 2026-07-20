// Module ID: 4783
// Function ID: 41553
// Name: toCompany
// Dependencies: []

// Module 4783 (toCompany)
function toCompany(str) {
  const formatted = str.toLowerCase();
  if ("appl" === formatted) {
    return "Apple";
  } else if ("adbe" === formatted) {
    return "Adobe";
  } else if ("msft" === formatted) {
    return "Microsoft";
  } else if ("sunw" === formatted) {
    return "Sun Microsystems";
  } else if ("sgi" === formatted) {
    return "Silicon Graphics";
  } else if ("tgnt" === formatted) {
    return "Taligent";
  } else {
    return str;
  }
}
let obj = {
  name: "Preferred CMM type",
  value(dataView, sum) {
    return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
  },
  description(arg0) {
    let str = "";
    if (null !== arg0) {
      str = toCompany(arg0);
    }
    return str;
  }
};
obj = {
  name: "Profile Version",
  value(getUint8, offset) {
    const str = getUint8.getUint8(offset);
    const text = `${str.toString(10)}.`;
    const str2 = getUint8.getUint8(offset + 1) >> 4;
    const text1 = `${str.toString(10)}.${str2.toString(10)}`;
    return `${str.toString(10)}.${str2.toString(10)}` + "." + getUint8.getUint8(offset + 1) % 16.toString(10);
  }
};
obj = {
  name: "Profile/Device class",
  value(dataView, sum) {
    return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
  },
  description(str) {
    const formatted = str.toLowerCase();
    if ("scnr" === formatted) {
      return "Input Device profile";
    } else if ("mntr" === formatted) {
      return "Display Device profile";
    } else if ("prtr" === formatted) {
      return "Output Device profile";
    } else if ("link" === formatted) {
      return "DeviceLink profile";
    } else if ("abst" === formatted) {
      return "Abstract profile";
    } else if ("spac" === formatted) {
      return "ColorSpace profile";
    } else if ("nmcl" === formatted) {
      return "NamedColor profile";
    } else if ("cenc" === formatted) {
      return "ColorEncodingSpace profile";
    } else if ("mid " === formatted) {
      return "MultiplexIdentification profile";
    } else if ("mlnk" === formatted) {
      return "MultiplexLink profile";
    } else if ("mvis" === formatted) {
      return "MultiplexVisualization profile";
    } else {
      return str;
    }
  }
};
arg5.iccTags = { desc: { name: "ICC Description" }, cprt: { name: "ICC Copyright" }, dmdd: { name: "ICC Device Model Description" }, vued: { name: "ICC Viewing Conditions Description" }, dmnd: { name: "ICC Device Manufacturer for Display" }, tech: { name: "Technology" } };
arg5.iccProfile = {
  [4]: obj,
  [8]: obj,
  [12]: obj,
  [16]: {
    name: "Color Space",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    }
  },
  [20]: {
    name: "Connection Space",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    }
  },
  [24]: {
    name: "ICC Profile Date",
    value(getUint16, sum1) {
      const uint16 = getUint16.getUint16(sum1);
      const diff = getUint16.getUint16(sum1 + 2) - 1;
      const uint161 = getUint16.getUint16(sum1 + 4);
      const uint162 = getUint16.getUint16(sum1 + 6);
      const uint163 = getUint16.getUint16(sum1 + 8);
      return new Date(Date.UTC(uint16, diff, uint161, uint162, uint163, getUint16.getUint16(sum1 + 10))).toISOString();
    }
  },
  [36]: {
    name: "ICC Signature",
    value(buffer) {
      buffer = buffer.buffer;
      const uint8Array = new Uint8Array(buffer.slice(arg1, arg1 + 4));
      return fromCharCode.apply(null, uint8Array);
    }
  },
  [40]: {
    name: "Primary Platform",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    },
    description(arg0) {
      return toCompany(arg0);
    }
  },
  [48]: {
    name: "Device Manufacturer",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    },
    description(arg0) {
      return toCompany(arg0);
    }
  },
  [52]: {
    name: "Device Model Number",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    }
  },
  [64]: {
    name: "Rendering Intent",
    value(getUint32, sum) {
      return getUint32.getUint32(sum);
    },
    description(arg0) {
      if (0 === arg0) {
        return "Perceptual";
      } else if (1 === arg0) {
        return "Relative Colorimetric";
      } else if (2 === arg0) {
        return "Saturation";
      } else if (3 === arg0) {
        return "Absolute Colorimetric";
      } else {
        return arg0;
      }
    }
  },
  [80]: {
    name: "Profile Creator",
    value(dataView, sum) {
      return sum(arg6[0]).getStringFromDataView(dataView, sum, 4);
    }
  }
};
