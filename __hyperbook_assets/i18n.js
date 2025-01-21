var i18n = (function () {
  
  // GENERATED
  const locales = {
    "store-different-origin": "Die Hyperbook-Datei stammt aus einer anderen Quelle {{origin}}. Möchten Sie sie trotzdem importieren?",
    "store-import-successful": "Die Hyperbook-Datei wurde erfolgreich importiert.",
    "store-not-supported-file-version": "Die Hyperbook-Datei hat eine nicht unterstützte Version {{version}}.",
    "store-reset-successful": "Das Hyperbook wurde erfolgreich zurückgesetzt.",
    "store-reset-confirm": "Sind Sie sicher, dass Sie das Hyperbook zurücksetzen möchten? Dadurch werden alle Ihre Daten entfernt.",
    "shell-search": "Suche",
    "shell-toggle-dark-mode": "Zwischen Dunkel- und Hellmodus wechseln",
    "shell-reset-hyperbook": "Das Hyperbook zurücksetzen",
    "shell-import-hyperbook": "Das Hyperbook aus einer Datei importieren",
    "shell-export-hyperbook": "Das Hyperbook in eine Datei exportieren",
    "qr-code": "QR-Code",
    "p5-update": "Aktualisieren",
    "p5-code-preview": "Code-Vorschau",
    "p5-reset": "Zurücksetzen",
    "p5-copy": "Kopieren",
    "p5-download": "Herunterladen",
    "abc-music-reset": "Zurücksetzen",
    "abc-music-copy": "Kopieren",
    "abc-music-download": "Herunterladen",
    "table-of-contents": "Inhaltsverzeichnis",
    "audio-play": "Abspielen/Pause",
    "archive-offline": "Offline",
    "download-offline": "Offline",
    "pyide-run": "Ausführen",
    "pyide-running-click-to-stop": "Wird ausgeführt (Klicken zum Stoppen) ...",
    "pyide-running-refresh-to-stop": "Wird ausgeführt (Aktualisieren zum Stoppen) ...",
    "pyide-test": "Testen",
    "pyide-test-running-click-to-stop": "Test läuft (Klicken zum Stoppen) ...",
    "pyide-test-running-refresh-to-stop": "Test läuft (Aktualisieren zum Stoppen) ...",
    "pyide-output": "Ausgabe",
    "pyide-input": "Eingabe",
    "pyide-reset": "Zurücksetzen",
    "pyide-copy": "Kopieren",
    "pyide-download": "Herunterladen",
    "slideshow-previous": "Zurück",
    "slideshow-next": "Weiter",
    "slideshow-jump-to": "Springe zu {{index}}",
    "toggle-bookmark": "Lesezeichen umschalten",
    "webide-code-preview": "Code-Vorschau",
    "webide-html": "HTML",
    "webide-css": "CSS",
    "webide-js": "JS",
    "webide-reset": "Zurücksetzen",
    "webide-reset-prompt": "Sind Sie sicher, dass Sie den Code zurücksetzen möchten?",
    "webide-copy": "Kopieren",
    "webide-download": "Herunterladen"
};


  const get = (key, values) => {
    if (!locales[key]) {
      console.warn(
        `Missing translation for key '${key}'`
      );
      return key;
    }

    let translation = locales[key];
    if (values) {
      for (const [key, value] of Object.entries(values)) {
        translation = translation.replace(`{{${key}}}`, value);
      }
    }

    return translation;
  };

  return { get };
})();
