import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activity-reducer";

type activityListProps = {
  activities: Activity[],
  dispatch: React.Dispatch<ActivityActions>

};

export default function ActivityList({ activities, dispatch }: activityListProps) {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    [activities]
  );

  return (
    <>
      <h2 className="text-3xl font-bold text-slate-600 text-center">
        Comida y actividades
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                activity.category === 1 ? "bg-blue-400" : "bg-orange-500"
              }`}
            >
              {categoryName(+activity.category)}
            </p>

            <p className="text-2xl font-bold pt-5">{activity.name}</p>

            <p className="font-black text-4xl text-blue-400">
              {activity.calories} {""}
              <span>Calorias</span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button>
                <PencilSquareIcon className="h-8 text-gray-800 w-8"
                onClick={() => dispatch({type: "set-activeId", payload:{id: activity.id }})}  
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
