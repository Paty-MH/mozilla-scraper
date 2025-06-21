const getArticlesFromRSS = require("./rssScraper");
const saveToJson = require("./saveToJson");
const saveToCsv = require("./saveToCsv");
const saveToXlsx = require("./saveToXlsx");
const saveToTxt = require("./saveToTxt");
const saveToPdf = require("./saveToPdf");

(async () => {
  const data = await getArticlesFromRSS();
  console.log("Artículos extraídos:", data.length);

  saveToJson(data);
  saveToCsv(data);
  saveToXlsx(data);
  saveToTxt(data);
  saveToPdf(data);
})();
