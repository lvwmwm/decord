// Module ID: 14260
// Function ID: 107794
// Name: PLAYER_FUNCTIONS
// Dependencies: []
// Exports: MAIN_SCRIPT

// Module 14260 (PLAYER_FUNCTIONS)
const _module = require(dependencyMap[0]);
const _moduleResult = _module(require(dependencyMap[1]));
let obj = {
  "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000012180261242508515,
  "Null": 0.6,
  "Null": 0.00000000000000000000000000000000000000000000000000000000000004667253315769354,
  "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008540463440542289,
  "Null": -72460078556573560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
  "Null": 0.000000000000000000000000000000000000000000000000000000000000046651769462376264,
  "Null": 0.0000000000000000000000000000000000000000224691189946063,
  "Null": 0.00000000000000000000000000000000000000000000000000000000000004667261458395371,
  "Null": 0.00000000000000000000000000000000000000000000000000000000000004133626447312819,
  "Null": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010803444835033108,
  "Null": 0.00000000000000000000000000000000000000000000000000000000000004667261458271609,
  setVolume(arg0) {
    return "player.setVolume(" + arg0 + "); true;";
  },
  seekToScript(arg0, arg1) {
    return "player.seekTo(" + arg0 + ", " + arg1 + "); true;";
  },
  setPlaybackRate(arg0) {
    return "player.setPlaybackRate(" + arg0 + "); true;";
  },
  loadPlaylist(playList, arg1, arg2) {
    let num = arg1;
    if (!arg1) {
      num = 0;
    }
    let str = "cuePlaylist";
    if (arg2) {
      str = "loadPlaylist";
    }
    let str2 = "undefined";
    let str3 = "undefined";
    if ("string" === typeof playList) {
      str3 = `${"\"" + playList}"`;
    }
    let str5 = str2;
    if ("string" === typeof playList) {
      str5 = "\"undefined\"";
    }
    if (Array.isArray(playList)) {
      str2 = `${"\"" + playList.join(",")}"`;
    }
    return "player." + str + "({listType: " + str5 + ", list: " + str3 + ", playlist: " + str2 + ", index: " + num + "}); true;";
  },
  loadVideoById(videoId, arg1) {
    let str = "cueVideoById";
    if (arg1) {
      str = "loadVideoById";
    }
    return "player." + str + "({videoId: " + JSON.stringify(videoId) + "}); true;";
  }
};
obj = {};
_moduleResult.default(obj, require(dependencyMap[2]).PLAY_MODE, obj.playVideo);
_moduleResult.default(obj, require(dependencyMap[2]).PAUSE_MODE, obj.pauseVideo);
const obj1 = {};
_moduleResult.default(obj1, require(dependencyMap[2]).MUTE_MODE, obj.muteVideo);
_moduleResult.default(obj1, require(dependencyMap[2]).UNMUTE_MODE, obj.unMuteVideo);

