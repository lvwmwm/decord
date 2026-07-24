// Module ID: 14428
// Function ID: 110275
// Dependencies: []

// Module 14428
arg5.PLAY_MODE = undefined;
arg5.PAUSE_MODE = undefined;
arg5.MUTE_MODE = undefined;
arg5.UNMUTE_MODE = undefined;
arg5.PLAYER_STATES_NAMES = undefined;
arg5.PLAYER_STATES = undefined;
arg5.PLAYER_ERROR_NAMES = undefined;
arg5.PLAYER_ERROR = undefined;
arg5.CUSTOM_USER_AGENT = undefined;
arg5.DEFAULT_BASE_URL = undefined;
arg5.PLAY_MODE = true;
arg5.PAUSE_MODE = false;
arg5.MUTE_MODE = true;
arg5.UNMUTE_MODE = false;
let obj = { UNSTARTED: "unstarted", ENDED: "ended", PLAYING: "playing", PAUSED: "paused", BUFFERING: "buffering", VIDEO_CUED: "video cued" };
arg5.PLAYER_STATES_NAMES = obj;
arg5.PLAYER_STATES = { "-1": obj.UNSTARTED, [0]: obj.ENDED, [1]: obj.PLAYING, [2]: obj.PAUSED, [3]: obj.BUFFERING, [5]: obj.VIDEO_CUED };
obj = { INVALID_PARAMETER: "invalid_parameter", HTML5_ERROR: "HTML5_error", VIDEO_NOT_FOUND: "video_not_found", EMBED_NOT_ALLOWED: "embed_not_allowed" };
arg5.PLAYER_ERROR_NAMES = obj;
arg5.PLAYER_ERROR = { [2]: obj.INVALID_PARAMETER, [5]: obj.HTML5_ERROR, [100]: obj.VIDEO_NOT_FOUND, [101]: obj.EMBED_NOT_ALLOWED, [150]: obj.EMBED_NOT_ALLOWED };
arg5.CUSTOM_USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36";
arg5.DEFAULT_BASE_URL = "https://lonelycpp.github.io/react-native-youtube-iframe/iframe.html";
