// Module ID: 9429
// Function ID: 9430
// Dependencies: [9427, 9417]
// Exports: getFeed

// Module 9429
import testElement from "testElement" /* 9427 */;

let tmp;
const _mod9417 = tmp(9417);
function isValidFeed(arg0) {
  return "rss" === arg0 || "feed" === arg0 || "rdf:RDF" === arg0;
}
let closure_2 = ["url", "type", "lang"];
let closure_3 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

export function getFeed(children) {
  let elements;
  let elements1;
  let str2;
  const f94721 = (attribs) => {
    let num;
    let num2;
    attribs = attribs.attribs;
    const obj = { medium: attribs.medium, isDefault: attribs.isDefault };
    for (let num = 0; num < length.length; num = num + 1) {
      let tmp = arr[num];
      if (attribs[tmp]) {
        obj[tmp] = attribs[tmp];
      }
    }
    for (let num2 = 0; num2 < length2.length; num2 = num2 + 1) {
      let tmp3 = arr2[num2];
      if (attribs[tmp3]) {
        let _parseInt = parseInt;
        obj[tmp3] = parseInt(attribs[tmp3], 10);
      }
    }
    if (attribs.expression) {
      obj.expression = attribs.expression;
    }
    return obj;
  };
  let tmp = require;
  let tmp2 = dependencyMap;
  let first = testElement.getElementsByTagName(isValidFeed, children, true, 1)[0];
  let tmp4 = null;
  if (first) {
    let tmp20;
    let str = "feed";
    if ("feed" === first.name) {
      children = first.children;
      const obj2 = {
        type: "atom",
        items: elements.map(function(children) {
              let elements;
              children = children.children;
              const obj = { media: elements.map(f94721) };
              elements = testElement.getElementsByTagName("media:content", children);
              const str = _mod9417.textContent(testElement.getElementsByTagName("id", children, false, 1));
              const trimmed = str.trim();
              if (trimmed) {
                obj.id = trimmed;
              }
              const str2 = _mod9417.textContent(testElement.getElementsByTagName("title", children, false, 1));
              const trimmed1 = str2.trim();
              if (trimmed1) {
                obj.title = trimmed1;
              }
              const first = tmp(tmp2[0]).getElementsByTagName("link", children, true, 1)[0];
              let href;
              if (null !== first) {
                if (undefined !== first) {
                  href = first.attribs.href;
                }
              }
              if (href) {
                obj.link = href;
              }
              const str3 = _mod9417.textContent(testElement.getElementsByTagName("summary", children, false, 1));
              let trimmed2 = str3.trim();
              if (!trimmed2) {
                const str5 = _mod9417.textContent(testElement.getElementsByTagName("content", children, false, 1));
                trimmed2 = str5.trim();
              }
              if (trimmed2) {
                obj.description = trimmed2;
              }
              const str6 = _mod9417.textContent(testElement.getElementsByTagName("updated", children, false, 1));
              const trimmed3 = str6.trim();
              if (trimmed3) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                obj.pubDate = new Date(trimmed3);
                const date = new Date(trimmed3);
              }
              return obj;
            })
      };
      elements = testElement.getElementsByTagName("entry", children);
      const str16 = _mod9417.textContent(testElement.getElementsByTagName("id", children, false, 1));
      let trimmed = str16.trim();
      if (trimmed) {
        obj2.id = trimmed;
      }
      const str18 = _mod9417.textContent(testElement.getElementsByTagName("title", children, false, 1));
      let trimmed1 = str18.trim();
      if (trimmed1) {
        obj2.title = trimmed1;
      }
      const first1 = testElement.getElementsByTagName("link", children, true, 1)[0];
      let href;
      if (null !== first1) {
        if (undefined !== first1) {
          href = first1.attribs.href;
        }
      }
      if (href) {
        obj2.link = href;
      }
      const str21 = _mod9417.textContent(testElement.getElementsByTagName("subtitle", children, false, 1));
      let trimmed2 = str21.trim();
      if (trimmed2) {
        obj2.description = trimmed2;
      }
      const str23 = _mod9417.textContent(testElement.getElementsByTagName("updated", children, false, 1));
      let trimmed3 = str23.trim();
      if (trimmed3) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        let date = new Date(trimmed3);
        obj2.updated = date;
      }
      const str25 = _mod9417.textContent(testElement.getElementsByTagName("email", children, true, 1));
      let trimmed4 = str25.trim();
      tmp20 = obj2;
      if (trimmed4) {
        obj2.author = trimmed4;
        tmp20 = obj2;
      }
    } else {
      const first2 = testElement.getElementsByTagName("channel", first.children, true, 1)[0];
      let children1;
      if (null !== first2) {
        if (undefined !== first2) {
          children1 = first2.children;
        }
      }
      if (null === children1) {
        children1 = [];
      }
      let obj = {
        type: str2.substr(0, 3),
        id: "",
        items: elements1.map(function(children) {
              let elements;
              let length;
              let length2;
              children = children.children;
              let obj = { media: elements.map(f94721) };
              let tmp = require;
              let tmp2 = dependencyMap;
              elements = testElement.getElementsByTagName("media:content", children);
              const str = _mod9417.textContent(testElement.getElementsByTagName("guid", children, false, 1));
              const trimmed = str.trim();
              if (trimmed) {
                obj.id = trimmed;
              }
              const str2 = tmp(tmp2[1]).textContent(tmp(tmp2[0]).getElementsByTagName("title", children, false, 1));
              const trimmed1 = str2.trim();
              if (trimmed1) {
                obj.title = trimmed1;
              }
              const str3 = tmp(tmp2[1]).textContent(tmp(tmp2[0]).getElementsByTagName("link", children, false, 1));
              const trimmed2 = str3.trim();
              if (trimmed2) {
                obj.link = trimmed2;
              }
              const str4 = tmp(tmp2[1]).textContent(tmp(tmp2[0]).getElementsByTagName("description", children, false, 1));
              const trimmed3 = str4.trim();
              if (trimmed3) {
                obj.description = trimmed3;
              }
              const str5 = tmp(tmp2[1]).textContent(tmp(tmp2[0]).getElementsByTagName("pubDate", children, false, 1));
              let trimmed4 = str5.trim();
              if (!trimmed4) {
                const num = 1;
                const str7 = tmp(tmp2[1]).textContent(tmp(tmp2[0]).getElementsByTagName("dc:date", children, false, 1));
                trimmed4 = str7.trim();
              }
              if (trimmed4) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                obj.pubDate = new Date(trimmed4);
                const date = new Date(trimmed4);
              }
              return obj;
            })
      };
      str2 = first.name;
      let num = 3;
      const num2 = 0;
      let str3 = "item";
      elements1 = testElement.getElementsByTagName("item", first.children);
      let str4 = "title";
      let str5 = _mod9417.textContent(testElement.getElementsByTagName("title", children1, false, 1));
      const trimmed5 = str5.trim();
      if (trimmed5) {
        obj.title = trimmed5;
      }
      let str6 = "link";
      let str7 = _mod9417.textContent(testElement.getElementsByTagName("link", tmp7, false, 1));
      const trimmed6 = str7.trim();
      if (trimmed6) {
        obj.link = trimmed6;
      }
      const str9 = _mod9417.textContent(testElement.getElementsByTagName("description", children1, false, 1));
      const trimmed7 = str9.trim();
      if (trimmed7) {
        obj.description = trimmed7;
      }
      const str11 = _mod9417.textContent(testElement.getElementsByTagName("lastBuildDate", children1, false, 1));
      const trimmed8 = str11.trim();
      if (trimmed8) {
        let _Date = Date;
        let self = this;
        let self2 = this;
        obj.updated = new Date(trimmed8);
        const date1 = new Date(trimmed8);
      }
      const str13 = _mod9417.textContent(testElement.getElementsByTagName("managingEditor", children1, true, 1));
      const trimmed9 = str13.trim();
      tmp20 = obj;
      if (trimmed9) {
        obj.author = trimmed9;
        tmp20 = obj;
      }
    }
    tmp4 = tmp20;
  }
  return tmp4;
}
