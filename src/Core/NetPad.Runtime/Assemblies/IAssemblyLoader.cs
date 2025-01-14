using System.Reflection;
using NetPad.DotNet;

namespace NetPad.Assemblies;

public interface IAssemblyLoader : IDisposable
{
    Assembly LoadFrom(byte[] assemblyBytes);
    Assembly LoadFromAssemblyPath(string path);
    IAssemblyLoader WithReferenceAssemblyImages(IEnumerable<AssemblyImage> referenceAssemblyImages);
    IAssemblyLoader WithReferenceAssemblyFiles(IEnumerable<string> referenceAssemblyPaths);
}
