// Module ID: 102
// Function ID: 103
// Dependencies: []

// Module 102
let closure_0 = { "0.75": "ldpi", 1: "mdpi", "1.5": "hdpi", 2: "xhdpi", 3: "xxhdpi", 4: "xxxhdpi" };
const set = new Set(["gif", "heic", "heif", "jpeg", "jpg", "ktx", "png", "webp", "xml"]);
const obj = {
  getAndroidResourceFolderName(asset, scrollLength) {
    if (set.has(asset.type)) {
      let text;
      if (scrollLength.toString() in closure_0) {
        text = tmp2[scrollLength.toString(scrollLength)];
      } else {
        const _Number = Number;
        if (Number.isFinite(scrollLength)) {
          if (scrollLength > 0) {
            const _Math = Math;
            text = `${Math.round(160 * scrollLength)}dpi`;
          }
        }
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("no such scale " + scrollLength.toString());
        throw error;
      }
      if (text) {
        return "drawable-" + text;
      } else {
        const _Error2 = Error;
        const _JSON = JSON;
        const text1 = `Don't know which android drawable suffix to use for scale: ${scrollLength}`;
        const _JSON2 = JSON;
        const text2 = `${`Don't know which android drawable suffix to use for scale: ${scrollLength}`}
    Asset: ${JSON.stringify(asset, null, "\t")}`;
        const self3 = this;
        const self4 = this;
        const error1 = new Error(text2 + "\nPossible scales are:" + JSON.stringify(tmp2, null, "\t"));
        throw error1;
      }
    } else {
      return "raw";
    }
  },
  getAndroidResourceIdentifier(asset) {
    const httpServerLocation = asset.httpServerLocation;
    let substr = httpServerLocation;
    if (httpServerLocation.startsWith("/")) {
      substr = httpServerLocation.slice(1);
    }
    const str = `${tmp}/${asset.name}`;
    const str2 = str.toLowerCase();
    const str3 = str2.replace(/\//g, "_");
    const str4 = str3.replace(/([^a-z0-9_])/g, "");
    return str4.replace(/^(?:assets|assetsunstable_path)_/, "");
  },
  getBasePath(asset) {
    const httpServerLocation = asset.httpServerLocation;
    let substr = httpServerLocation;
    if (httpServerLocation.startsWith("/")) {
      substr = httpServerLocation.slice(1);
    }
    return substr;
  }
};

export default obj;
