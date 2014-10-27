



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>tbuser/thingiview.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="tbuser/thingiview.js" name="twitter:title" /><meta content="thingiview.js - Javascript 3D Model Viewer" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/3828?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/3828?v=2&amp;s=400" property="og:image" /><meta content="tbuser/thingiview.js" property="og:title" /><meta content="https://github.com/tbuser/thingiview.js" property="og:url" /><meta content="thingiview.js - Javascript 3D Model Viewer" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8DDB6368:6727:2BD89C5:544E84D6" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="+taSX9rd4i7TKO8HZERIDL3WKSA3yZH+61MYURVRdLzZjqqaf5ker7REpzzxyhd+fy6olQQzFe73FrXz05WAXw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-fd24da028f7f2d737c9a6d97bdd8aa7a5d7ec419c4cc4e89b169d30c58bed96b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-e601e4dc2eec6decc441b9f7e15eec77891539a1a5e2d8af7af600d1d061a150.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="e375408a179f2ef68cd4fb7efa2d26f7">

      
  <meta name="description" content="thingiview.js - Javascript 3D Model Viewer">
  <meta name="go-import" content="github.com/tbuser/thingiview.js git https://github.com/tbuser/thingiview.js.git">

  <meta content="3828" name="octolytics-dimension-user_id" /><meta content="tbuser" name="octolytics-dimension-user_login" /><meta content="1010501" name="octolytics-dimension-repository_id" /><meta content="tbuser/thingiview.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1010501" name="octolytics-dimension-repository_network_root_id" /><meta content="tbuser/thingiview.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/tbuser/thingiview.js/commits/master.atom" rel="alternate" title="Recent Commits to thingiview.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Ftbuser%2Fthingiview.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/tbuser/thingiview.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/tbuser/thingiview.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Ftbuser%2Fthingiview.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/tbuser/thingiview.js/stargazers">
      246
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftbuser%2Fthingiview.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/tbuser/thingiview.js/network" class="social-count">
        72
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/tbuser" class="url fn" itemprop="url" rel="author"><span itemprop="title">tbuser</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/tbuser/thingiview.js" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">thingiview.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/tbuser/thingiview.js/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/tbuser/thingiview.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /tbuser/thingiview.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/tbuser/thingiview.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /tbuser/thingiview.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/tbuser/thingiview.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /tbuser/thingiview.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/tbuser/thingiview.js/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /tbuser/thingiview.js/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/tbuser/thingiview.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /tbuser/thingiview.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/tbuser/thingiview.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/tbuser/thingiview.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/tbuser/thingiview.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/tbuser/thingiview.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/tbuser/thingiview.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of tbuser/thingiview.js as a zip file"
                   title="Download the contents of tbuser/thingiview.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      <p>Javascript 3D Model Viewer</p>
    </div>

    <div class="repository-website">
      <p><a href="http://replimat.com/thingiview/examples" rel="nofollow">http://replimat.com/thingiview/examples</a></p>
    </div>


</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/tbuser/thingiview.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              59
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/tbuser/thingiview.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/tbuser/thingiview.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/tbuser/thingiview.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      3
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/tbuser/thingiview.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">96.3%</span>
              </a>
          </li>
          <li>
              <a href="/tbuser/thingiview.js/search?l=php">
                <span class="color-block language-color" style="background-color:#4F5D95;"></span>
                <span class="lang">PHP</span>
                <span class="percent">3.7%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#4F5D95">
  <span class="language-color" style="width:96.3%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:3.7%; background-color:#4F5D95;" itemprop="keywords">PHP</span>
    </a>
  </div>

<div class="js-deferred-content"
  data-url="/tbuser/thingiview.js/show_partial?partial=recently_touched_branches_list">
</div>

