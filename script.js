const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
})

const parent = document.querySelector(".parent")

mutationObserver.observe(parent, { childList: true })

parent.children[0].remove();

setTimeout(() => {
    parent.appendChild(document.createElement("div"));
}, 100)