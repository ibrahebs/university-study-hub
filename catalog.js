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
    },
    {
      "id": "e-commerce",
      "code": "E-commerce",
      "name": "E-commerce",
      "nameAr": "التجارة الإلكترونية",
      "description": "أدلة مستقلة للفصول 1–4 من الملفات المرفقة. رمز المقرر غير مذكور في المصدر.",
      "accent": "mint",
      "chapters": [
        {
          "id": "chapter-01",
          "label": "Chapter 1",
          "title": "The Revolution Is Just Beginning",
          "titleAr": "الثورة ما زالت في بدايتها",
          "description": "شرح ثنائي اللغة لـ50 صفحة، 14 شكلًا وجدولًا بشرح نصي، و40 سؤالًا تدريبيًا",
          "path": "courses/e-commerce/chapter-01/index.html",
          "pages": 50
        },
        {
          "id": "chapter-02",
          "label": "Chapter 2",
          "title": "E-commerce Business Models and Concepts",
          "titleAr": "نماذج أعمال التجارة الإلكترونية ومفاهيمها",
          "description": "شرح ثنائي اللغة لـ53 صفحة، 15 شكلًا وجدولًا بشرح نصي، و45 سؤالًا تدريبيًا",
          "path": "courses/e-commerce/chapter-02/index.html",
          "pages": 53
        },
        {
          "id": "chapter-03",
          "label": "Chapter 3",
          "title": "E-commerce Infrastructure: The Internet, Web, and Mobile Platform",
          "titleAr": "البنية التحتية للتجارة الإلكترونية: الإنترنت والويب ومنصة الأجهزة المحمولة",
          "description": "شرح ثنائي اللغة لـ52 شريحة، 7 شكلًا وجدولًا بشرح نصي، و40 سؤالًا تدريبيًا",
          "path": "courses/e-commerce/chapter-03/index.html",
          "slides": 52
        },
        {
          "id": "chapter-04",
          "label": "Chapter 4",
          "title": "Building an E-commerce Presence: Websites, Mobile Sites, and Apps",
          "titleAr": "بناء حضور للتجارة الإلكترونية: المواقع ومواقع الجوال والتطبيقات",
          "description": "شرح ثنائي اللغة لـ53 شريحة، 12 شكلًا وجدولًا بشرح نصي، و52 سؤالًا تدريبيًا",
          "path": "courses/e-commerce/chapter-04/index.html",
          "slides": 53
        }
      ]
    }
  ]
};


