import { Configuration, OpenAIApi } from "openai";

const api_Key = "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";

const configuration = new Configuration({
    apiKey: api_Key
});

const openai = new OpenAIApi(configuration);

export default openai