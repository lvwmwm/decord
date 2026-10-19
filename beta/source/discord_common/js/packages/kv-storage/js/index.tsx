// Module ID: 2095
// Function ID: 2096
// Dependencies: [2096, 2, 2098, 2102, 2105, 2106, 2107, 2108, 2109, 2110, 2099, 2101]

// Module 2095
import Dao from "Dao" /* 2098 */;
import Table from "Table" /* 2099 */;
import TableId from "TableId" /* 2101 */;
import Database from "Database" /* 2102 */;
import EntityDao from "EntityDao" /* 2105 */;
import GuildDao from "GuildDao" /* 2106 */;
import GuildEntityDao from "GuildEntityDao" /* 2107 */;
import Kv from "Kv" /* 2108 */;
import MessageDao from "MessageDao" /* 2109 */;
import api_Stats from "api/Stats" /* 2110 */;
import "module_2096";
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/index.tsx");
for (const key10020 in Dao) {
  exports[key10020] = Dao[key10020];
  continue;
}
for (const key10024 in Database) {
  exports[key10024] = Database[key10024];
  continue;
}
for (const key10028 in EntityDao) {
  exports[key10028] = EntityDao[key10028];
  continue;
}
for (const key10032 in GuildDao) {
  exports[key10032] = GuildDao[key10032];
  continue;
}
for (const key10036 in GuildEntityDao) {
  exports[key10036] = GuildEntityDao[key10036];
  continue;
}
for (const key10040 in Kv) {
  exports[key10040] = Kv[key10040];
  continue;
}
for (const key10044 in MessageDao) {
  exports[key10044] = MessageDao[key10044];
  continue;
}
for (const key10048 in api_Stats) {
  exports[key10048] = api_Stats[key10048];
  continue;
}
for (const key10052 in Table) {
  exports[key10052] = Table[key10052];
  continue;
}
for (const key10056 in TableId) {
  exports[key10056] = TableId[key10056];
  continue;
}