<div class="file-navigation in-mid-page">
  <a href="/tbuser/thingiview.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/tbuser/thingiview.js/compare" aria-label="Compare, review, create a pull request" class="minibutton primary tooltipped tooltipped-s left compare-button" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tbuser/thingiview.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tbuser/thingiview.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">thingiview.js</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Ftbuser%2Fthingiview.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/tbuser/thingiview.js/commit/ccd6283ecc26415d1703e1a28c0f08bee159848a" class="message" data-pjax="true" title="started adding support for rendering PLY point clouds (incomplete)">started adding support for rendering PLY point clouds (incomplete)</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="ccd6283ecc26415d1703e1a28c0f08bee159848a" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/tbuser/thingiview.js/commit/ccd6283ecc26415d1703e1a28c0f08bee159848a" class="sha-block" data-pjax>latest commit <span class="sha">ccd6283ecc</span></a>

      <div class="authorship">
        <img alt="Tony Buser" class="avatar" data-user="3828" height="20" src="https://avatars3.githubusercontent.com/u/3828?v=2&amp;s=40" width="20" />
        <span class="author-name"><a href="/tbuser" rel="author">tbuser</a></span>
        authored <time class="updated" datetime="2011-05-03T13:02:10Z" is="relative-time">May 3, 2011</time>

      </div>
    </div>
  </div>

  <div class="file-wrap">
    <table class="files" data-pjax>

      <tbody class=""
  data-url="/tbuser/thingiview.js/file-list/master"
  data-deferred-content-error="Failed to load latest commit information.">

    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/tree/master/examples" class="js-directory-link" id="bfebe34154a0dfd9fc7b447fc9ed74e9-f43181d3cc7616189e61d89ae9373d1bc7a14dd4" title="examples">examples</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/ccd6283ecc26415d1703e1a28c0f08bee159848a" class="message" data-pjax="true" title="started adding support for rendering PLY point clouds (incomplete)">started adding support for rendering PLY point clouds (incomplete)</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2011-05-03T13:02:10Z" is="time-ago">May 3, 2011</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/tree/master/javascripts" class="js-directory-link" id="39144ad189270c304eee5e1c3fbeccdd-ecc1a617dccc6cc93949fd1ac36915dac6e90ee1" title="javascripts">javascripts</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/ccd6283ecc26415d1703e1a28c0f08bee159848a" class="message" data-pjax="true" title="started adding support for rendering PLY point clouds (incomplete)">started adding support for rendering PLY point clouds (incomplete)</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2011-05-03T13:02:10Z" is="time-ago">May 3, 2011</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/tree/master/php" class="js-directory-link" id="e1bfd762321e409cee4ac0b6e841963c-fe47f5461417374b17b230ff1f8d7e0e25cff9cf" title="php">php</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/29921de57a723e1f82350675c0b69c40469026f8" class="message" data-pjax="true" title="removed unused normals array from all the different parsing methods">removed unused normals array from all the different parsing methods</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2011-03-09T15:58:44Z" is="time-ago">Mar 9, 2011</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-e43b0f988953ae3a84b00331d0ccf5f7d51cb3cf" title=".gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/ccd6283ecc26415d1703e1a28c0f08bee159848a" class="message" data-pjax="true" title="started adding support for rendering PLY point clouds (incomplete)">started adding support for rendering PLY point clouds (incomplete)</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2011-05-03T13:02:10Z" is="time-ago">May 3, 2011</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/blob/master/LICENSE" class="js-directory-link" id="9879d6db96fd29134fc802214163b95a-65c5ca88a67c30becee01c5a8816d964b03862f9" title="LICENSE">LICENSE</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/1e820f723f395dd3c7479f46bbe7afb2db155e63" class="message" data-pjax="true" title="added license">added license</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2010-11-14T08:19:17Z" is="time-ago">Nov 14, 2010</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/tbuser/thingiview.js/blob/master/README.markdown" class="js-directory-link" id="0a369498a5a8db3ac8fa606b544c9810-775bbcc725ded10bbfdb3c80f12d1fdd92d0f29c" title="README.markdown">README.markdown</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/tbuser/thingiview.js/commit/5a59f1946c9a505d52335177b0f413c67d216f3d" class="message" data-pjax="true" title="I speel reel gud - fixed typos">I speel reel gud - fixed typos</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2010-11-30T20:44:27Z" is="time-ago">Nov 30, 2010</time></span>
      </td>
    </tr>
</tbody>

    </table>
  </div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body markdown">
    <h3>
      <span class="octicon octicon-book"></span>
      README.markdown
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="user-content-thingiviewjs" class="anchor" href="#thingiviewjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Thingiview.js</h1>

<p>A javascript (using Canvas and WebGL if available) 3D model viewer.  Uses the <a href="http://github.com/mrdoob/three.js">Three.js</a> 3D Engine.  Check out the <a href="http://replimat.com/thingiview/examples/">Examples</a>.</p>

<h1>
<a name="user-content-features" class="anchor" href="#features" aria-hidden="true"><span class="octicon octicon-link"></span></a>Features</h1>

<ul class="task-list">
<li>supports binary and ascii STL and OBJ files without requiring any preprocessing, all the parsing is done on the client in javascript</li>
<li>everything is done client side in javascript, requires no plugins for most browsers</li>
<li>should work in all browsers, including iPhone/iPad (might require <a href="http://code.google.com/chrome/chromeframe">Google Chrome Frame</a> for IE)</li>
<li>uses HTML canvas or automatically detects and enables webgl if browser supports it</li>
<li>configurable colors</li>
<li>is made of awesome</li>
</ul>

