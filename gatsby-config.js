module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/4325e34b17fb4089b645a6bfae1af43e?v=2f41a742db1942ea80fa06d0f7e3ddbd"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/32b978edabc64f07b091460a4f1f4050?v=82d8607593194d0b9e48ab9494818b96"
            }
        }
    ],
}
