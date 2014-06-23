




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>markmiyashita.com/assets/js/imageScroll.js at master · negativetwelve/markmiyashita.com</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="negativetwelve/markmiyashita.com" name="twitter:title" /><meta content="markmiyashita.com - My personal website where I blog about programming and random things. I also host my CS61A discussion notes and practice problems for the students." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/1435378?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/1435378?s=400" property="og:image" /><meta content="negativetwelve/markmiyashita.com" property="og:title" /><meta content="https://github.com/negativetwelve/markmiyashita.com" property="og:url" /><meta content="markmiyashita.com - My personal website where I blog about programming and random things. I also host my CS61A discussion notes and practice problems for the students." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="0CDAD129:4017:D170D7B:53A6080E" name="octolytics-dimension-request_id" /><meta content="5403938" name="octolytics-actor-id" /><meta content="GYberkeley" name="octolytics-actor-login" /><meta content="6ec5d77c4de0169fe259e11ca1605ab64c9eacaeb22177ab0dce61c7f69df0f3" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="EhDj8hKDDLYoiyi34SEe5EEc/r/K6guxnyiZYLhsqqdobxHR6xu9wXsVGkdLg7rpIi6zKESvHAgAc4c3OdZRcA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-a6192cdfd89979e5784337e3497d62bb93ee6635.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-4b8defdcdccb0703e91275ace6405ba31c7beb05.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e92dad49a73fc63690bd63704fd55491">

      
  <meta name="description" content="markmiyashita.com - My personal website where I blog about programming and random things. I also host my CS61A discussion notes and practice problems for the students." />


  <meta content="1435378" name="octolytics-dimension-user_id" /><meta content="negativetwelve" name="octolytics-dimension-user_login" /><meta content="3610154" name="octolytics-dimension-repository_id" /><meta content="negativetwelve/markmiyashita.com" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3610154" name="octolytics-dimension-repository_network_root_id" /><meta content="negativetwelve/markmiyashita.com" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/negativetwelve/markmiyashita.com/commits/master.atom" rel="alternate" title="Recent Commits to markmiyashita.com:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="GYberkeley"
      data-repo="negativetwelve/markmiyashita.com"
      data-branch="master"
      data-sha="baa69bd5935b9e63b8265902baa345cb47573a4f"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="negativetwelve/markmiyashita.com" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/GYberkeley" class="name">
        <img alt="GeorgeY" class=" js-avatar" data-user="5403938" height="20" src="https://avatars2.githubusercontent.com/u/5403938?s=140" width="20" /> GYberkeley
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="negativetwelve/markmiyashita.com">This repository</span>
    </li>
      <li>
        <a href="/negativetwelve/markmiyashita.com/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="9FNj4+MLarmY8zfCsbsOAzWqpFpXXmCKHWd1o3NP/oREc89PD1Kp03qRxYa8emjF2M42BMUtGa+HUiJLPPG3vg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3610154" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/negativetwelve/markmiyashita.com/watchers">
        3
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/negativetwelve/markmiyashita.com/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="7sVMWUL4/z4E5L3Qy7dE5BTZTOcyC7G1b4ymhrIF42/WDtuPUkz4H6hTHVnBN7KAXba1h2LnNWOnoTiofiDpRw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar negativetwelve/markmiyashita.com">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/negativetwelve/markmiyashita.com/stargazers">
          5
        </a>
