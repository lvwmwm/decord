// Module ID: 14869
// Function ID: 111997
// Name: GuildThemePreviewOverlay
// Dependencies: []
// Exports: default

// Module 14869 (GuildThemePreviewOverlay)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_themes/native/GuildThemePreviewOverlay.tsx");

export default function GuildThemePreviewOverlay(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  obj["preserveAspectRatio"] = "none";
  obj["width"] = "100%";
  obj["height"] = "100%";
  obj["viewBox"] = "0 0 259.862 154.514";
  obj["fill"] = "none";
  obj = {};
  const items = [callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), , , , , , , , , , , , , ];
  obj = { opacity: "0.2" };
  const items1 = [callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "M56.1027 131.209H25.3914C24.4127 131.209 23.6196 132.011 23.6196 133C23.6196 133.989 24.4127 134.791 25.3914 134.791H56.1027C57.0811 134.791 57.8745 133.989 57.8745 133C57.8745 132.011 57.0811 131.209 56.1027 131.209Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "M44.2905 137.918H25.3914C24.4127 137.918 23.6196 138.72 23.6196 139.709C23.6196 140.698 24.4127 141.5 25.3914 141.5H44.2905C45.2693 141.5 46.0624 140.698 46.0624 139.709C46.0624 138.72 45.2693 137.918 44.2905 137.918Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "M235.061 124.413H98.041C94.779 124.413 92.1349 127.086 92.1349 130.383V142.324C92.1349 145.622 94.779 148.295 98.041 148.295H235.061C238.322 148.295 240.966 145.622 240.966 142.324V130.383C240.966 127.086 238.322 124.413 235.061 124.413Z", "Bool(false)": "white" }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "0.08", "Bool(false)": 120 }), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "<string:1677721443>", "Bool(false)": "<string:488225>" }), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {})];
  obj.children = items1;
  items[2] = callback2(arg1(dependencyMap[2]).G, obj);
  items[3] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: null, Symbol: 1, hash: null });
  items[4] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: "xxs", Symbol: "redesign-channel-name-muted-text", hash: "absolute" });
  items[5] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: true, Symbol: true, hash: true });
  items[6] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: "ars", Symbol: "<string:658592000>", hash: "<string:18901569>", accessibilityRole: "<string:2378519040>" });
  items[7] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: "<string:2355167783>", Symbol: "end of input", hash: "row" });
  items[8] = callback(arg1(dependencyMap[2]).Path, { accessibilityRole: null, Symbol: "flex-start", hash: "center" });
  items[9] = callback(arg1(dependencyMap[2]).Path, {});
  const obj1 = { opacity: "0.2" };
  const items2 = [callback(arg1(dependencyMap[2]).Path, { flexDirection: 21.599999999999998, alignItems: 21.599999999999998, overflow: null, gap: null }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": 327094484787336030000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 131125.82629614513 }), callback(arg1(dependencyMap[2]).Path, { flexDirection: "sm", alignItems: "text-brand", overflow: "2026-02-mobile-account-linking", gap: "user" }), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "VOICE_CATEGORY_COLLAPSE", "Bool(false)": null }), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, { flexDirection: true, alignItems: true, overflow: true, gap: true })];
  obj1.children = items2;
  items[10] = callback2(arg1(dependencyMap[2]).G, obj1);
  items[11] = callback(arg1(dependencyMap[2]).Path, {});
  items[12] = callback(arg1(dependencyMap[2]).Path, {});
  const obj2 = { opacity: "0.3" };
  const items3 = [callback(arg1(dependencyMap[2]).Path, {}), callback(arg1(dependencyMap[2]).Path, { "Bool(false)": "text-xs/bold", "Bool(false)": "mobile-text-heading-primary" })];
  obj2.children = items3;
  items[13] = callback2(arg1(dependencyMap[2]).G, obj2);
  const obj3 = { opacity: "0.5", children: callback(arg1(dependencyMap[2]).Path, {}) };
  items[14] = callback(arg1(dependencyMap[2]).G, obj3);
  obj.children = items;
  obj["children"] = callback2(arg1(dependencyMap[2]).G, obj);
  return callback(importDefault(dependencyMap[2]), obj);
};