export const PLAYER_FUNCTIONS = obj;
export const playMode = obj;
export const soundMode = obj1;
export const MAIN_SCRIPT = function MAIN_SCRIPT(current, current2, current3, allowWebViewZoom, arg4) {
  let cc_lang_pref;
  let color;
  let controls;
  let end;
  let iv_load_policy;
  let loop;
  let playerLang;
  let start;
  let str = current;
  ({ end, color, start, playerLang, loop } = current3);
  let tmp = undefined !== loop;
  if (tmp) {
    tmp = loop;
  }
  ({ cc_lang_pref, iv_load_policy, controls } = current3);
  let tmp2 = undefined === controls;
  if (!tmp2) {
    tmp2 = controls;
  }
  const preventFullScreen = current3.preventFullScreen;
  let num = 0;
  if (current3.rel) {
    num = 1;
  }
  let num2 = 0;
  if (tmp) {
    num2 = 1;
  }
  if (!str) {
    str = "";
  }
  let num3 = 0;
  if (tmp2) {
    num3 = 1;
  }
  if (!cc_lang_pref) {
    cc_lang_pref = "";
  }
  let num4 = 0;
  if (current3.modestbranding) {
    num4 = 1;
  }
  let num5 = 1;
  let num6 = 1;
  if (undefined !== preventFullScreen) {
    num6 = num5;
    if (preventFullScreen) {
      num6 = 0;
    }
  }
  let num7 = 0;
  if (current3.showClosedCaptions) {
    num7 = num5;
  }
  if ("number" === typeof arg4) {
    num5 = arg4;
  }
  let tmp4;
  if ("string" === typeof current2) {
    tmp4 = current2;
  }
  let str2;
  if ("string" === typeof current2) {
    str2 = "playlist";
  }
  const text = `initial-scale=${num5}`;
  let text1 = text;
  if (!allowWebViewZoom) {
    text1 = `initial-scale=${num5}${", maximum-scale=" + num5}`;
  }
  let obj = { end, list: tmp4, start, color, rel_s: num, loop_s: num2, listType: str2 };
  let joined;
  if (Array.isArray(current2)) {
    joined = current2.join(",");
  }
  obj.playlist = joined;
  obj.videoId_s = str;
  obj.controls_s = num3;
  obj.playerLang = playerLang;
  obj.iv_load_policy = iv_load_policy;
  obj.contentScale_s = num5;
  obj.cc_lang_pref_s = cc_lang_pref;
  obj.allowWebViewZoom = allowWebViewZoom;
  obj.modestbranding_s = num4;
  obj.preventFullScreen_s = num6;
  obj.showClosedCaptions_s = num7;
  obj = {};
  let str5 = "";
  let str6 = "";
  const text2 = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta
        name="viewport"
        content="width=device-width, ${tmp6}"
      >
      <style>
        body {
          margin: 0;
        }
        .container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
        }
        .video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="video" id="player" />
      </div>

      <script>
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            width: '1000',
            height: '1000',
            videoId: '${str}`;
  if (tmp4) {
    str6 = `${"list: '" + tmp4}',`;
  }
  let text3 = str5;
  if (str2) {
    text3 = `${"listType: '" + tmp4}',`;
  }
  if (current2) {
    str5 = `${"playlist: '" + current2}',`;
  }
  obj.htmlString = `${tmp8}',
            playerVars: {
              ${str6}
              ${tmp9}
              ${str5}

              end: ${end},
              rel: ${num},
              playsinline: 1,
              loop: ${num2},
              color: ${color},
              start: ${start},
              hl: ${playerLang},
              controls: ${num3},
              fs: ${num6},
              cc_lang_pref: '${cc_lang_pref}',
              iv_load_policy: ${iv_load_policy},
              modestbranding: ${num4},
              cc_load_policy: ${num7},
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange,
              'onError': onPlayerError,
              'onPlaybackQualityChange': onPlaybackQualityChange,
              'onPlaybackRateChange': onPlaybackRateChange,
            }
          });
        }

        function onPlayerError(event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerError', data: event.data}))
        }

        function onPlaybackRateChange(event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playbackRateChange', data: event.data}))
        }

        function onPlaybackQualityChange(event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerQualityChange', data: event.data}))
        }

        function onPlayerReady(event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerReady'}))
        }

        var done = false;
        function onPlayerStateChange(event) {
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'playerStateChange', data: event.data}))
        }

        var isFullScreen = false;
        function onFullScreenChange() {
          isFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
          window.ReactNativeWebView.postMessage(JSON.stringify({eventType: 'fullScreenChange', data: Boolean(isFullScreen)}));
        }

        document.addEventListener('fullscreenchange', onFullScreenChange)
        document.addEventListener('mozfullscreenchange', onFullScreenChange)
        document.addEventListener('msfullscreenchange', onFullScreenChange)
        document.addEventListener('webkitfullscreenchange', onFullScreenChange)
      </script>
    </body>
  </html>
  `;
  obj.urlEncodedJSON = encodeURI(JSON.stringify(obj));
  return obj;
};
