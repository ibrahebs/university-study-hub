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
          id: "chapter-01",
          label: "Chapter 1",
          title: "Decision Making, DSS, BI and Analytics",
          titleAr: "اتخاذ القرار ونظم دعمه وذكاء الأعمال والتحليلات",
          description: "شرح ثنائي اللغة لـ31 شريحة، 8 رسومات تعليمية، بطاقات و53 سؤالًا تدريبيًا",
          path: "courses/is366/chapter-01/index.html",
          slides: 31
        },
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

