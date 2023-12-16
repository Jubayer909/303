// Redirect script
var path = window.location.pathname;

// Define the mapping of post URLs to sorry page URLs
var redirectMap = {
  '/2022/01/fletro-pro-61-template-free-download.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Fletro+Pro+6.1+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2022/01/how-to-inspect-elements-in-phone.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+to+inspect+elements+in+phone?&amp;reason=Outdated&amp;m=1',
  '/2021/10/igniplex-v26-premium-blogger-template.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Igniplex+v2.6+Premium+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/10/tic-tac-toe-game-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Tic+Tac+Toe+Game+Script+%5BHTML%5D+For+Blogger+%5BScript+1%5D&amp;reason=Outdated&amp;m=1',
  '/2021/10/url-protector-360-premium-blogger-theme.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Url+Protector+360+Premium+Blogger+Theme+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/09/median-ui-v15-advance-premium-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Median+UI+V1.5+Advance+Premium+Blogger+Template&amp;reason=Outdated&amp;m=1',
  '/2021/09/how-to-create-product-post-in-median-ui.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Create+Product+Post+In+Median+UI+Theme+?&amp;reason=Outdated&amp;m=1',
  '/2021/09/how-to-create-single-page-for-all.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Create+Single+Page+For+All+Download+Links+With+Timer?&amp;reason=Outdated&amp;m=1',
  '/2021/09/material-x2-premium-blogger-template.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Material+X2+Premium+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/09/html-to-xml-parser-tool-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=HTML+To+XML+Parser+Tool+Script+%5BHTML%5D+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2021/09/fancy-font-generator-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Fancy+Font+Generator+Script+%5BHTML%5D+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2021/09/youtube-audio-and-video-downloader.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Youtube+Audio+And+Video+Downloader+Script+%5BHTML%5D+For+Blogger+%5BScript+1%5D&amp;reason=Outdated&amp;m=1',
  '/2021/09/instagram-image-and-video-downloader.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Instagram+Image+And+Video+Downloader+Script+%5BHTML%5D+For+Blogger+%5BScript+1%5D&amp;reason=Outdated&amp;m=1',
  '/2021/09/random-password-generator-script-html.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Random+Password+Generator+Script+%5BHTML%5D+For+Blogger+%5BScript+1%5D&amp;reason=Outdated&amp;m=1',
  '/2021/09/how-to-create-product-type-post-in.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Create+Product+Type+Post+in+Median+UI+Blogger+Theme?&amp;reason=Outdated&amp;m=1',
  '/2021/09/how-to-install-syntax-highlighter-with.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Install+Syntax+Highlighter+With+Copy+Button+On+Blogger+Website?+%5BScript+2%5D&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-install-anti-adblock-script-on.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Install+Anti+Adblock+Script+On+Blogger+2021?&amp;reason=Outdated&amp;m=1',
  '/2021/08/imagz-v12-premium-landing-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=iMagz+V1.2+Premium+Landing+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/08/imagz-premium-blogger-template-free.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=iMagz+Premium+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/08/imagz-blogger-theme-codes-additional.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=iMagz+Blogger+Theme+Codes+%5BAdditional%5D&amp;reason=Outdated&amp;m=1',
  '/2021/08/newspeed-premium-blogger-template-free.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Newspeed+Premium+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/08/median-ui-v15-nd-premium-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Median+UI+V1.5+ND+Premium+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-make-auto-and-manual-related.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Make+Auto+and+Manual+Related+Post+Middle+of+Article+in+Median+UI+Template?&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-create-password-protected.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Create+a+Password+Protected+Page/Post+in+Blogger?&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-create-typeface-on-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Create+&quot;Write+Typeface&quot;+On+Blogger?&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-add-partner-websites-in-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Add+Partner+Websites+In+Blogger+Using+%5BHTML%5D+Code?&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-add-dynamic-animation-header-in.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+to+Add+Dynamic+Animation+Header+in+Blogger?&amp;reason=Outdated&amp;m=1',
  '/2021/08/fletro-pro-v60-blogger-template-free.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Fletro+Pro+v6.0+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-add-animated-header-in-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Add+Animated+Header+In+Blogger?&amp;reason=Outdated&amp;m=1',
  '/2021/08/how-to-add-custom-google-translate.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Add+Custom+Google+Translate+Button+On+Blogger+Website?&amp;reason=Outdated&amp;m=1',
  '/2021/07/how-to-disable-right-click-in-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+to+Disable+Right+Click+in+Blogger+with+Pop+Up+Message?&amp;reason=Outdated&amp;m=1',
  '/2021/07/median-ui-v15-redesign-premium-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Median+UI+V1.5+Redesign+Premium+Blogger+Template&amp;reason=Outdated&amp;m=1',
  '/2021/07/median-ui-codes-additional.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Median+UI+Codes+Additional&amp;reason=Outdated&amp;m=1',
  '/2021/07/median-ui-v15-safelink-blogger-template.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Median+UI+V1.5+Safelink+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/07/news-blogger-professional-magazine.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=NEWS+Blogger+–+Professional+&amp;+Magazine+Theme+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/07/hartomy-grid-blogger-template-free.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Hartomy+Grid+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/07/jannify-premium-responsive-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Jannify+Premium+Responsive+Blogger+Template+Free+Download&amp;reason=Outdated&amp;m=1',
  '/2021/07/cheap-ai-chess-script-html-for-blogger.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Cheap+AI+Chess+Script+HTML+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2021/07/how-to-install-syntax-highlighter-with.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=How+To+Install+Syntax+Highlighter+With+Copy+Button+For+Blogger+Website+%5BScript+1%5D&amp;reason=Outdated&amp;m=1',
  '/2021/07/blogger-vs-wordpress-which-is-better.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Blogger+VS+Wordpress+Which+Is+Better?&amp;reason=Outdated&amp;m=1',
  '/2021/07/best-ads-networks-for-bloggers.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Best+Ads+Networks+For+Bloggers&amp;reason=Outdated&amp;m=1',
  '/2021/07/corona-virus-cheaker-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Corona+Virus+Checker+Script+%5BHTML%5D+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2021/07/advanced-word-counter-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Advanced+Word+Counter+Script+%5BHTML%5D+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2021/07/friendship-calculator-script-html-for.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=Friendship+Calculator+Script+%5BHTML%5D+For+Blogger&amp;reason=Outdated&amp;m=1',
  '/2020/11/the-7-most-important-things-ive-learned.html': 'https://www.CodeStarHub.xyz/p/sorry.html?title=The+7+Most+Important+Things+I’ve+Learned+About+SEO+This+Year+-+Code+Store+360&amp;reason=Outdated&amp;m=1',
};

// Check if the current post URL is in the redirectMap
if (redirectMap.hasOwnProperty(path)) {
  window.location.href = redirectMap[path];
}