</form>
    <form accept-charset="UTF-8" action="/negativetwelve/markmiyashita.com/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="oaYRqWO5AkkfFLdYlA6L8Phy8hqH0ioUxzNAcMxjsMVaPs2dxj4rNKd8d5lE4LNoF+MkorZ2R0J8sD66A3n5YA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star negativetwelve/markmiyashita.com">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/negativetwelve/markmiyashita.com/stargazers">
          5
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/negativetwelve/markmiyashita.com/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of negativetwelve/markmiyashita.com to your account" aria-label="Fork your own copy of negativetwelve/markmiyashita.com to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/negativetwelve/markmiyashita.com/network" class="social-count">4</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/negativetwelve" class="url fn" itemprop="url" rel="author"><span itemprop="title">negativetwelve</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/negativetwelve/markmiyashita.com" class="js-current-repository js-repo-home-link">markmiyashita.com</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/negativetwelve/markmiyashita.com" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /negativetwelve/markmiyashita.com">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/negativetwelve/markmiyashita.com/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /negativetwelve/markmiyashita.com/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>9</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/negativetwelve/markmiyashita.com/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /negativetwelve/markmiyashita.com/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/negativetwelve/markmiyashita.com/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /negativetwelve/markmiyashita.com/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/negativetwelve/markmiyashita.com/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /negativetwelve/markmiyashita.com/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/negativetwelve/markmiyashita.com/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /negativetwelve/markmiyashita.com/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/negativetwelve/markmiyashita.com/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /negativetwelve/markmiyashita.com/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/negativetwelve/markmiyashita.com.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/negativetwelve/markmiyashita.com.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:negativetwelve/markmiyashita.com.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:negativetwelve/markmiyashita.com.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/negativetwelve/markmiyashita.com" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/negativetwelve/markmiyashita.com" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/negativetwelve/markmiyashita.com" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save negativetwelve/markmiyashita.com to your computer and use it in GitHub Desktop." aria-label="Save negativetwelve/markmiyashita.com to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/negativetwelve/markmiyashita.com/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download negativetwelve/markmiyashita.com as a zip file"
                   title="Download negativetwelve/markmiyashita.com as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/negativetwelve/markmiyashita.com/blob/e4fb5ef00054fa25652e96c4cead59ac95807b62/assets/js/imageScroll.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:407643e2cac3ff94928dae8f1792fc3b -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
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
        <span class="octicon octicon-x js-menu-close"></span>
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


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/blob/coffee-chats/assets/js/imageScroll.js"
                 data-name="coffee-chats"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="coffee-chats">coffee-chats</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/blob/gh-pages/assets/js/imageScroll.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/blob/mark/new-design/assets/js/imageScroll.js"
                 data-name="mark/new-design"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="mark/new-design">mark/new-design</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/blob/master/assets/js/imageScroll.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/tree/1.0.1/assets/js/imageScroll.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/negativetwelve/markmiyashita.com/tree/1.0.0/assets/js/imageScroll.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/negativetwelve/markmiyashita.com/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="assets/js/imageScroll.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/negativetwelve/markmiyashita.com" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">markmiyashita.com</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/negativetwelve/markmiyashita.com/tree/master/assets" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/negativetwelve/markmiyashita.com/tree/master/assets/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">imageScroll.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/negativetwelve/markmiyashita.com/contributors/master/assets/js/imageScroll.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
        <span class="meta-divider"></span>
          <span>9 lines (9 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.566 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/negativetwelve/markmiyashita.com?branch=master&amp;filepath=assets%2Fjs%2FimageScroll.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/negativetwelve/markmiyashita.com/edit/master/assets/js/imageScroll.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/negativetwelve/markmiyashita.com/raw/master/assets/js/imageScroll.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/negativetwelve/markmiyashita.com/blame/master/assets/js/imageScroll.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/negativetwelve/markmiyashita.com/commits/master/assets/js/imageScroll.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/negativetwelve/markmiyashita.com/delete/master/assets/js/imageScroll.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Author: Peder A. Nielsen</span></div><div class='line' id='LC3'><span class="cm"> * Created date: 05.12.13</span></div><div class='line' id='LC4'><span class="cm"> * Updated date: null</span></div><div class='line' id='LC5'><span class="cm"> * Version: 0.1</span></div><div class='line' id='LC6'><span class="cm"> * Company: Making Waves</span></div><div class='line' id='LC7'><span class="cm"> * Licensed under the MIT license</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">===</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">){</span><span class="nx">define</span><span class="p">([</span><span class="s2">&quot;jquery&quot;</span><span class="p">],</span><span class="nx">t</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">t</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)}})(</span><span class="k">this</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="s2">&quot;use strict&quot;</span><span class="p">;</span><span class="kd">function</span> <span class="nx">g</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">typeof</span> <span class="nx">e</span><span class="o">===</span><span class="nx">t</span><span class="p">}</span><span class="kd">function</span> <span class="nx">y</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span><span class="o">!!~</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">).</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">t</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">b</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="k">in</span> <span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="nx">e</span><span class="p">[</span><span class="nx">n</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">y</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span><span class="s2">&quot;-&quot;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">u</span><span class="p">[</span><span class="nx">r</span><span class="p">]</span><span class="o">!==</span><span class="kc">undefined</span><span class="p">){</span><span class="k">return</span> <span class="nx">t</span><span class="o">==</span><span class="s2">&quot;pfx&quot;</span><span class="o">?</span><span class="nx">r</span><span class="o">:</span><span class="kc">true</span><span class="p">}}</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="kd">function</span> <span class="nx">w</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="k">in</span> <span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">]];</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">!==</span><span class="kc">undefined</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">===</span><span class="kc">false</span><span class="p">)</span><span class="k">return</span> <span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="s2">&quot;function&quot;</span><span class="p">)){</span><span class="k">return</span> <span class="nx">i</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">n</span><span class="o">||</span><span class="nx">t</span><span class="p">)}</span><span class="k">return</span> <span class="nx">i</span><span class="p">}}</span><span class="k">return</span> <span class="kc">false</span><span class="p">}</span><span class="kd">function</span> <span class="nx">E</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">()</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span><span class="nx">i</span><span class="o">=</span><span class="p">(</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">f</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">r</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="s2">&quot;string&quot;</span><span class="p">)</span><span class="o">||</span><span class="nx">g</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="s2">&quot;undefined&quot;</span><span class="p">)){</span><span class="k">return</span> <span class="nx">b</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">t</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">i</span><span class="o">=</span><span class="p">(</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">l</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">r</span><span class="p">).</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span><span class="k">return</span> <span class="nx">w</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">)}}</span><span class="kd">var</span> <span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="p">{</span><span class="nx">image</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">imageAttribute</span><span class="o">:</span><span class="s2">&quot;image&quot;</span><span class="p">,</span><span class="nx">container</span><span class="o">:</span><span class="nx">e</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">),</span><span class="nx">speed</span><span class="o">:</span><span class="p">.</span><span class="mi">2</span><span class="p">,</span><span class="nx">coverRatio</span><span class="o">:</span><span class="p">.</span><span class="mi">75</span><span class="p">,</span><span class="nx">holderMinHeight</span><span class="o">:</span><span class="mi">200</span><span class="p">,</span><span class="nx">extraHeight</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">mediaWidth</span><span class="o">:</span><span class="mi">1600</span><span class="p">,</span><span class="nx">mediaHeight</span><span class="o">:</span><span class="mi">900</span><span class="p">,</span><span class="nx">parallax</span><span class="o">:</span><span class="kc">true</span><span class="p">,</span><span class="nx">touch</span><span class="o">:</span><span class="kc">false</span><span class="p">},</span><span class="nx">r</span><span class="o">=</span><span class="p">{},</span><span class="nx">i</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="s2">&quot;imageScrollModernizr&quot;</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">s</span><span class="p">),</span><span class="nx">u</span><span class="o">=</span><span class="nx">o</span><span class="p">.</span><span class="nx">style</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="s2">&quot;Webkit Moz O ms&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">),</span><span class="nx">l</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="p">{},</span><span class="nx">h</span><span class="o">=</span><span class="nx">e</span><span class="p">(</span><span class="nb">window</span><span class="p">),</span><span class="nx">p</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">v</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="kd">var</span> <span class="nx">o</span><span class="p">,</span><span class="nx">u</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">),</span><span class="nx">c</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="o">||</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="mi">10</span><span class="p">)){</span><span class="k">while</span><span class="p">(</span><span class="nx">n</span><span class="o">--</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">r</span><span class="o">?</span><span class="nx">r</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">:</span><span class="nx">s</span><span class="o">+</span><span class="p">(</span><span class="nx">n</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span><span class="nx">l</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">)}}</span><span class="nx">o</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;&amp;#173;&quot;</span><span class="p">,</span><span class="s1">&#39;&lt;style id=&quot;s&#39;</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="s1">&#39;&quot;&gt;&#39;</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="s2">&quot;&lt;/style&gt;&quot;</span><span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="nx">l</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">s</span><span class="p">;(</span><span class="nx">c</span><span class="o">?</span><span class="nx">l</span><span class="o">:</span><span class="nx">h</span><span class="p">).</span><span class="nx">innerHTML</span><span class="o">+=</span><span class="nx">o</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="p">){</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">background</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="s2">&quot;hidden&quot;</span><span class="p">;</span><span class="nx">f</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="s2">&quot;hidden&quot;</span><span class="p">;</span><span class="nx">i</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">h</span><span class="p">)}</span><span class="nx">u</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">l</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="p">){</span><span class="nx">h</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">overflow</span><span class="o">=</span><span class="nx">f</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">l</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">l</span><span class="p">)}</span><span class="k">return</span><span class="o">!!</span><span class="nx">u</span><span class="p">};</span><span class="nx">c</span><span class="p">[</span><span class="s2">&quot;csstransforms&quot;</span><span class="p">]</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!!</span><span class="nx">E</span><span class="p">(</span><span class="s2">&quot;transform&quot;</span><span class="p">)};</span><span class="nx">c</span><span class="p">[</span><span class="s2">&quot;csstransforms3d&quot;</span><span class="p">]</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=!!</span><span class="nx">E</span><span class="p">(</span><span class="s2">&quot;perspective&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="s2">&quot;webkitPerspective&quot;</span><span class="k">in</span> <span class="nx">i</span><span class="p">.</span><span class="nx">style</span><span class="p">){</span><span class="nx">m</span><span class="p">(</span><span class="s2">&quot;@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">offsetLeft</span><span class="o">===</span><span class="mi">9</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="o">===</span><span class="mi">3</span><span class="p">})}</span><span class="k">return</span> <span class="nx">e</span><span class="p">};</span><span class="nx">r</span><span class="p">.</span><span class="nx">prefixed</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="nx">E</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="s2">&quot;pfx&quot;</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">return</span> <span class="nx">E</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="nx">n</span><span class="p">)}};</span><span class="nb">window</span><span class="p">.</span><span class="nx">requestAnimationFrame</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">prefixed</span><span class="p">(</span><span class="s2">&quot;requestAnimationFrame&quot;</span><span class="p">,</span><span class="nb">window</span><span class="p">)</span><span class="o">||</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">();</span><span class="kd">var</span> <span class="nx">r</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">16</span><span class="o">-</span><span class="p">(</span><span class="nx">n</span><span class="o">-</span><span class="nx">p</span><span class="p">));</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">e</span><span class="p">(</span><span class="nx">n</span><span class="o">+</span><span class="nx">r</span><span class="p">)},</span><span class="nx">r</span><span class="p">);</span><span class="nx">p</span><span class="o">=</span><span class="nx">n</span><span class="o">+</span><span class="nx">r</span><span class="p">;</span><span class="k">return</span> <span class="nx">i</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="s2">&quot;csstransforms3d&quot;</span><span class="p">]()){</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;csstransforms3d&quot;</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="s2">&quot;csstransforms&quot;</span><span class="p">]()){</span><span class="nx">d</span><span class="o">=</span><span class="s2">&quot;csstransforms&quot;</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="o">!==</span><span class="s2">&quot;&quot;</span><span class="p">){</span><span class="nx">v</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">prefixed</span><span class="p">(</span><span class="s2">&quot;transform&quot;</span><span class="p">)}</span><span class="nx">t</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">r</span><span class="p">){</span><span class="k">return</span><span class="p">{</span><span class="nx">init</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="o">=</span><span class="nx">e</span><span class="p">(</span><span class="nx">t</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">image</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">imageAttribute</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">image</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaWidth</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">mediaWidth</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaHeight</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">mediaHeight</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">coverRatio</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;cover-ratio&quot;</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">coverRatio</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">extraHeight</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;extra-height&quot;</span><span class="p">)</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">extraHeight</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">ticking</span><span class="o">=</span><span class="kc">false</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">image</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="o">=</span><span class="nx">e</span><span class="p">(</span><span class="s2">&quot;&lt;img/&gt;&quot;</span><span class="p">,{</span><span class="nx">src</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">image</span><span class="p">})}</span><span class="k">else</span><span class="p">{</span><span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;You need to provide either a data-img attr or an image option&quot;</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">touch</span><span class="o">===</span><span class="kc">true</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">maxWidth</span><span class="o">:</span><span class="s2">&quot;100%&quot;</span><span class="p">}).</span><span class="nx">prependTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">)}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">parallax</span><span class="o">===</span><span class="kc">true</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="o">=</span><span class="nx">e</span><span class="p">(</span><span class="s2">&quot;&lt;div/&gt;&quot;</span><span class="p">,{</span><span class="nx">html</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">html</span><span class="p">()}).</span><span class="nx">css</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_getCSSObject</span><span class="p">({</span><span class="nx">transform</span><span class="o">:</span><span class="nx">v</span><span class="p">,</span><span class="nx">top</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">left</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">x</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">y</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">,</span><span class="nx">position</span><span class="o">:</span><span class="s2">&quot;fixed&quot;</span><span class="p">,</span><span class="nx">overflow</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">})).</span><span class="nx">prependTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">container</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;visibility&quot;</span><span class="p">,</span><span class="s2">&quot;hidden&quot;</span><span class="p">).</span><span class="nx">empty</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">position</span><span class="o">:</span><span class="s2">&quot;absolute&quot;</span><span class="p">,</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">,</span><span class="nx">maxWidth</span><span class="o">:</span><span class="s2">&quot;none&quot;</span><span class="p">}).</span><span class="nx">prependTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">overflow</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">position</span><span class="o">:</span><span class="s2">&quot;relative&quot;</span><span class="p">,</span><span class="nx">overflow</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">}).</span><span class="nx">prependTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">)}</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">touch</span><span class="o">===</span><span class="kc">false</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_adjustImgHolderHeights</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">parallax</span><span class="o">===</span><span class="kc">true</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">_updatePositions</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">_updateFallbackPositions</span><span class="p">()}</span><span class="k">this</span><span class="p">.</span><span class="nx">_bindEvents</span><span class="p">()}},</span><span class="nx">_adjustImgHolderHeights</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">height</span><span class="p">(),</span><span class="nx">t</span><span class="o">=</span><span class="nx">h</span><span class="p">.</span><span class="nx">width</span><span class="p">(),</span><span class="nx">n</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">coverRatio</span><span class="o">*</span><span class="nx">e</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="p">,</span><span class="nx">o</span><span class="p">,</span><span class="nx">u</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">p</span><span class="p">,</span><span class="nx">d</span><span class="p">;</span><span class="nx">n</span><span class="o">=</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">holderMinHeight</span><span class="o">&lt;</span><span class="nx">n</span><span class="o">?</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">holderMinHeight</span><span class="p">)</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">extraHeight</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">e</span><span class="o">-</span><span class="p">(</span><span class="nx">e</span><span class="o">-</span><span class="nx">n</span><span class="p">)</span><span class="o">*</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">speed</span><span class="p">);</span><span class="nx">f</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaWidth</span><span class="o">*</span><span class="p">(</span><span class="nx">c</span><span class="o">/</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaHeight</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="o">&gt;=</span><span class="nx">t</span><span class="p">){</span><span class="nx">l</span><span class="o">=</span><span class="nx">c</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">f</span><span class="o">=</span><span class="nx">t</span><span class="p">;</span><span class="nx">l</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaHeight</span><span class="o">*</span><span class="p">(</span><span class="nx">f</span><span class="o">/</span><span class="k">this</span><span class="p">.</span><span class="nx">mediaWidth</span><span class="p">))}</span><span class="nx">p</span><span class="o">=</span><span class="p">(</span><span class="nx">c</span><span class="o">-</span><span class="nx">n</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span><span class="nx">d</span><span class="o">=</span><span class="p">(</span><span class="nx">l</span><span class="o">-</span><span class="nx">c</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span><span class="nx">s</span><span class="o">=-</span><span class="p">(</span><span class="nx">e</span><span class="o">/</span><span class="p">((</span><span class="nx">e</span><span class="o">-</span><span class="nx">n</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">*</span><span class="nx">p</span><span class="p">)</span><span class="o">-</span><span class="nx">d</span><span class="p">;</span><span class="nx">o</span><span class="o">=</span><span class="nx">n</span><span class="o">/</span><span class="p">((</span><span class="nx">e</span><span class="o">-</span><span class="nx">n</span><span class="p">)</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">*</span><span class="nx">p</span><span class="o">-</span><span class="nx">d</span><span class="p">;</span><span class="nx">u</span><span class="o">=</span><span class="nx">o</span><span class="o">-</span><span class="nx">s</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="nx">e</span><span class="o">+</span><span class="nx">n</span><span class="p">;</span><span class="nx">r</span><span class="o">=-</span><span class="p">(</span><span class="nx">p</span><span class="o">+</span><span class="nx">d</span><span class="p">);</span><span class="nx">i</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">((</span><span class="nx">f</span><span class="o">-</span><span class="nx">t</span><span class="p">)</span><span class="o">*-</span><span class="p">.</span><span class="mi">5</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span><span class="nx">l</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="nx">f</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">height</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">width</span><span class="o">:</span><span class="nx">f</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="o">=</span><span class="p">{</span><span class="nx">winHeight</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">fromY</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">imgTopPos</span><span class="o">:</span><span class="nx">r</span><span class="p">,</span><span class="nx">imgLeftPos</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">imgHolderHeight</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">imgScrollingDistance</span><span class="o">:</span><span class="nx">u</span><span class="p">,</span><span class="nx">travelDistance</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">holderDistanceFromTop</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="o">-</span><span class="nx">h</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">()}},</span><span class="nx">_bindEvents</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">_adjustImgHolderHeights</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">parallax</span><span class="o">===</span><span class="kc">true</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">_requestTick</span><span class="p">()}</span><span class="k">else</span><span class="p">{</span><span class="nx">e</span><span class="p">.</span><span class="nx">_updateFallbackPositions</span><span class="p">()}});</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">parallax</span><span class="o">===</span><span class="kc">true</span><span class="p">){</span><span class="nx">h</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;scroll&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">holderDistanceFromTop</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">$imageHolder</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="o">-</span><span class="nx">h</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">();</span><span class="nx">e</span><span class="p">.</span><span class="nx">_requestTick</span><span class="p">()})}},</span><span class="nx">_requestTick</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">ticking</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">ticking</span><span class="o">=</span><span class="kc">true</span><span class="p">;</span><span class="nx">requestAnimationFrame</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">e</span><span class="p">.</span><span class="nx">_updatePositions</span><span class="p">()})}},</span><span class="nx">_updatePositions</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">holderDistanceFromTop</span><span class="o">&lt;=</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">winHeight</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">holderDistanceFromTop</span><span class="o">&gt;=-</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgHolderHeight</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">holderDistanceFromTop</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgHolderHeight</span><span class="p">,</span><span class="nx">t</span><span class="o">=</span><span class="nx">e</span><span class="o">/</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">travelDistance</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">fromY</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgScrollingDistance</span><span class="o">*</span><span class="p">(</span><span class="mi">1</span><span class="o">-</span><span class="nx">t</span><span class="p">));</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_getCSSObject</span><span class="p">({</span><span class="nx">transform</span><span class="o">:</span><span class="nx">v</span><span class="p">,</span><span class="nx">x</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgLeftPos</span><span class="p">),</span><span class="nx">y</span><span class="o">:</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">holderDistanceFromTop</span><span class="p">),</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;visible&quot;</span><span class="p">}));</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_getCSSObject</span><span class="p">({</span><span class="nx">transform</span><span class="o">:</span><span class="nx">v</span><span class="p">,</span><span class="nx">x</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">y</span><span class="o">:</span><span class="nx">n</span><span class="p">,</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;visible&quot;</span><span class="p">}))}</span><span class="k">else</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">visibility</span><span class="o">:</span><span class="s2">&quot;hidden&quot;</span><span class="p">})}</span><span class="k">this</span><span class="p">.</span><span class="nx">ticking</span><span class="o">=</span><span class="kc">false</span><span class="p">},</span><span class="nx">_updateFallbackPositions</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollerHolder</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span><span class="s2">&quot;100%&quot;</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">$scrollingElement</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">top</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgTopPos</span><span class="p">,</span><span class="nx">left</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">scrollingState</span><span class="p">.</span><span class="nx">imgLeftPos</span><span class="p">})},</span><span class="nx">_getCSSObject</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="o">===</span><span class="s2">&quot;csstransforms3d&quot;</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">transform</span><span class="o">=</span><span class="s2">&quot;translate3d(&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">x</span><span class="o">+</span><span class="s2">&quot;px, &quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">y</span><span class="o">+</span><span class="s2">&quot;px, 0)&quot;</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="o">===</span><span class="s2">&quot;csstransforms&quot;</span><span class="p">){</span><span class="nx">e</span><span class="p">.</span><span class="nx">transform</span><span class="o">=</span><span class="s2">&quot;translate(&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">x</span><span class="o">+</span><span class="s2">&quot;px, &quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">y</span><span class="o">+</span><span class="s2">&quot;px)&quot;</span><span class="p">}</span><span class="k">else</span><span class="p">{</span><span class="nx">e</span><span class="p">.</span><span class="nx">top</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">left</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">x</span><span class="p">}</span><span class="k">return</span> <span class="nx">e</span><span class="p">}}};</span><span class="nx">t</span><span class="p">.</span><span class="nx">defaults</span><span class="o">=</span><span class="nx">n</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">imageScroll</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){(</span><span class="k">new</span> <span class="nx">t</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">e</span><span class="p">)).</span><span class="nx">init</span><span class="p">()})};</span><span class="k">return</span> <span class="nx">t</span><span class="p">});</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.09514s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
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
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-51e3b077e56f2f3244290e430b8d05253607065b.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f9d903c1b134ba676e19317f455346cae18d9db8.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