<h1>
<a name="user-content-example" class="anchor" href="#example" aria-hidden="true"><span class="octicon octicon-link"></span></a>Example</h1>

<pre><code>
    &lt;script src="/javascripts/Three.js"&gt;&lt;/script&gt;
    &lt;script src="/javascripts/plane.js"&gt;&lt;/script&gt;
    &lt;script src="/javascripts/thingiview.js"&gt;&lt;/script&gt;

    &lt;script&gt;
      window.onload = function() {
        thingiurlbase = "/javascripts";
        thingiview = new Thingiview("viewer");
        thingiview.setObjectColor('#C0D8F0');
        thingiview.initScene();
        thingiview.loadSTL("/objects/cube.stl");
      }
    &lt;/script&gt;

    &lt;div id="viewer" style="width:300px;height:300px"&gt;&lt;/div&gt;
</code></pre>

<h1>
<a name="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h1>

<p>It's important that everything is done within window.onload.</p>

<h2>
<a name="user-content-thingiurlbase--javascripts" class="anchor" href="#thingiurlbase--javascripts" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiurlbase = "/javascripts";</h2>

<p>Must be set to the path where the javascript files are located so that related scripts can be loaded dynamically.</p>

<h2>
<a name="user-content-thingiview--new-thingiviewid-of-viewers-container-div" class="anchor" href="#thingiview--new-thingiviewid-of-viewers-container-div" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview = new Thingiview("id of viewer's container div");</h2>

<p>Pass the id of the div to place the viewer into.  You can set the width and height on the css for that div.</p>

<h2>
<a name="user-content-thingiviewinitscene" class="anchor" href="#thingiviewinitscene" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.initScene();</h2>

<p>Loads the scene into the container div.</p>

<h2>
<a name="user-content-thingiviewloadstlpathtomodelstl-or-thingiviewloadobjpathtomodelobj" class="anchor" href="#thingiviewloadstlpathtomodelstl-or-thingiviewloadobjpathtomodelobj" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.loadSTL("/path/to/model.stl"); or thingiview.loadOBJ("/path/to/model.obj");</h2>

<p>Make sure you pass the full url path to the model file you want to load.  This will make an ajax call to the server to fetch it.</p>

<h2>
<a name="user-content-thingiviewsetshowplanetrue" class="anchor" href="#thingiviewsetshowplanetrue" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setShowPlane(true);</h2>

<p><code>true or false</code>.  Show or hide the 100x100 grid plane under the object.</p>

<h2>
<a name="user-content-thingiviewsetbackgroundcolorffffff" class="anchor" href="#thingiviewsetbackgroundcolorffffff" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setBackgroundColor('#ffffff');</h2>

<p>Sets the background color of the viewer's container.</p>

<h2>
<a name="user-content-thingiviewsetobjectmaterialsolid" class="anchor" href="#thingiviewsetobjectmaterialsolid" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setObjectMaterial('solid');</h2>

<p><code>solid or wireframe</code>.  Changes the object's material.</p>

<h2>
<a name="user-content-thingiviewsetobjectcolorc0d8f0" class="anchor" href="#thingiviewsetobjectcolorc0d8f0" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setObjectColor('#C0D8F0');</h2>

<p>Yep, it sets the object's color.</p>

<h2>
<a name="user-content-thingiviewsetrotationtrue" class="anchor" href="#thingiviewsetrotationtrue" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setRotation(true);</h2>

<p><code>true or false</code>.  This causes the object to slowly rotate around the z axis.</p>

<h2>
<a name="user-content-thingiviewsetcameraviewtop" class="anchor" href="#thingiviewsetcameraviewtop" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setCameraView('top');</h2>

<p>Possible values include: <code>top, side, bottom, diagonal</code>.  Resets the camera view to the desired angle.</p>

<h2>
<a name="user-content-thingiviewsetcamerazoom5" class="anchor" href="#thingiviewsetcamerazoom5" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.setCameraZoom(5);</h2>

<p>Pass a positive number to zoom the camera in or a negative number to zoom out.</p>

<h2>
<a name="user-content-thingiviewdisplayalertthis-is-a-message" class="anchor" href="#thingiviewdisplayalertthis-is-a-message" aria-hidden="true"><span class="octicon octicon-link"></span></a>thingiview.displayAlert("This is a message");</h2>

<p>Displays the text passed in a window inside the viewer with an Ok button to then hide it.</p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02733s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-dabc650f8a51dffd1d4376a3522cbda5536e4807e01d2a86ff7e60d8d6ee3029.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-d01013daa80c5a341ba3ddb684f2f26679eb369d67459151d5175a634a9e98a5.js" type="text/javascript"></script>
      
      
  </body>
</html>

