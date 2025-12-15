import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("Loading motivation...");

  useEffect(() => {
    fetch("https://zenquotes.io/api/random")
      .then(res => res.json())
      .then(data => {
        setQuote(`${data[0].q} — ${data[0].a}`);
      })
      .catch(() => {
        setQuote("Stay consistent. Success will follow. 🚀");
      });
  }, []);

  return (
    <div className="quote-box">
      💡 {quote}
    </div>
  );
};

export default Quote;
