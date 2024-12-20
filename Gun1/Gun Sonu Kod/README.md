# React Eğitim İçeriği ve Ders Programı

## 18.11.2024
- [x] SPA Nedir?
- [x] React nedir?
- [x] React kurulumu ve projeyi çalıştırma
- [x] Component nedir?
- [x] Class component
- [x] Function component
- [x] JSX Nedir?
- [x] Virtual DOM
- [x] Değişken oluşturma
- [x] React Hooks
	- [x] useState
- [x] Function ve Arrow Function
- [x] Style
- [x]  (Pratik Zamanı) Personel projesi yapalım
- [x] Router (React Router eski)
	- [ ] Link
		- [ ] state
		- [ ] Hooks
			- [ ] useLocation
	- [x] NavLink
		- [x] isActive
		- [x] isPending
	- [ ] Hooks
		- [ ] useNavigate
		- [ ] useParams
	- [ ] Navigate
- [x] Router (React Router yeni)
	- [x] RouterProvider
	- [x] Data Router
		- [x] createBrowserRouter

## Concepts
- [ ] Data Router
	- [ ] createBrowserRouter
	- [ ] createHashRouter
	- [ ] createMemoryRouter
	- [ ] createStaticHandler
	- [ ] createStaticRouter
- [ ] API istekleri
- [ ] Fetch
- [ ] Axios
- [ ] Life Cycle ve Life Cycle Methods
- [ ] React Hooks
	- [ ] useEffect
- [ ] (Pratik Zamanı) json-server ile bir eTicaret yapalım

## Libraries
- [ ] React Tanstack Query (Axios, Fetch)
- [ ] React Formik

## State Management
- [ ] State Management
	- [ ] Context API
		- [ ] React Hooks
			- [ ] createContext
			- [ ] useContext
	- [ ] Redux Toolkit (Async Thunk)
		- [ ] React Hooks
			- [ ] useReducer
	- [ ] Zustand
	
## Hooks
- [ ] React Hooks
	- [ ] useMemo
	- [ ] useRef
 	- [ ] useCallback
 	- [ ] useLayoutEffect
 	- [ ] useImperativeHandle
 	- [ ] useTransition (React 18 ve sonrası)
 	- [ ] useDeferredValue (React 18 ve sonrası)
 	- [ ] useId (React 18 ve sonrası)
 	- [ ] useSyncExternalStore (React 18 ve sonrası)
 	- [ ] useInsertionEffect (React 18 ve sonrası)

- [ ] Zod - React Hook Form
- [ ] ion18
- [ ] Prisma ORM + MongoDb + NextAPI Root Full Stack Proje

## Not: 
Node.JS kurulumu için <a href="https://nodejs.org/en" target="_blank">buraya tıklayın</a>  

React Documentation için <a href="https://tr.react.dev/" target="_blank">buraya tıklayın</a>  

React Router için <a href="https://reactrouter.com/en/main" target="_blank">buraya tıklayın</a>  

React Redux için <a href="https://react-redux.js.org/" target="_blank">buraya tıklayın</a>  

React Formik için <a href="https://formik.org/" target="_blank">buraya tıklayın</a>

React Tanstack Query için <a href="https://tanstack.com/query/latest" target="_blank">buraya tıklayın</a>

CLI komutları için Powershell güvenlik iznini değiştirme
```powershel
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

React projesi oluşturma
```powershell
npx create-react-app my-app
```

Vite js ile React projesi oluşturma
```powershell
npm create vite@latest my-react-app -- --template react-ts
```