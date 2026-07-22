// Module ID: 15712
// Function ID: 120079
// Dependencies: []

// Module 15712
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const Image = arg1(dependencyMap[2]).Image;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = arg1(dependencyMap[4]).createStyles((aspectRatio) => {
  const activityImage = { width: "100%", aspectRatio };
  return { previewImage: { color: "title", fontFamily: "__closure", fontSize: "_desired" }, activityImage };
});
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = callback2(aspectRatio.aspectRatio);
  const tmp2 = callback(importAllResult.useState(false), 2);
  const importDefault = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          let obj = { style: tmp.previewImage };
          obj = {
            onError() {
                      return callback(true);
                    }
          };
          const obj1 = { uri: imageBackground.url };
          obj.source = obj1;
          obj.style = tmp.activityImage;
          obj.accessibilityRole = "image";
          let str2 = "";
          if (null != accessibilityLabel) {
            str2 = accessibilityLabel;
          }
          obj.accessibilityLabel = str2;
          obj.children = <Image {...obj} />;
          let tmp9Result = tmp9(importDefault(dependencyMap[5]), obj);
          const tmp12 = importDefault(dependencyMap[5]);
          const tmp13 = Image;
        }
      }
      obj = { style: tmp.previewImage };
      tmp9Result = jsx(importDefault(dependencyMap[5]), obj);
    }
    return tmp9Result;
  }
  const obj2 = { style: tmp.previewImage, children: jsx(importDefault(dependencyMap[6]), {}) };
  tmp9Result = jsx(importDefault(dependencyMap[5]), obj2);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;
