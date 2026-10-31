// Module ID: 4893
// Function ID: 4894
// Dependencies: [4894, 2, 4896, 4900, 4903, 4904, 4905, 4906, 4907, 4908, 4897, 4899]

// Module 4893
import Dao from "Dao" /* 4896 */;
import Table from "Table" /* 4897 */;
import TableId from "TableId" /* 4899 */;
import Database from "Database" /* 4900 */;
import EntityDao from "EntityDao" /* 4903 */;
import GuildDao from "GuildDao" /* 4904 */;
import GuildEntityDao from "GuildEntityDao" /* 4905 */;
import Kv from "Kv" /* 4906 */;
import MessageDao from "MessageDao" /* 4907 */;
import api_Stats from "api/Stats" /* 4908 */;
import "module_4894";
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
