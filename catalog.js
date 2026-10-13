/**
 * University Study Hub catalog.
 * Add actual courses and chapters only when their pages exist.
 * Each path is relative to the repository root.
 */
window.STUDY_HUB_CATALOG = {
  version: 1,
  courses: [
    {
      id: "is366",
      code: "IS 366",
      name: "Decision Support Systems",
      nameAr: "نظم دعم القرار",
      description: "محتوى المذاكرة المضاف حاليًا لهذه المادة.",
      accent: "mint",
      chapters: [
        {
          id: "chapter-02",
          label: "Chapter 2",
          title: "Artificial Intelligence",
          titleAr: "الذكاء الاصطناعي",
          description: "شرح السلايدات، الرسومات، الملخص، بنك الأسئلة والاختبار النهائي",
          path: "courses/is366/chapter-02/index.html",
          slides: 41
        }
      ]
    }
  ]
};
