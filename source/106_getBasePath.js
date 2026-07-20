// Module ID: 106
// Function ID: 1595
// Name: getBasePath
// Dependencies: []

// Module 106 (getBasePath)
function getBasePath(httpServerLocation) {
  httpServerLocation = httpServerLocation.httpServerLocation;
  let substr = httpServerLocation;
  if (httpServerLocation.startsWith("/")) {
    substr = httpServerLocation.slice(1);
  }
  return substr;
}
let closure_0 = {};
const set = new Set(["cardTitle", "outerRing", "SelectOptionType", "onWillFocus", "parseSemver", "isChannelOpen", "floatingIconWrapper"]);

export default {
  getAndroidResourceFolderName(asset, arg1) {
    if (set.has(asset.type)) {
      if (arg1.toString() in closure_0) {
        let text = closure_0[arg1.toString(arg1)];
      } else {
        const _Number = Number;
        if (Number.isFinite(arg1)) {
          if (arg1 > 0) {
            const _Math = Math;
            text = `${Math.round(160 * arg1)}dpi`;
          }
        }
        const _Error = Error;
        const error = new Error("no such scale " + arg1.toString());
        throw error;
      }
      if (text) {
        return "drawable-" + text;
      } else {
        const _Error2 = Error;
        const _JSON = JSON;
        const text1 = `Don't know which android drawable suffix to use for scale: ${arg1}`;
        const _JSON2 = JSON;
        const text2 = `${`Don't know which android drawable suffix to use for scale: ${arg1}`}
    Asset: ${JSON.stringify(asset, null, "\t")}`;
        const error1 = new Error(text2 + "\nPossible scales are:" + JSON.stringify(closure_0, null, "\t"));
        throw error1;
      }
    } else {
      return "raw";
    }
  },
  getAndroidResourceIdentifier(asset) {
    const str = `${closure_2(asset)}/${asset.name}`;
    const str2 = `${closure_2(asset)}/${asset.name}`.toLowerCase();
    const str3 = `${closure_2(asset)}/${asset.name}`.toLowerCase().replace(/\//g, "_");
    return `${closure_2(asset)}/${asset.name}`.toLowerCase().replace(/\//g, "_").replace(/([^a-z0-9_])/g, "").replace(/^(?:assets|assetsunstable_path)_/, "");
  },
  getBasePath
};
