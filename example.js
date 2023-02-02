const fs = require("fs");
const path = require("path");
const { html_to_pdf } = require(".");

try {
    (async() => {
        const dataBinding = {
            items: [{
                    name: "Test 1",
                    price: 100,
                },
                {
                    name: "Test 2",
                    price: 200,
                },
                {
                    name: "Test 3",
                    price: 300,
                },
            ],
            total: 600,
            isWatermark: true,
        };

        const templateHtml = fs.readFileSync(
            path.join(process.cwd(), "invoice.html"),
            "utf8"
        );

        const options = {
            format: "A4",
            headerTemplate: "<p></p>",
            footerTemplate: "<p></p>",
            displayHeaderFooter: false,
            margin: {
                top: "40px",
                bottom: "100px",
            },
            printBackground: true,
            path: "invoice.pdf",
        };

        await html_to_pdf({ templateHtml, dataBinding, options });

        console.log("Done: invoice.pdf is created!");
    })();
} catch (err) {
    console.log("ERROR:", err);
}