const BulletPoint = (input) => {
  let count = input.split(/[\u2022,\u2023,\u25E6,\u2043,\u2219]/).length - 1
  let result
  if (count === 0) {
    result = {
      score: 0,
      advice: "You don't use bullet point, Use it !"
    }
  } else if (count === 1) {
    result = {
      score: 1,
      advice: "You use one bullet point, Use more !"
    }
  } else if (count > 1) {
    result = {
      score: 2,
      advice: "You use more than one bullet point, Good !"
    }
  }

  return result
}

export { BulletPoint }