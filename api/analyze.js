export default function handler(req, res) {

  const { stock } = req.query;

  if (!stock) {
    return res.status(400).json({
      result: "Please enter a stock name"
    });
  }

  const analysis =
    "AI Analysis for " +
    stock +
    ": Strong company with long-term bullish outlook.";

  res.status(200).json({
    result: analysis
  });

}
