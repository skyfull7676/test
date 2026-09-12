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
    addKarateBackground(slide, index);

    const shapes = slide.getShapes();
    const title = shapes[0].getText();
    const body = shapes[1].getText();

    title.setText(item[0]);
    body.setText(item[1]);

    title.getTextStyle().setFontFamily("Arial").setBold(true).setFontSize(index === 0 ? 34 : 28);
    body.getTextStyle().setFontFamily("Arial").setFontSize(index === 0 ? 22 : 18);

    if (index === 0) {
      title.getTextStyle().setForegroundColor("#FFFFFF");
      body.getTextStyle().setForegroundColor("#FFFFFF");
    } else {
      title.getTextStyle().setForegroundColor("#111111");
      body.getTextStyle().setForegroundColor("#222222");
    }
  });

  Logger.log("Created presentation: " + presentation.getUrl());
  return presentation.getUrl();
}

function addKarateBackground(slide, index) {
  // Dark dojo-style background on the title slide; light parchment-style dojo background elsewhere.
  const dark = index === 0;
  slide.getBackground().setSolidFill(dark ? "#111111" : "#EEE8DA");

  // Subtle diagonal "gi belt" stripes.
  for (let i = 0; i < 7; i++) {
    const stripe = slide.insertShape(
      SlidesApp.ShapeType.RECTANGLE,
      0, 30 + i * 65, 720, 4
    );
    stripe.getFill().setSolidFill(dark ? "#7A0B0B" : "#B21E1E");
    stripe.getLine().setTransparent();
    stripe.setRotation(-8);
    stripe.sendToBack();
  }

  // Large faded karate-belt circle / sun behind the content.
  const sun = slide.insertShape(
    SlidesApp.ShapeType.ELLIPSE,
    530, 40, 145, 145
  );
  sun.getFill().setSolidFill(dark ? "#7A0B0B" : "#D7C5A1");
  sun.getLine().setTransparent();
  sun.setTransparency(35);
  sun.sendToBack();

  // Minimal martial-arts silhouette made from circles and rectangles.
  const head = slide.insertShape(SlidesApp.ShapeType.ELLIPSE, 575, 75, 32, 32);
  head.getFill().setSolidFill(dark ? "#D9D9D9" : "#777777");
  head.getLine().setTransparent();
  head.setTransparency(55);
  head.sendToBack();

  const body = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 588, 105, 8, 65);
  body.getFill().setSolidFill(dark ? "#D9D9D9" : "#777777");
  body.getLine().setTransparent();
  body.setTransparency(55);
  body.setRotation(8);
  body.sendToBack();

  // Diagonal arms suggest a karate stance.
  const arm1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 555, 118, 75, 7);
  arm1.getFill().setSolidFill(dark ? "#D9D9D9" : "#777777");
  arm1.getLine().setTransparent();
  arm1.setTransparency(55);
  arm1.setRotation(-22);
  arm1.sendToBack();

  const arm2 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 555, 135, 75, 7);
  arm2.getFill().setSolidFill(dark ? "#D9D9D9" : "#777777");
  arm2.getLine().setTransparent();
  arm2.setTransparency(55);
  arm2.setRotation(25);
  arm2.sendToBack();

  // A bold belt across the bottom gives every slide a consistent dojo look.
  const belt = slide.insertShape(
    SlidesApp.ShapeType.RECTANGLE,
    0, 385, 720, 20
  );
  belt.getFill().setSolidFill("#B21E1E");
  belt.getLine().setTransparent();
  belt.sendToBack();
}
