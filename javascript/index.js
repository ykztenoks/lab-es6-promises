// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
//   },
//   (error) => console.log(error)
// )

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`
          getInstruction("mashedPotatoes", 4, (step5) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step5}</li>`
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>mashed potatoes are ready</li>`

            document
              .querySelector("#mashedPotatoesImg")
              .removeAttribute("hidden")
          })
        })
      })
    })
  },
  (error) => console.log(error)
)
// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>steak is ready</li>`
    document.querySelector("#steakImg").removeAttribute("hidden")
  })
  .catch((error) => console.log(error))

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0)
    const step1 = await obtainInstruction("broccoli", 1)
    const step2 = await obtainInstruction("broccoli", 2)
    const step3 = await obtainInstruction("broccoli", 3)
    const step4 = await obtainInstruction("broccoli", 4)
    const step5 = await obtainInstruction("broccoli", 5)
    const step6 = await obtainInstruction("broccoli", 6)

    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`

    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>broccoli is ready</li>`
    document.querySelector("#broccoliImg").removeAttribute("hidden")
  } catch (error) {
    console.log(error)
  }
}

makeBroccoli()
// Bonus 2 - Promise all
// ...

const promises = [
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
]

async function resolveAll() {
  try {
    const results = await Promise.all(promises)
    console.log(results)

    results.forEach((result) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${result}</li>`
    })
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>brussels sprouts is ready</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  } catch (error) {
    console.log(error)
  }
}

resolveAll()
