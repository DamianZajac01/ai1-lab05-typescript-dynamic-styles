// const msg: string = "Hello";
// alert(msg);

function loadCssFile(filename: string): void {
    const head: HTMLHeadElement = document.getElementsByTagName("head")[0];

    const oldFileRef: Element | null = document.querySelector("head link");
    if (oldFileRef != null) {
        head.removeChild(oldFileRef);
    }

    const fileRef: HTMLLinkElement = document.createElement("link");
    fileRef.setAttribute("rel", "stylesheet");
    fileRef.setAttribute("type", "text/css");
    fileRef.setAttribute("href", filename);
    head.appendChild(fileRef);
}

const noStyle: string = "";
const firstStyle: string = "styles/style1/styles.css";
const secondStyle: string = "styles/style2/styles.css";
const styles: string[] = [noStyle, firstStyle, secondStyle];
function generateCssLinks(styles: string[]): void {
    const header: HTMLElement | null = document.getElementsByTagName("header")[0];
    console.log(header);
    const title: HTMLHeadingElement = document.createElement("h1");
    const titleText: Text = document.createTextNode("Możliwe style do wybrania:");
    title.appendChild(titleText);
    header?.appendChild(title);

    let numberOfStyle: number = 0;
    for (let style of styles) {
        const button: HTMLButtonElement = document.createElement("button");
        if (numberOfStyle == 0) {
            button.textContent = "Bez stylu";
            numberOfStyle++;
        } else {
            button.textContent = "Styl " + numberOfStyle++;
        }
        button.addEventListener("click", function() {
            loadCssFile(style);
        });
        header?.appendChild(button);
    }
}

generateCssLinks(styles);
