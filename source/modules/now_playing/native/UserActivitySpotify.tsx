// Module ID: 10900
// Function ID: 84665
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 8311, 33, 1554, 507, 3827, 10901, 4543, 7823, 1212, 1273, 2]
// Exports: SpotifyPlayButton

// Module 10900 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import closure_5 from "spotifyUtmParams";
import getSystemLocale from "getSystemLocale";
import set from "set";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import spotifyUtmParams from "spotifyUtmParams";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return getSystemLocale(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function canOpenSpotifyUrl() {
  return closure_9.canOpenURL("" + closure_11 + ":");
}
function attributeInstall() {
  let obj = importAll(1554);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_12.INSTALL_ATTRIBUTION(obj.getConstants().Identifier), rejectWithError: true };
  const value = HTTP.get(obj);
}
function openUrl(arg0, TRACK, sync_id) {
  if (arg0) {
    let catchPromise = closure_9.openURL(closure_12.PLAYER_OPEN(TRACK, sync_id, true, "mobile")).catch(() => {

    });
    const openURLResult = closure_9.openURL(closure_12.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
  } else {
    catchPromise = importDefault(3827).openURL(closure_12.WEB_OPEN(TRACK, sync_id, "mobile"));
    const obj = importDefault(3827);
  }
  return catchPromise;
}
function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((arg0) => outer1_20(arg0, outer1_13.TRACK, sync_id)).catch(() => {

  });
}
function openArtist(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((closure_0) => {
    const callback = closure_0;
    const spotifyMetadataFromActivity = callback(outer1_3[12]).getSpotifyMetadataFromActivity(callback, closure_1);
    return spotifyMetadataFromActivity.then((arg0) => outer2_20(closure_0, outer2_13.ARTIST, arg0.artist_ids[outer1_2]));
  }).catch(() => {

  });
}
function openAlbum(activity, id) {
  let closure_0 = activity;
  let closure_1 = id;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((closure_0) => {
    const activity = closure_0;
    const spotifyMetadataFromActivity = activity(outer1_3[12]).getSpotifyMetadataFromActivity(activity, closure_1);
    return spotifyMetadataFromActivity.then((album_id) => outer2_20(closure_0, outer2_13.ALBUM, album_id.album_id));
  }).catch(() => {

  });
}
({ Linking: closure_9, View: closure_10 } = get_ActivityIndicator);
({ SPOTIFY_APP_PROTOCOL: closure_11, SpotifyEndpoints: closure_12, SpotifyResourceTypes: closure_13 } = spotifyUtmParams);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const tmp6 = ((PureComponent) => {
  class SpotifyTrack {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_4(this, SpotifyTrack);
      items1 = [...items];
      tmp2 = outer1_16(this, SpotifyTrack, items1);
      SpotifyTrack = tmp2;
      tmp2.handleOpenSpotifyTrack = () => {
        outer2_21(tmp2.props.activity);
      };
      return tmp2;
    }
  }
  callback3(SpotifyTrack, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        const self = this;
        const props = this.props;
        const onPress = props.onPress;
        return outer1_14(SpotifyTrack(outer1_3[16]).LegacyText, {
          onPress() {
            if (null != onPress) {
              onPress();
            }
            const result = self.handleOpenSpotifyTrack();
          },
          suppressHighlighting: true,
          children: props.text
        });
      }
    }
  ];
  return callback(SpotifyTrack, items);
})(importAllResult.PureComponent);
const tmp7 = ((PureComponent) => {
  class SpotifyArtists {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_4(this, SpotifyArtists);
      items1 = [...items];
      tmp2 = outer1_16(this, SpotifyArtists, items1);
      SpotifyArtists = tmp2;
      tmp2.handleOpenSpotifyArtist = (arg0) => {
        const props = tmp2.props;
        outer2_22(props.activity, props.userId, arg0);
      };
      return tmp2;
    }
  }
  callback3(SpotifyArtists, PureComponent);
  let obj = {
    key: "renderLink",
    value(children) {
      const self = this;
      let closure_1 = arg1;
      const onPress = this.props.onPress;
      let obj = {};
      obj = {
        onPress() {
          if (null != onPress) {
            onPress();
          }
          const result = self.handleOpenSpotifyArtist(closure_1);
        },
        suppressHighlighting: true,
        children
      };
      const items = [outer1_14(SpotifyArtists(outer1_3[16]).LegacyText, obj), ];
      let str = ", ";
      if (arg2) {
        str = "";
      }
      items[1] = str;
      obj.children = items;
      return outer1_15(SpotifyArtists(outer1_3[16]).LegacyText, obj, arg1);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      const self = this;
      const parts = this.props.artists.split("; ");
      let closure_1 = parts.length - 1;
      const obj = { children: parts.map((arg0, arg1) => self.renderLink(arg0, arg1, arg1 === closure_1)) };
      return outer1_14(SpotifyArtists(outer1_3[16]).LegacyText, obj);
    }
  };
  items[1] = obj;
  return callback(SpotifyArtists, items);
})(importAllResult.PureComponent);
const tmp8 = ((PureComponent) => {
  class SpotifyAlbum {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_4(this, SpotifyAlbum);
      items1 = [...items];
      tmp2 = outer1_16(this, SpotifyAlbum, items1);
      SpotifyAlbum = tmp2;
      tmp2.handleOpenSpotifyAlbum = () => {
        const props = tmp2.props;
        outer2_23(props.activity, props.userId);
      };
      return tmp2;
    }
  }
  callback3(SpotifyAlbum, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        return outer1_14(SpotifyAlbum(outer1_3[16]).LegacyText, { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text });
      }
    }
  ];
  return callback(SpotifyAlbum, items);
})(importAllResult.PureComponent);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export { canOpenSpotifyUrl };
export { attributeInstall };
export { openUrl };
export { openTrack };
export { openArtist };
export { openAlbum };
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  activity = activity.activity;
  let obj = { style: activity.style };
  obj = {};
  obj = { source: importDefault(7823) };
  obj.icon = callback4(activity(4543).Button.Icon, obj);
  const intl = activity(1212).intl;
  obj.text = intl.formatToPlainString(activity(1212).t.LEgD7t, { platform: activity.name });
  obj.size = "sm";
  obj.onPress = function onPress() {
    sync_id = sync_id.sync_id;
    const promise = outer1_18();
    outer1_18().then((arg0) => {
      if (arg0) {
        let catchPromise = outer2_9.openURL(outer2_12.PLAYER_OPEN(outer2_13.TRACK, sync_id)).catch(() => {

        });
        const openURLResult = outer2_9.openURL(outer2_12.PLAYER_OPEN(outer2_13.TRACK, sync_id));
      } else {
        outer2_19();
        catchPromise = outer2_1(outer2_3[11]).openURL(outer2_12.APP_STORE);
        const obj = outer2_1(outer2_3[11]);
      }
      return catchPromise;
    }).catch(() => {

    });
  };
  obj.grow = true;
  obj.children = callback4(activity(4543).Button, obj);
  return callback4(closure_10, obj);
};
export const SpotifyTrack = tmp6;
export const SpotifyArtists = tmp7;
export const SpotifyAlbum = tmp8;
