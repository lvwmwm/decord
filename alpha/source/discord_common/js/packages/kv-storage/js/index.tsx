// Module ID: 5022
// Function ID: 5023
// Dependencies: [5023, 2, 5025, 5029, 5032, 5033, 5034, 5035, 5036, 5037, 5026, 5028]

// Module 5022
import Dao from "Dao" /* 5025 */;
import Table from "Table" /* 5026 */;
import TableId from "TableId" /* 5028 */;
import Database from "Database" /* 5029 */;
import EntityDao from "EntityDao" /* 5032 */;
import GuildDao from "GuildDao" /* 5033 */;
import GuildEntityDao from "GuildEntityDao" /* 5034 */;
import Kv from "Kv" /* 5035 */;
import MessageDao from "MessageDao" /* 5036 */;
import api_Stats from "api/Stats" /* 5037 */;
import "module_5023";
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
