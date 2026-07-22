// Module ID: 5137
// Function ID: 44565
// Name: parse
// Dependencies: []

// Module 5137 (parse)
exports.exports.parse = (arg0) => {
  let obj = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
  const match = obj.exec(arg0);
  if (match) {
    let arr = match.shift();
    let items = [];
    arr = null;
    if (match[2]) {
      const parts = match[2].split("-");
      arr = parts.shift();
      items = parts;
      const str = match[2];
    }
    let items1 = [];
    if (match[5]) {
      const parts1 = match[5].split("-");
      parts1.shift();
      items1 = parts1;
      const str3 = match[5];
    }
    const items2 = [];
    if (match[6]) {
      const parts2 = match[6].split("-");
      parts2.shift();
      let items3 = [];
      let tmp7;
      let tmp8 = items3;
      while (parts2.length) {
        let arr3 = parts2.shift();
        if (1 === arr3.length) {
          let tmp10 = arr3;
          let items4 = items3;
          if (tmp6) {
            obj = { singleton: tmp6, extension: items3 };
            let arr4 = items2.push(obj);
            items4 = [];
            tmp10 = arr3;
          }
        } else {
          let arr5 = items3.push(arr3);
          tmp10 = tmp6;
          items4 = items3;
        }
        let tmp6 = tmp10;
        items3 = items4;
        tmp7 = tmp10;
        tmp8 = items4;
      }
      obj = { singleton: tmp7, extension: tmp8 };
      items2.push(obj);
      const str5 = match[6];
    }
    let items5 = [];
    if (match[7]) {
      const parts3 = match[7].split("-");
      parts3.shift();
      parts3.shift();
      items5 = parts3;
      const str7 = match[7];
    }
    let items6 = [];
    if (match[8]) {
      const parts4 = match[8].split("-");
      parts4.shift();
      items6 = parts4;
      const str9 = match[8];
    }
    const obj1 = {};
    const obj2 = {};
    const obj3 = { language: arr, extlang: items };
    obj2.language = obj3;
    obj2.script = match[3] || null;
    obj2.region = match[4] || null;
    obj2.variant = items1;
    obj2.extension = items2;
    obj2.privateuse = items5;
    obj1.langtag = obj2;
    obj1.privateuse = items6;
    const obj4 = { irregular: match[0] || null, regular: match[1] || null };
    obj1.grandfathered = obj4;
    return obj1;
  } else {
    return null;
  }
};
