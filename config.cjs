const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "Byte;;;,eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pLN3pORVRrb1hpSmlqQllzNEFDVVdJdzVsekc0RlpvR3hIVEc4VjJGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGp1TUQ4Z2x4NDFZaDdQUEpDMlJ2SFMvS2JqQytXOVFBTVNWQ1d1a0JGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRkwxbTJHWDJzVTJadWk1aERkcWRKUnNVcHpwSGVCT1FxeVdnNFp3YUVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZUMyRHhRQzlEcSsySWRtV0gzcVB0Sko1MkZNSlR5OU1wMlZuV0V3Q1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDMk02Y2xqRC9PMnpXNERhUG5mZ0lzVFZhNWtsdVpLTjhtN1pPa052MzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpJdGdoUkhTalhBaVFxUjJaeW5rNUxHVmtDYk9pOWVFRFNSNkxDRjRMUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUI1a0NyUlZJZmZ6VWhiSzJnUTRmMDNxcXRZcDlhREd2aXlWMzlEcnVVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hNVFJRYklvK0MyN1UvTnJvM3ZlZm9YUjg4TUtuQjc4WlVZajhuVDNWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imlmdnp2M0tyT01mZ3FzNzJyckJPT05qTE53aEVMRmcxUHFOQjJlb1JUS09oVnc0YzkzYysvU3RHU01oeDJJK0FvVk1XTWRRY0FWRm03T3hDZS9uaGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IkJOdWVwYmM1eTl4RzBqSWwyeU9DZjNQbVRpRFpHL05wa1ZyQlg1eHNQaHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05TeTUvRUpFTFBEb00wR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVXL2w1S0Q2OW93WVhsU2wrWVoraUlTVStVYU5wdFZoNm1EM080dG1Pa2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJNOGNIS0VaaHFhV1BFcTBuNkxiTXp0UmkzY2xFZFJ6QW5YY0JscTR6QTY1ZGFPN2VnQVJkSDNtdFFGdlNhcDgxdFI5YjUrU3A4TTUxNGNURjVlV0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDN2l5NUwybjBWL1lOcmova0MvT2Z1aHZLV1V5TWdqZW5WN3I3bnA5L3RydEVqS0JnckxnaTlQand3T3VYb014clVyQW56Vk1OVldVWmdUWURlRHlqUT09In0sIm1lIjp7ImlkIjoiMjM0NzA0MDcxMDk4MDo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDYxMTE1MDcxMzI0OTI6NkBsaWQiLCJuYW1lIjoiSmF5X211c2sifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDcxMDk4MDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhsdjVlU2crdmFNR0Y1VXBmbUdmb2lFbFBsR2phYlZZZXBnOXp1TFpqcEoifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcyNjI2MzY1LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBYLyJ9",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
