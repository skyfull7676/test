function createCobraKaiPresentation() {
  const presentation = SlidesApp.create("Cobra Kai — The Rivalry, The Dojos, The Legacy");

  const slides = presentation.getSlides();
  slides[0].remove();

  const deck = [
    ["COBRA KAI", "The Rivalry, The Dojos, The Legacy\nA presentation about the world of Cobra Kai"],
    ["What Is Cobra Kai?", "• A martial-arts drama series\n• Continues the story of The Karate Kid\n• Centers on Johnny Lawrence and Daniel LaRusso\n• Explores rivalry, friendship, mentorship, and redemption"],
    ["Johnny Lawrence", "• Former Cobra Kai student\n• Reopens Cobra Kai years later\n• Tries to rebuild his life and teach karate\n• His story focuses on growth and redemption"],
    ["Daniel LaRusso", "• Student of Mr. Miyagi\n• Runs Miyagi-Do Karate\n• Teaches balance, defense, and discipline\n• His rivalry with Johnny drives much of the story"],
    ["Cobra Kai Dojo", "• Aggressive, offense-first philosophy\n• Famous motto: Strike First\n• Focuses on confidence and toughness\n• The dojo changes as its teachers and students change"],
    ["Miyagi-Do Karate", "• Built around Mr. Miyagi's teachings\n• Emphasizes defense and balance\n• Patience and discipline matter\n• Karate is connected to life lessons, not just fighting"],
    ["Eagle Fang Karate", "• Johnny's new approach to teaching\n• Keeps the aggressive spirit of Cobra Kai\n• Adds Johnny's personal philosophy\n• Becomes an important part of the dojo rivalry"],
    ["The Students", "• Miguel Diaz\n• Robby Keene\n• Sam LaRusso\n• Tory Nichols\n• Hawk / Eli Moskowitz\n• Their choices shape the future of the dojos"],
    ["The Rivalry", "• Johnny and Daniel start as rivals\n• Their students inherit the conflict\n• Competition creates victories and mistakes\n• Cooperation becomes increasingly important"],
    ["Lessons Beyond Karate", "• Learning from mistakes\n• Standing up for yourself\n• Knowing when to forgive\n• Choosing your own path\n• A mentor can change someone's life"],
    ["Why Cobra Kai Stands Out", "• Mixes classic Karate Kid history with new characters\n• Gives old rivals new perspectives\n• Combines action, comedy, and drama\n• Shows that people can change"],
    ["FINAL THOUGHT", "Cobra Kai is more than a karate rivalry.\nIt is a story about second chances, friendship, discipline, and choosing who you want to become."]
  ];

  deck.forEach((item, index) => {
    const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    slide.getBackground().setSolidFill(index === 0 ? "#111111" : "#F5F5F5");
    const title = slide.getShapes()[0].getText();
    const body = slide.getShapes()[1].getText();
    title.setText(item[0]);
    body.setText(item[1]);
    title.getTextStyle().setFontFamily("Arial").setBold(true).setFontSize(index === 0 ? 34 : 28);
    body.getTextStyle().setFontFamily("Arial").setFontSize(index === 0 ? 22 : 18);
    if (index === 0) {
      title.getTextStyle().setForegroundColor("#FFFFFF");
      body.getTextStyle().setForegroundColor("#FFFFFF");
    }
  });

  Logger.log("Created presentation: " + presentation.getUrl());
  return presentation.getUrl();
}
