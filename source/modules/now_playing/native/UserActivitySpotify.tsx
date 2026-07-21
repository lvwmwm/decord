// Module ID: 10889
// Function ID: 84603
// Name: _callSuper
// Dependencies: []
// Exports: SpotifyPlayButton

// Module 10889 (_callSuper)
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
  return closure_6(arg0, constructResult);
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
  let obj = importAll(dependencyMap[9]);
  const HTTP = arg1(dependencyMap[10]).HTTP;
  obj = { url: closure_12.INSTALL_ATTRIBUTION(obj.getConstants().Identifier), rejectWithError: true };
  const value = HTTP.get(obj);
}
function openUrl(arg0, TRACK, sync_id) {
  if (arg0) {
    let catchPromise = closure_9.openURL(closure_12.PLAYER_OPEN(TRACK, sync_id, true, "mobile")).catch(() => {

    });
    const openURLResult = closure_9.openURL(closure_12.PLAYER_OPEN(TRACK, sync_id, true, "mobile"));
  } else {
    catchPromise = importDefault(dependencyMap[11]).openURL(closure_12.WEB_OPEN(TRACK, sync_id, "mobile"));
    const obj = importDefault(dependencyMap[11]);
  }
  return catchPromise;
}
function openTrack(findActivityResult) {
  const arg1 = findActivityResult.sync_id;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((arg0) => callback(arg0, constants.TRACK, sync_id)).catch(() => {

  });
}
function openArtist(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const importAll = arg2;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((arg0) => {
    const spotifyMetadataFromActivity = arg0(closure_3[12]).getSpotifyMetadataFromActivity(arg0, arg1);
    return spotifyMetadataFromActivity.then((arg0) => callback(arg0, constants.ARTIST, arg0.artist_ids[closure_2]));
  }).catch(() => {

  });
}
function openAlbum(activity, id) {
  id = activity;
  const importDefault = id;
  const promise = canOpenSpotifyUrl();
  canOpenSpotifyUrl().then((arg0) => {
    const spotifyMetadataFromActivity = arg0(closure_3[12]).getSpotifyMetadataFromActivity(arg0, arg1);
    return spotifyMetadataFromActivity.then((album_id) => callback(album_id, constants.ALBUM, album_id.album_id));
  }).catch(() => {

  });
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ Linking: closure_9, View: closure_10 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ SPOTIFY_APP_PROTOCOL: closure_11, SpotifyEndpoints: closure_12, SpotifyResourceTypes: closure_13 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
const tmp5 = arg1(dependencyMap[8]);
const tmp6 = (PureComponent) => {
  class SpotifyTrack {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_4(this, SpotifyTrack);
      items1 = [...items];
      tmp2 = closure_16(this, SpotifyTrack, items1);
      SpotifyTrack = tmp2;
      tmp2.handleOpenSpotifyTrack = () => {
        callback(tmp2.props.activity);
      };
      return tmp2;
    }
  }
  const arg1 = SpotifyTrack;
  callback3(SpotifyTrack, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const SpotifyTrack = this;
        const props = this.props;
        const onPress = props.onPress;
        return callback2(SpotifyTrack(closure_3[16]).LegacyText, {
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
}(importAllResult.PureComponent);
const tmp7 = (PureComponent) => {
  class SpotifyArtists {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_4(this, SpotifyArtists);
      items1 = [...items];
      tmp2 = closure_16(this, SpotifyArtists, items1);
      SpotifyArtists = tmp2;
      tmp2.handleOpenSpotifyArtist = (arg0) => {
        const props = tmp2.props;
        callback(props.activity, props.userId, arg0);
      };
      return tmp2;
    }
  }
  const arg1 = SpotifyArtists;
  callback3(SpotifyArtists, PureComponent);
  let obj = {
    key: "renderLink",
    value(children) {
      const SpotifyArtists = this;
      const onPress = this.props.onPress;
      let obj = {};
      obj = {
        onPress() {
          if (null != onPress) {
            onPress();
          }
          const result = self.handleOpenSpotifyArtist(arg1);
        },
        suppressHighlighting: true,
        children
      };
      const items = [callback2(SpotifyArtists(closure_3[16]).LegacyText, obj), ];
      let str = ", ";
      if (arg2) {
        str = "";
      }
      items[1] = str;
      obj.children = items;
      return closure_15(SpotifyArtists(closure_3[16]).LegacyText, obj, arg1);
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value() {
      const SpotifyArtists = this;
      const parts = this.props.artists.split("; ");
      let closure_1 = parts.length - 1;
      const obj = { children: parts.map((arg0, arg1) => self.renderLink(arg0, arg1, arg1 === closure_1)) };
      return callback2(SpotifyArtists(closure_3[16]).LegacyText, obj);
    }
  };
  items[1] = obj;
  return callback(SpotifyArtists, items);
}(importAllResult.PureComponent);
const tmp8 = (PureComponent) => {
  class SpotifyAlbum {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_4(this, SpotifyAlbum);
      items1 = [...items];
      tmp2 = closure_16(this, SpotifyAlbum, items1);
      SpotifyAlbum = tmp2;
      tmp2.handleOpenSpotifyAlbum = () => {
        const props = tmp2.props;
        callback(props.activity, props.userId);
      };
      return tmp2;
    }
  }
  const arg1 = SpotifyAlbum;
  callback3(SpotifyAlbum, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        return callback2(SpotifyAlbum(closure_3[16]).LegacyText, { onPress: this.handleOpenSpotifyAlbum, suppressHighlighting: true, children: this.props.text });
      }
    }
  ];
  return callback(SpotifyAlbum, items);
}(importAllResult.PureComponent);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/now_playing/native/UserActivitySpotify.tsx");

export { canOpenSpotifyUrl };
export { attributeInstall };
export { openUrl };
export { openTrack };
export { openArtist };
export { openAlbum };
export const SpotifyPlayButton = function SpotifyPlayButton(activity) {
  activity = activity.activity;
  const arg1 = activity;
  let obj = { style: activity.style };
  obj = {};
  obj = { source: importDefault(dependencyMap[14]) };
  obj.icon = callback4(arg1(dependencyMap[13]).Button.Icon, obj);
  const intl = arg1(dependencyMap[15]).intl;
  obj.text = intl.formatToPlainString(arg1(dependencyMap[15]).t.LEgD7t, { platform: activity.name });
  obj.size = "sm";
  obj.onPress = function onPress() {
    const activity = activity.sync_id;
    const promise = callback();
    callback().then((arg0) => {
      if (arg0) {
        let catchPromise = closure_9.openURL(closure_12.PLAYER_OPEN(constants.TRACK, sync_id)).catch(() => {

        });
        const openURLResult = closure_9.openURL(closure_12.PLAYER_OPEN(constants.TRACK, sync_id));
      } else {
        callback2();
        catchPromise = callback(closure_3[11]).openURL(closure_12.APP_STORE);
        const obj = callback(closure_3[11]);
      }
      return catchPromise;
    }).catch(() => {

    });
  };
  obj.grow = true;
  obj.children = callback4(arg1(dependencyMap[13]).Button, obj);
  return callback4(closure_10, obj);
};
export const SpotifyTrack = tmp6;
export const SpotifyArtists = tmp7;
export const SpotifyAlbum = tmp8;
