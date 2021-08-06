module.exports = {
    // config: path.resolve(__dirname, "custom.config.js"),
    plugins: [
        [
            // postcss-preset-env по умолчанию
            // включает в себя  , так что
            // отдельно его устанавливать не нужно
            // Options https://github.com/csstools/postcss-preset-env
            'postcss-preset-env',
            {
                // строгость полифила, по умолчанию самый строгий,
                // только стабильные фичи
                stage: 4,

                // если нужно включить какую либо фичу, не попадающию
                // под `stage: 4`, это можно сделать отдельно
                // список ключей для фич https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js
                // описание фич https://preset-env.cssdb.org/features
                features: {
                    'custom-media-queries': true
                },

                // не нужно использовать browsers, подхватывается из package.json
            },
        ],
    ],
}
