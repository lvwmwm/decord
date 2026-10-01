// Module ID: 11248
// Function ID: 11249
// Name: UserActivitySpotify
// Dependencies: [19, 17, 7788, 21, 1363, 1271, 4525, 11249, 5281, 7598, 1115, 1177, 2]
// Exports: SpotifyPlayButton, attributeInstall, canOpenSpotifyUrl, openAlbum, openArtist, openTrack, openUrl

// Module 11248 (UserActivitySpotify)
import native from "native" /* 1177 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import react_nativeAll from "react-native" /* 1363 */;
import LinkingDefault from "Linking" /* 4525 */;
import AssetRegistryDefault from "AssetRegistry" /* 7598 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SpotifyConstants from "SpotifyConstants" /* 7788 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f93178 = () => {

};
const f93180 = () => {

};
const f93182 = () => {

};
const f93183 = (result) => {
  let closure_0 = result;
  let obj = closure_2_0(closure_2_3[7]);
  const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_1_0, closure_1_1);
  return spotifyMetadataFromActivity.then((album_id) => {
    let catchPromise;
    album_id = album_id.album_id;
    const ALBUM = constants.ALBUM;
    if (closure_0) {
      const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
      catchPromise = openURLResult.catch(f93178);
    } else {
      const obj = closure_2_1(closure_2_3[6]);
      catchPromise = obj.openURL(closure_2_7.WEB_OPEN(ALBUM, album_id, "mobile"));
    }
    return catchPromise;
  });
};
const f93184 = () => {

};
({ Linking: closure_4, View: hasOwnProperty } = react_native);
({ SPOTIFY_APP_PROTOCOL: metroRequire, SpotifyEndpoints: metroImportDefault, SpotifyResourceTypes: metroImportAll } = SpotifyConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PureComponent = react.PureComponent;
class SpotifyTrack extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyTrack = function handleOpenSpotifyTrack() {
      const sync_id = require.props.activity.sync_id;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let catchPromise;
        const TRACK = constants.TRACK;
        const tmp2 = result;
        if (tmp2) {
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
          catchPromise = openURLResult.catch(f93178);
        } else {
          const obj = closure_2_1(closure_2_3[6]);
          catchPromise = obj.openURL(closure_2_7.WEB_OPEN(TRACK, tmp, "mobile"));
        }
        return catchPromise;
      });
      let catchPromise = nextPromise.catch(f93180);
    };
    return applyArgumentsResult;
  }
  render() {
    const self = this;
    const props = this.props;
    const onPress = props.onPress;
    const obj = {
      onPress() {
        if (onPress != null) {
          tmp();
        }
        const result = self.handleOpenSpotifyTrack();
      },
      suppressHighlighting: true,
      children: props.text
    };
    return React4(native.LegacyText, obj);
  }
}
const prototype = SpotifyTrack.prototype;
const PureComponent2 = react.PureComponent;
class SpotifyArtists extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyArtist = function handleOpenSpotifyArtist(arg0) {
      let closure_129_0;
      let closure_129_1;
      ({ activity: closure_129_0, userId: closure_129_1 } = require.props);
      let closure_2 = arg0;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let closure_0 = result;
        let obj = closure_1_0(closure_1_3[7]);
        const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_0, closure_1);
        return spotifyMetadataFromActivity.then((result) => {
          let catchPromise;
          const ARTIST = constants.ARTIST;
          if (closure_0) {
            const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, result.artist_ids[closure_2], true, "mobile"));
            catchPromise = openURLResult.catch(f93178);
          } else {
            const obj = closure_3_1(closure_3_3[6]);
            catchPromise = obj.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
          }
          return catchPromise;
        });
      });
      let catchPromise = nextPromise.catch(f93182);
    };
    return applyArgumentsResult;
  }
  renderLink(children, index, arg2) {
    const self = this;
    let closure_1 = index;
    const onPress = this.props.onPress;
    const tmp = authStore;
    const LegacyText = native.LegacyText;
    children = [, ];
    const obj = {
      onPress() {
        if (onPress != null) {
          tmp();
        }
        const result = self.handleOpenSpotifyArtist(closure_1);
      },
      suppressHighlighting: true,
      children
    };
    children[0] = React4(native.LegacyText, obj);
    let str = ", ";
    const tmp2 = arg2;
    if (tmp2) {
      str = "";
    }
    children[1] = str;
    return tmp(LegacyText, { children }, index);
  }
  render() {
    const self = this;
    const str = this.props.artists;
    const parts = str.split("; ");
    let closure_0 = parts.length - 1;
    const obj = { children: parts.map((item, index) => self.renderLink(item, index, index === closure_0)) };
    const LegacyText = native.LegacyText;
    return React4(LegacyText, obj);
  }
}
const prototype2 = SpotifyArtists.prototype;
const PureComponent3 = react.PureComponent;
class SpotifyAlbum extends PureComponent3 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleOpenSpotifyAlbum = function handleOpenSpotifyAlbum() {
      let closure_129_0;
      let closure_129_1;
      ({ activity: closure_129_0, userId: closure_129_1 } = require.props);
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then(f93183);
      let catchPromise = nextPromise.catch(f93184);
    };
    return applyArgumentsResult;
  }
  render() {
    const obj = { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text };
    return React4(native.LegacyText, obj);
  }
}
const prototype3 = SpotifyAlbum.prototype;
let result = size.fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export const canOpenSpotifyUrl = function canOpenSpotifyUrl() {
  return React3.canOpenURL("" + metroRequire + ":");
};
export const attributeInstall = function attributeInstall() {
  const obj = react_nativeAll;
  const Identifier = obj.getConstants().Identifier;
  const HTTP = HTTPUtils.HTTP;
  const obj2 = { url: metroImportDefault.INSTALL_ATTRIBUTION(Identifier), rejectWithError: true };
  const value = HTTP.get(obj2);
};
export const openUrl = function openUrl(arg0, ALBUM, album_id) {
  let catchPromise;
  const tmp = arg0;
  if (tmp) {
    const openURLResult = React3.openURL(metroImportDefault.PLAYER_OPEN(ALBUM, album_id, true, "mobile"));
    catchPromise = openURLResult.catch(f93178);
  } else {
    const obj = LinkingDefault;
    catchPromise = obj.openURL(metroImportDefault.WEB_OPEN(ALBUM, album_id, "mobile"));
  }
  return catchPromise;
};
export const openTrack = function openTrack(findActivityResult) {
  const sync_id = findActivityResult.sync_id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then((result) => {
    let catchPromise;
    const TRACK = constants.TRACK;
    const tmp2 = result;
    if (tmp2) {
      const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
      catchPromise = openURLResult.catch(f93178);
    } else {
      const obj = closure_2_1(closure_2_3[6]);
      catchPromise = obj.openURL(closure_2_7.WEB_OPEN(TRACK, tmp, "mobile"));
    }
    return catchPromise;
  });
  nextPromise.catch(f93180);
};
export const openArtist = function openArtist(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then((result) => {
    let closure_0 = result;
    let obj = closure_1_0(closure_1_3[7]);
    const spotifyMetadataFromActivity = obj.getSpotifyMetadataFromActivity(closure_0, closure_1);
    return spotifyMetadataFromActivity.then((result) => {
      let catchPromise;
      const ARTIST = constants.ARTIST;
      if (closure_0) {
        const openURLResult = closure_3_4.openURL(closure_3_7.PLAYER_OPEN(ARTIST, result.artist_ids[closure_2], true, "mobile"));
        catchPromise = openURLResult.catch(f93178);
      } else {
        const obj = closure_3_1(closure_3_3[6]);
        catchPromise = obj.openURL(closure_3_7.WEB_OPEN(ARTIST, tmp, "mobile"));
      }
      return catchPromise;
    });
  });
  nextPromise.catch(f93182);
};
export const openAlbum = function openAlbum(activity, id) {
  let closure_0 = activity;
  let closure_1 = id;
  const canOpenURLResult = closure_4.canOpenURL("" + closure_6 + ":");
  const nextPromise = canOpenURLResult.then(f93183);
  nextPromise.catch(f93184);
};
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  let Button;
  let Icon;
  let intl;
  let obj2;
  let obj3;
  let obj4;
  activity = activity.activity;
  let obj = { style: activity.style, children: closure_9(Button, obj2) };
  obj2 = {
    icon: closure_9(Icon, obj3),
    text: intl.formatToPlainString(activity(1115).t.LEgD7t, obj4),
    size: "sm",
    onPress() {
      const sync_id = activity.sync_id;
      const canOpenURLResult = React3.canOpenURL("" + metroRequire + ":");
      const nextPromise = canOpenURLResult.then((result) => {
        let catchPromise;
        const tmp = result;
        if (tmp) {
          const openURLResult = closure_2_4.openURL(closure_2_7.PLAYER_OPEN(constants.TRACK, sync_id));
          catchPromise = openURLResult.catch(() => {

          });
        } else {
          const obj = closure_2_2(closure_2_3[4]);
          const Identifier = obj.getConstants().Identifier;
          const HTTP = activity(closure_2_3[5]).HTTP;
          const get = HTTP.get;
          const obj2 = { url: closure_2_7.INSTALL_ATTRIBUTION(Identifier), rejectWithError: true };
          const value = get(obj2);
          const obj3 = closure_2_1(closure_2_3[6]);
          catchPromise = obj3.openURL(closure_2_7.APP_STORE);
        }
        return catchPromise;
      });
      let catchPromise = nextPromise.catch(() => {

      });
    },
    grow: true
  };
  Button = activity(5281).Button;
  obj3 = { source: AssetRegistryDefault };
  Icon = activity(5281).Button.Icon;
  intl = activity(1115).intl;
  obj4 = { platform: activity.name };
  return closure_9(closure_5, obj);
};
export { SpotifyTrack };
export { SpotifyArtists };
export { SpotifyAlbum };
