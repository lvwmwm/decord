// Module ID: 4796
// Function ID: 4797
// Dependencies: [4797, 2, 4799, 4803, 4806, 4807, 4808, 4809, 4810, 4811, 4800, 4802]

// Module 4796
import Dao from "Dao" /* 4799 */;
import Table from "Table" /* 4800 */;
import TableId from "TableId" /* 4802 */;
import Database from "Database" /* 4803 */;
import EntityDao from "EntityDao" /* 4806 */;
import GuildDao from "GuildDao" /* 4807 */;
import GuildEntityDao from "GuildEntityDao" /* 4808 */;
import Kv from "Kv" /* 4809 */;
import MessageDao from "MessageDao" /* 4810 */;
import api_Stats from "api/Stats" /* 4811 */;
import "module_4797";
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
