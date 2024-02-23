/*! For license information please see 38b4ed84.88dcf5f5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944654],{872778:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var c=r(824246),t=r(511151);const i={id:"backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api"},s=void 0,a={id:"reference/backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api",source:"@site/../docs/reference/backend-plugin-api.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api",permalink:"/docs/reference/backend-plugin-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api",title:"@backstage/backend-plugin-api",description:"API Reference for @backstage/backend-plugin-api"}},d={},o=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,c.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})]}),"\n",(0,c.jsx)(n.p,{children:"Core API used by Backstage backend plugins."}),"\n",(0,c.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Function"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendmodule",children:"createBackendModule(config)"})}),(0,c.jsx)(n.td,{children:"Creates a new backend module for a given plugin."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendplugin",children:"createBackendPlugin(config)"})}),(0,c.jsx)(n.td,{children:"Creates a new backend plugin."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createextensionpoint",children:"createExtensionPoint(config)"})}),(0,c.jsx)(n.td,{children:"Creates a new backend extension point."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createservicefactory",children:"createServiceFactory(config)"})}),(0,c.jsx)(n.td,{children:"Creates a root scoped service factory without options."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createservicefactory_1",children:"createServiceFactory(config)"})}),(0,c.jsx)(n.td,{children:"Creates a root scoped service factory with optional options."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createservicefactory_2",children:"createServiceFactory(config)"})}),(0,c.jsx)(n.td,{children:"Creates a plugin scoped service factory without options."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createservicefactory_3",children:"createServiceFactory(config)"})}),(0,c.jsx)(n.td,{children:"Creates a plugin scoped service factory with optional options."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createserviceref",children:"createServiceRef(config)"})}),(0,c.jsx)(n.td,{children:"Creates a new service definition. This overload is used to create plugin scoped services."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createserviceref_1",children:"createServiceRef(config)"})}),(0,c.jsx)(n.td,{children:"Creates a new service definition. This overload is used to create root scoped services."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Interface"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.authservice",children:"AuthService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendmoduleconfig",children:"BackendModuleConfig"})}),(0,c.jsxs)(n.td,{children:["The configuration options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendmodule",children:"createBackendModule()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendmoduleregistrationpoints",children:"BackendModuleRegistrationPoints"})}),(0,c.jsxs)(n.td,{children:["The callbacks passed to the ",(0,c.jsx)(n.code,{children:"register"})," method of a backend module."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendpluginconfig",children:"BackendPluginConfig"})}),(0,c.jsxs)(n.td,{children:["The configuration options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createbackendplugin",children:"createBackendPlugin()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backendpluginregistrationpoints",children:"BackendPluginRegistrationPoints"})}),(0,c.jsxs)(n.td,{children:["The callbacks passed to the ",(0,c.jsx)(n.code,{children:"register"})," method of a backend plugin."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstageuserinfo",children:"BackstageUserInfo"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservice",children:"CacheService"})}),(0,c.jsx)(n.td,{children:"A pre-configured, storage agnostic cache service suitable for use by Backstage plugins."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.databaseservice",children:"DatabaseService"})}),(0,c.jsx)(n.td,{children:"The DatabaseService manages access to databases that Plugins get."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"})}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.p,{children:"The DiscoveryService is used to provide a mechanism for backend plugins to discover the endpoints for itself or other backend plugins."}),(0,c.jsx)(n.p,{children:"The purpose of the discovery API is to allow for many different deployment setups and routing methods through a central configuration, instead of letting each individual plugin manage that configuration."}),(0,c.jsx)(n.p,{children:"Implementations of the discovery API can be as simple as a URL pattern using the pluginId, but could also have overrides for individual plugins, or query a separate discovery service."})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.extensionpointconfig",children:"ExtensionPointConfig"})}),(0,c.jsxs)(n.td,{children:["The configuration options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.createextensionpoint",children:"createExtensionPoint()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.httprouterservice",children:"HttpRouterService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.httprouterserviceauthpolicy",children:"HttpRouterServiceAuthPolicy"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.identityservice",children:"IdentityService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservice",children:"LifecycleService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownoptions",children:"LifecycleServiceShutdownOptions"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservicestartupoptions",children:"LifecycleServiceStartupOptions"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"})}),(0,c.jsx)(n.td,{children:"A service that provides a logging facility."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.permissionsservice",children:"PermissionsService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.pluginmetadataservice",children:"PluginMetadataService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.pluginservicefactoryconfig",children:"PluginServiceFactoryConfig"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.rootconfigservice",children:"RootConfigService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.roothttprouterservice",children:"RootHttpRouterService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.rootlifecycleservice",children:"RootLifecycleService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.rootloggerservice",children:"RootLoggerService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig",children:"RootServiceFactoryConfig"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.servicerefconfig",children:"ServiceRefConfig"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.tokenmanagerservice",children:"TokenManagerService"})}),(0,c.jsx)(n.td,{children:"Interface for creating and validating tokens."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"})}),(0,c.jsx)(n.td,{children:"A generic interface for fetching plain data from URLs."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.userinfoservice",children:"UserInfoService"})}),(0,c.jsx)(n.td,{})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Namespace"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.coreservices",children:"coreServices"})}),(0,c.jsx)(n.td,{children:"All core services references"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Type Alias"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstagenoneprincipal",children:"BackstageNonePrincipal"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstageprincipaltypes",children:"BackstagePrincipalTypes"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstageserviceprincipal",children:"BackstageServicePrincipal"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.backstageuserprincipal",children:"BackstageUserPrincipal"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheserviceoptions",children:"CacheServiceOptions"})}),(0,c.jsxs)(n.td,{children:["Options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservice.withoptions",children:"CacheService.withOptions()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservicesetoptions",children:"CacheServiceSetOptions"})}),(0,c.jsxs)(n.td,{children:["Options passed to ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservice.set",children:"CacheService.set()"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.extensionpoint",children:"ExtensionPoint"})}),(0,c.jsx)(n.td,{children:"TODO"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownhook",children:"LifecycleServiceShutdownHook"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservicestartuphook",children:"LifecycleServiceStartupHook"})}),(0,c.jsx)(n.td,{})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readtreeoptions",children:"ReadTreeOptions"})}),(0,c.jsxs)(n.td,{children:["An options object for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree",children:"UrlReaderService.readTree()"})," operations."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readtreeresponse",children:"ReadTreeResponse"})}),(0,c.jsxs)(n.td,{children:["A response object for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree",children:"UrlReaderService.readTree()"})," operations."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readtreeresponsediroptions",children:"ReadTreeResponseDirOptions"})}),(0,c.jsx)(n.td,{children:"Options that control  execution."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readtreeresponsefile",children:"ReadTreeResponseFile"})}),(0,c.jsxs)(n.td,{children:["Represents a single file in a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice.readtree",children:"UrlReaderService.readTree()"})," response."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readurloptions",children:"ReadUrlOptions"})}),(0,c.jsx)(n.td,{children:"An options object for readUrl operations."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.readurlresponse",children:"ReadUrlResponse"})}),(0,c.jsxs)(n.td,{children:["A response object for ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice.readurl",children:"UrlReaderService.readUrl()"})," operations."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.searchoptions",children:"SearchOptions"})}),(0,c.jsx)(n.td,{children:"An options object for search operations."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.searchresponse",children:"SearchResponse"})}),(0,c.jsx)(n.td,{children:"The output of a search operation."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.searchresponsefile",children:"SearchResponseFile"})}),(0,c.jsx)(n.td,{children:"Represents a single file in a search response."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.servicefactoryorfunction",children:"ServiceFactoryOrFunction"})}),(0,c.jsxs)(n.td,{children:["Represents either a ",(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"})," or a function that returns one."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.serviceref",children:"ServiceRef"})}),(0,c.jsx)(n.td,{children:"TODO"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var c=r(827378),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var c,i={},o=null,l=null;for(c in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,c)&&!d.hasOwnProperty(c)&&(i[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===i[c]&&(i[c]=n[c]);return{$$typeof:t,type:e,key:o,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},541535:(e,n)=>{var r=Symbol.for("react.element"),c=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),d=Symbol.for("react.context"),o=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function g(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function b(){}function v(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=v.prototype=new b;k.constructor=v,x(k,g.prototype),k.isPureReactComponent=!0;var y=Array.isArray,S=Object.prototype.hasOwnProperty,m={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function R(e,n,c){var t,i={},s=null,a=null;if(null!=n)for(t in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)S.call(n,t)&&!_.hasOwnProperty(t)&&(i[t]=n[t]);var d=arguments.length-2;if(1===d)i.children=c;else if(1<d){for(var o=Array(d),l=0;l<d;l++)o[l]=arguments[l+2];i.children=o}if(e&&e.defaultProps)for(t in d=e.defaultProps)void 0===i[t]&&(i[t]=d[t]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:m.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,t,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var d=!1;if(null===e)d=!0;else switch(a){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case r:case c:d=!0}}if(d)return s=s(d=e),e=""===i?"."+P(d,0):i,y(s)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),O(s,n,t,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||d&&d.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),n.push(s)),1;if(d=0,i=""===i?".":i+":",y(e))for(var o=0;o<e.length;o++){var l=i+P(a=e[o],o);d+=O(a,n,t,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),o=0;!(a=e.next()).done;)d+=O(a=a.value,n,t,l=i+P(a,o++),s);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return d}function T(e,n,r){if(null==e)return e;var c=[],t=0;return O(e,c,"","",(function(e){return n.call(r,e,t++)})),c}function E(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},$={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:m};n.Children={map:T,forEach:function(e,n,r){T(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return T(e,(function(){n++})),n},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=t,n.Profiler=s,n.PureComponent=v,n.StrictMode=i,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,c){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=x({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(s=n.ref,a=m.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(o in n)S.call(n,o)&&!_.hasOwnProperty(o)&&(t[o]=void 0===n[o]&&void 0!==d?d[o]:n[o])}var o=arguments.length-2;if(1===o)t.children=c;else if(1<o){d=Array(o);for(var l=0;l<o;l++)d[l]=arguments[l+2];t.children=d}return{$$typeof:r,type:e.type,key:i,ref:s,props:t,_owner:a}},n.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=R,n.createFactory=function(e){var n=R.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:o,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return A.current.useCallback(e,n)},n.useContext=function(e){return A.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return A.current.useDeferredValue(e)},n.useEffect=function(e,n){return A.current.useEffect(e,n)},n.useId=function(){return A.current.useId()},n.useImperativeHandle=function(e,n,r){return A.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return A.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return A.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return A.current.useMemo(e,n)},n.useReducer=function(e,n,r){return A.current.useReducer(e,n,r)},n.useRef=function(e){return A.current.useRef(e)},n.useState=function(e){return A.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return A.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return A.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var c=r(667294);const t={},i=c.createContext(t);function s(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);