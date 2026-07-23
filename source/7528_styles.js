// Module ID: 7528
// Function ID: 60261
// Name: styles
// Dependencies: [27]

// Module 7528 (styles)
import get_ActivityIndicator from "get ActivityIndicator";

let num = 0;
const StyleSheet = get_ActivityIndicator.StyleSheet;
let obj = { stepNumber: { marginTop: 20, alignItems: "center", position: "absolute" }, sliderMainContainer: { zIndex: 1, width: "100%" }, defaultSlideriOS: { height: 40 }, defaultSlider: {} };
obj = { flex: 1, flexDirection: "row", justifyContent: "space-between", top: null, zIndex: 2 };
if ("ios" === get_ActivityIndicator.Platform.OS) {
  num = 10;
}
obj.top = num;
obj.stepsIndicator = obj;
obj.trackMarkContainer = { alignItems: "center", alignContent: "center", alignSelf: "center", justifyContent: "center", position: "absolute", zIndex: 3 };
obj.thumbImageContainer = { position: "absolute", zIndex: 3, justifyContent: "center", alignItems: "center", alignContent: "center" };
obj.thumbImage = { alignContent: "center", alignItems: "center", position: "absolute" };
obj.stepIndicatorElement = { alignItems: "center", alignContent: "center" };
obj.defaultIndicatorMarked = { height: 20, width: 5, backgroundColor: "#CCCCCC" };
obj.defaultIndicatorIdle = { height: 10, width: 2, backgroundColor: "#C0C0C0" };

export const styles = StyleSheet.create(obj);
