const translateButton = document.getElementById("translateButton");
const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");
const textInput = document.getElementById("textInput");
const TranslatedTextForm = document.getElementById("translatedText");

const toLanguageSelect = document.getElementById("toLanguage");
const fromLanguageSelect = document.getElementById("fromLanguage");

for (const code in languages) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = languages[code];
  fromLanguageSelect.appendChild(option);
}

for (const code in languages) {
  const option = document.createElement("option");
  option.value = code;``
  option.textContent = languages[code];
  toLanguageSelect.appendChild(option);
}

translateButton.addEventListener("click", async () => {

  const sourceLang = fromLanguage.value;
  const targetLang = toLanguage.value;
  const text = textInput.value ? textInput.value : 'Good morning'

  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', `${sourceLang}`);
  encodedParams.set('target_language', `${targetLang}`);
  encodedParams.set('text', text);

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'd7744936afmsh9dc9cb1b03408e1p1a86fejsndea52d2503d8',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    const result = response.data.data
    let TranslatedText = result.translatedText;
    TranslatedTextForm.innerText = TranslatedText;
  } catch (error) {
    console.error(error);
    TranslatedTextForm.innerText = 'Something went wrong!';
  }
});