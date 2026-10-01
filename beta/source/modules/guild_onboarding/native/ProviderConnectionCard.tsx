// Module ID: 6599
// Function ID: 6600
// Name: ProviderConnectionCard
// Dependencies: [5, 19, 1074, 21, 4767, 5595, 1115, 6600, 6601, 1241, 5016, 1397, 4685, 1177, 4775, 6598, 2]
// Exports: default

// Module 6599 (ProviderConnectionCard)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import LinkIcon from "LinkIcon" /* 4775 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2;

let _asyncToGenerator = _asyncToGenerator_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default function ProviderConnectionCard(connection) {
  let canConnect;
  let closure_3;
  let hasConnection;
  let loading;
  connection = connection.connection;
  let guildId = connection.guildId;
  const _location = connection.location;
  let startConnection;
  const tmp = guildId;
  const tmp2 = _location;
  const tmp3 = guildId(_location[4])();
  _asyncToGenerator = tmp3;
  let stringResult = null;
  if (null != connection.provider_id) {
    const tmpResult = tmp(tmp2[5]);
    let value = tmpResult.get(connection.provider_id);
    let name;
    if (value != null) {
      name = value.name;
    }
    stringResult = name;
  }
  if (stringResult == null) {
    const intl = connection(tmp2[6]).intl;
    stringResult = intl.string(connection(tmp2[6]).t.NzCoRx);
  }
  if (null != connection.description) {
    let description;
    if (connection.description.length > 0) {
      description = connection.description;
    }
    const tmp8 = connection;
    let obj2 = connection(tmp2[8]);
    const startProviderConnection = obj2.useStartProviderConnection(connection.provider_id);
    startConnection = startProviderConnection.startConnection;
    ({ hasConnection, canConnect, loading } = startProviderConnection);
    const items = [startConnection, guildId, connection.provider_id, _location];
    const items1 = [connection.provider_id, tmp3];
    const callback = startConnection.useCallback(_asyncToGenerator(async (arg0, value) => {
      let provider_id;
      let v3;
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          guildId = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              guildId = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj4 = { connection_type: "provider", provider_id, location: _location };
              const track = guildId(c2[9]).track;
              const GUILD_ONBOARDING_CONNECTION_CLICKED = constants.GUILD_ONBOARDING_CONNECTION_CLICKED;
              const tmp14 = guildId(c2[9]);
              const obj6 = provider_id(c2[10]);
              const merged = Object.assign(obj6.collectGuildAnalyticsMetadata(guildId));
              provider_id = connection.provider_id ?? undefined;
              track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj4);
              c2 = 1;
              guildId = 1;
              const obj5 = { value: startConnection("Guild Onboarding"), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            guildId = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          guildId = 3;
          throw tmp8;
        }
      }
    }), items);
    let tmp14 = jsx;
    const memo = startConnection.useMemo(() => {
      if (null != connection.provider_id) {
        const obj = PlatformsDefault;
        const value = obj.get(tmp.provider_id);
        let icon1;
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        if (value != null) {
          icon1 = value.icon;
        }
        let tmp12 = null;
        if (null != icon1) {
          const icon = value.icon;
          const obj2 = shared;
          tmp12 = obj2.isThemeDark(closure_3) ? icon.darkPNG : icon.lightPNG;
        }
        const source = makeSource(tmp12);
        return jsx(native.Icon, { source, style: { width: 32, height: 32 }, disableColor: true });
      } else {
        return jsx(LinkIcon.LinkIcon, { size: "lg", color: "text-subtle" });
      }
    }, items1);
    return jsx(tmp(tmp2[15]), { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback });
  }
  description = tmp(tmp2[7])(connection.provider_id);
};
