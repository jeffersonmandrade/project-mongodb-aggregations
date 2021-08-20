db.movies.aggregate([
  {
    $addFields: {
      title_split: { $split: ["$title", " "] },
    },
  },
  { $addFields: {
    sizeTitleSpli: {
      $size: "$title_split",
    },
  } },
  { $match: {
    sizeTitleSpli: { $lte: 1 },
  } },
  { $sort: { title_split: 1 } },
  {
    $project: {
      _id: 0,
      title_split: 1,
      sizeTitleSplit: 1,
    } },
]);
