import { ISideMenuArticleProps, ISideMenuProps } from "../../public/user";

const SideMenu = ({ children, className }: ISideMenuProps) => {
  let templateArticles: ISideMenuArticleProps[] = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className={className}>
      <div className={"mb-8 text-5xl font-bold text-soft-orange"}>New</div>

      {templateArticles.map((t, index) => {
        return (
          <>
            <div className={"flex flex-col gap-2 text-off-white"}>
              <div
                className={
                  "cursor-pointer text-xl font-bold hover:text-soft-orange"
                }
              >
                {t.title}
              </div>
              <div className={"text-grayish-blue"}>{t.text}</div>
              {index < 2 ? (
                <div
                  className={"my-8 h-[1px] w-full bg-dark-grayish-blue"}
                ></div>
              ) : (
                ""
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideMenu;
